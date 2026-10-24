const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const app=fs.readFileSync('site/app.js','utf8');
const code=app.slice(app.indexOf('function showOfficialRate('),app.indexOf("$('custom-rate').oninput"));
const now=Date.parse('2026-10-24T08:00:00Z');
async function scenario(data,{custom=null,fail=false}={}){
 const elements={};let request,saves=0;
 const state={rate:2,customRate:custom,officialRate:{rate:2,checkedAt:'2026-10-18T14:04:00Z'},session:{notes:'keep my tame'}};
 const context={state,Date:class extends Date{static now(){return now;}},AbortSignal,Number,console,
  $:id=>elements[id]||(elements[id]={removeAttribute(){}}),
  fetch:async(url,options)=>{request={url,options};if(fail)throw new Error('offline');return {ok:true,json:async()=>data};},
  save:()=>{saves++;},rate:value=>{state.rate=value;saves++;}};
 vm.createContext(context);await vm.runInContext('let officialRateBusy=false;'+code+';refreshOfficialRate()',context);
 assert.equal(state.session.notes,'keep my tame');
 return {state,elements,request,saves};
}
(async()=>{
 const snapshot=(hours,rate=3)=>({rate,checkedAt:new Date(now-hours*3600000).toISOString()});
 let r=await scenario(snapshot(3.5));assert.equal(r.state.rate,3);assert.equal(r.state.officialRate.checkedAt,snapshot(3.5).checkedAt);assert.match(r.elements['rate-help'].textContent,/check delayed/);assert.doesNotMatch(r.elements['rate-help'].textContent,/Couldn’t refresh/);assert.match(r.request.url,/official-rate.json\?checked=/);assert.equal(r.request.options.cache,'no-store');
 r=await scenario(snapshot(.5));assert.equal(r.state.rate,3);assert.equal(r.elements['rate-help'].hidden,true);assert.match(r.elements['official-rate'].textContent,/scheduled check/);
 r=await scenario(snapshot(3),{custom:4});assert.equal(r.state.rate,2);assert.equal(r.state.officialRate.rate,3);assert.match(r.elements['rate-help'].textContent,/custom rate: ×4/);assert.equal(r.saves,1);
 for(const data of [snapshot(25),snapshot(-1),snapshot(1,0),{error:'unavailable'}]){r=await scenario(data);assert.equal(r.state.officialRate.checkedAt,'2026-10-18T14:04:00Z');assert.match(r.elements['rate-help'].textContent,/Couldn’t refresh/);}
 r=await scenario(null,{fail:true});assert.equal(r.state.rate,2);assert.match(r.elements['rate-help'].textContent,/Couldn’t refresh/);
 console.log('Rate refresh: delayed recovery, fresh checks, custom override, stale/invalid/offline fallback and progress preservation passed.');
})().catch(e=>{console.error(e);process.exitCode=1;});
