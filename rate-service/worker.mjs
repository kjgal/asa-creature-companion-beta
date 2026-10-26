export const SOURCE = 'https://cdn2.arkdedicated.com/asa/dynamicconfig.ini';
const ORIGIN = 'https://kjgal.github.io';
const TTL = 60_000;

export function parseRate(text) {
  const matches = [...text.matchAll(/^TamingSpeedMultiplier\s*=\s*([0-9]+(?:\.[0-9]+)?)\s*$/gm)];
  const rate = matches.length === 1 ? Number(matches[0][1]) : NaN;
  if (!Number.isFinite(rate) || rate < 0.1 || rate > 100) throw new Error('Invalid rate');
  return rate;
}

export function createService(fetchSource = fetch, now = Date.now) {
  let snapshot = null, inFlight = null;
  async function refresh() {
    if (snapshot && now() - Date.parse(snapshot.checkedAt) < TTL) return snapshot;
    if (!inFlight) {
      inFlight = (async () => {
        const response = await fetchSource(SOURCE, {signal: AbortSignal.timeout(8000), cache: 'no-store'});
        if (!response.ok) throw new Error('Upstream unavailable');
        const rate = parseRate(await response.text());
        snapshot = {rate, checkedAt: new Date(now()).toISOString(), source: SOURCE};
        return snapshot;
      })().finally(() => { inFlight = null; });
    }
    return inFlight;
  }
  return {
    async fetch(request) {
      const headers = {'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store',
        'Access-Control-Allow-Origin': ORIGIN, 'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'X-Content-Type-Options': 'nosniff'};
      const respond = (body, status = 200) => new Response(JSON.stringify(body), {status, headers});
      if (new URL(request.url).pathname !== '/official-rate.json') return respond({error: 'Not found'}, 404);
      if (request.headers.get('Origin') && request.headers.get('Origin') !== ORIGIN) return respond({error: 'Origin not allowed'}, 403);
      if (request.method === 'OPTIONS') return new Response(null, {status: 204, headers});
      if (request.method !== 'GET') return respond({error: 'Method not allowed'}, 405);
      try { return respond(await refresh()); }
      catch { return respond({error: 'Official rate unavailable'}, 503); }
    }
  };
}

export default createService();
