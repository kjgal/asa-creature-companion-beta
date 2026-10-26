import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createService, parseRate, SOURCE} from './worker.mjs';
const request = (path = '/official-rate.json', options) => new Request('https://example.workers.dev' + path, options);
test('strict parsing supports official CRLF feed and rejects ambiguous/invalid values', () => {
  assert.equal(parseRate('XPMultiplier=2\r\nTamingSpeedMultiplier=2.0\r\n'), 2);
  for (const text of ['', 'TamingSpeedMultiplier=0', 'TamingSpeedMultiplier=Infinity', 'TamingSpeedMultiplier=2\nTamingSpeedMultiplier=3']) assert.throws(() => parseRate(text));
});
test('refreshes on request after one minute, preserving the real check timestamp', async () => {
  let time=Date.parse('2026-10-26T19:00:00Z'), calls=0, value=2;
  const service=createService(async url=>{assert.equal(url,SOURCE);calls++;return new Response('TamingSpeedMultiplier='+value+'\r\n');},()=>time);
  const first=await (await service.fetch(request())).json();assert.equal(first.rate,2);
  time+=30_000;value=1;assert.deepEqual(await (await service.fetch(request())).json(),first);assert.equal(calls,1);
  time+=31_000;const next=await (await service.fetch(request())).json();assert.equal(next.rate,1);assert.notEqual(next.checkedAt,first.checkedAt);assert.equal(calls,2);
});
test('failure never relabels an expired cached result as fresh and can recover', async () => {
  let time=0, fail=false;
  const service=createService(async()=>{if(fail)throw Error('offline');return new Response('TamingSpeedMultiplier=2');},()=>time);
  await service.fetch(request());time+=61_000;fail=true;let response=await service.fetch(request());assert.equal(response.status,503);assert.equal((await response.json()).checkedAt,undefined);
  fail=false;assert.equal((await service.fetch(request())).status,200);
});
test('fixed route, method and CORS; invalid upstream is rejected', async()=>{
  const service=createService(async()=>new Response('not a feed'));
  assert.equal((await service.fetch(request('/elsewhere'))).status,404);
  assert.equal((await service.fetch(request(undefined,{method:'POST'}))).status,405);
  assert.equal((await service.fetch(request(undefined,{headers:{Origin:'https://other.example'}}))).status,403);
  assert.equal((await service.fetch(request(undefined,{method:'OPTIONS',headers:{Origin:'https://kjgal.github.io'}}))).status,204);
  const result=await service.fetch(request());assert.equal(result.status,503);assert.equal(result.headers.get('Access-Control-Allow-Origin'),'https://kjgal.github.io');assert.equal(result.headers.get('Cache-Control'),'no-store');
});
