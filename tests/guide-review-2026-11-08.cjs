const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const app=fs.readFileSync('site/app.js','utf8'),data=['catalogue','guides','creature-info','taming-data','taming-calculator'].map(n=>fs.readFileSync('site/'+n+'.js','utf8')).join('\n');
const routing=app.slice(app.indexOf('function creatureProfileReply'),app.indexOf("document.querySelectorAll('[data-question]')"));
const methodLabel=app.split('\n').find(x=>x.startsWith('function methodLabel(')),art=app.split('\n').find(x=>x.startsWith('function creatureArt('));
vm.runInNewContext(data+'\n'+`let reply,chatTarget,currentTab='plan',state={rate:1};function say(text,target,sources){reply={text,target,sources};}function planningEstimate(){return null;}`+routing+methodLabel+art+`
for(const n of ['Elderclaw','Umbra','Enigmasaur']){
 const g=tamingGuides[n];assert.equal(g.checked,'2026-11-08');assert.equal(creatureCatalogue.find(c=>c.name===n).guideReviewed,'2026-11-08');
 assert.equal(g.method,n==='Elderclaw'?'acquisition':'special');
 chatTarget=n;ask('How do I tame it?');assert.ok(reply.text.includes(g.overview));assert.ok(reply.text.includes(g.steps[0]));assert.ok(reply.text.includes(g.specialAction));
 assert.ok(!/https?:|References for|youtube|youtu\\.be/i.test(reply.text));
 ask('What food do I need?');assert.equal(reply.text,g.food);ask('What should I bring?');assert.equal(reply.text,g.preparation);
 assert.ok(g.sources.some(s=>s[1].includes('ark.wiki.gg/wiki/'+n)));assert.ok(g.provenance.comparisonLimitations);assert.ok(!g.steps.some(s=>/\\d/.test(s)));
}
for(const n of ['Elderclaw','Umbra','Achatina','Bulbdog','Enigmasaur']){
 chatTarget=n;ask('Habitat?');assert.ok(reply.text.startsWith(generalHabitats[n]||creatureInfo[n].habitat));assert.ok(reply.text.includes('vary by map'));assert.ok(!/https?:|References for/.test(reply.text));
}
assert.ok(aberrationHabitats.Elderclaw.includes('not an Aberrant'));assert.ok(aberrationHabitats.Bulbdog.includes('not an Aberrant'));assert.ok(aberrationHabitats.Achatina.includes('Aberrant Achatina'));assert.ok(aberrationHabitats.Achatina.includes('Bioluminescent'));
assert.equal(creatureCatalogue.find(c=>c.name==='Elderclaw').acquisition,'Offspring acquisition');assert.ok(tamingGuides.Elderclaw.overview.includes('cannot'));assert.ok(tamingGuides.Umbra.food.includes('Cooked Lamb Chop'));assert.ok(tamingGuides.Enigmasaur.steps[2].includes('remain still'));
assert.ok(!tamingGuides.Lumina);chatTarget='Lumina';ask('How do I tame it?');assert.ok(reply.text.includes('has not been added'));
assert.deepEqual([creatureCatalogue.length,Object.keys(tamingGuides).length,Object.keys(creatureInfo).length,Object.keys(generalHabitats).length,Object.keys(aberrationHabitats).length],[203,202,177,159,29]);
assert.equal(TamingCalculator.estimate('Giganotosaurus',150,2,'Exceptional Kibble'),null);assert.ok(TamingCalculator.estimate('Rex',150,2,'Exceptional Kibble'));
assert.equal(tamingGuides.Giganotosaurus.method,'special');assert.equal(tamingGuides.Giganotosaurus.releaseChange.released,'2026-11-06');
assert.ok(creatureArt('Enigmasaur').includes('Artwork pending'));assert.ok(!creatureArt('Enigmasaur').includes('<img'));assert.ok(creatureArt('Rex').includes('assets/creatures/'));
const protectedGuides=JSON.stringify([tamingGuides['Roll Rat'],tamingGuides.Quetzal,tamingGuides.Concavenator,tamingGuides.Gasbags,tamingGuides.Onyc,tamingGuides.Gacha,tamingGuides.Tusoteuthis,tamingGuides.Trilobite]);assert.equal(crypto.createHash('sha256').update(protectedGuides).digest('hex'),'3f787483846f8fb4dfcc5744bfe93ce6e68e11aefd80993798356de973c80969');
`,{assert,crypto});
const startup=app.slice(0,app.indexOf('const pets='));
for(const creature of ['Giganotosaurus','Rex']){const saved={creature,method:'knockout',session:{creature,method:'knockout',estimate:{creature,food:'Exceptional Kibble',quantity:123},pendingFood:'Exceptional Kibble',pendingElixir:true,notes:'keep my notes',checks:[1],progress:42,started:123456,rate:2}};let persisted;const storage={getItem:()=>JSON.stringify(saved),setItem:(k,v)=>{persisted=JSON.parse(v)}};
const actual=vm.runInNewContext(data+'\n'+startup+';JSON.parse(JSON.stringify(state))',{document:{getElementById:()=>({})},localStorage:storage});assert.equal(actual.session.notes,saved.session.notes);assert.equal(actual.session.progress,42);assert.equal(actual.session.started,123456);assert.equal(actual.session.rate,2);assert.equal(JSON.stringify(actual.session.checks),'[1]');if(creature==='Giganotosaurus'){assert.equal(actual.session.method,'special');assert.equal(actual.session.estimate,null);assert.ok(!actual.session.pendingFood);assert.ok(persisted);}else assert.equal(JSON.stringify(actual),JSON.stringify(saved));}
assert.ok(app.includes('age>24*60*60*1000'));assert.ok(app.includes('official-rate.json?checked='));assert.ok(!app.includes('(scheduled check)'));assert.ok(!app.includes('/api/official-rate'));
const html=fs.readFileSync('site/index.html','utf8');assert.ok(!/References for|youtube\.com|youtu\.be|<iframe/i.test(html));assert.ok(html.includes('noindex'));assert.ok(html.includes('guide-review-nov08'));assert.ok(html.includes('habitat-review-nov08'));assert.ok(html.includes('app.js?v=v97-review-nov07'));
console.log('November 8 guide, habitat, pending-route, calculator, saved-session and preservation checks passed.');
