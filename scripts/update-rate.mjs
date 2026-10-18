import {writeFile} from 'node:fs/promises';
const source='https://cdn2.arkdedicated.com/asa/dynamicconfig.ini';
try {
 const r=await fetch(source,{signal:AbortSignal.timeout(15000)});
 if(!r.ok)throw new Error('Official feed unavailable');
 const matches=[...(await r.text()).matchAll(/^TamingSpeedMultiplier\s*=\s*([0-9]+(?:\.[0-9]+)?)\s*$/gm)];
 const rate=matches.length===1?Number(matches[0][1]):NaN;
 if(!Number.isFinite(rate)||rate<.1||rate>100)throw new Error('Invalid official rate');
 await writeFile('site/official-rate.json',JSON.stringify({rate,checkedAt:new Date().toISOString(),source})+'\n');
 console.log('Official rate snapshot updated');
} catch {
 await writeFile('site/official-rate.json',JSON.stringify({error:'Official rate unavailable'})+'\n');
 console.log('Official rate unavailable; manual override remains available');
}
