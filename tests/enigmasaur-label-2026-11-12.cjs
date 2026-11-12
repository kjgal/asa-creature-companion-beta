const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const data=['catalogue','guides','creature-info'].map(n=>fs.readFileSync('site/'+n+'.js','utf8')).join('\n'),app=fs.readFileSync('site/app.js','utf8');
const routing=app.slice(app.indexOf('function creatureProfileReply'),app.indexOf("document.querySelectorAll('[data-question]')")),method=app.split('\n').find(l=>l.startsWith('function methodLabel('));
vm.runInNewContext(data+'\n'+`let reply,chatTarget='Enigmasaur',currentTab='plan',state={rate:1};function say(text){reply=text;}function planningEstimate(){return null;}`+routing+method+`
ask('Habitat?');assert.ok(reply.startsWith('Available on:'));assert.ok(!/v97|Official v|https?:|References for/.test(reply));assert.ok(reply.includes('Aberration'));assert.ok(reply.includes('regions remain pending'));
assert.ok(!creatureInfo.Enigmasaur.habitat.includes('v97'));assert.ok(creatureInfo.Enigmasaur.sources.some(s=>s[1].includes('v97')));assert.equal(creatureCatalogue.find(c=>c.name==='Enigmasaur').artworkPending,false);
`,{assert});
assert.ok(fs.readFileSync('site/index.html','utf8').includes('creature-info.js?v=enigma-label-nov12'));
console.log('Enigmasaur habitat reply hides patch label; map caveats, metadata references and sprite status preserved.');
