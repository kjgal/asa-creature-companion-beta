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
assert.equal(tamingGuides.Lumina.method,'special');
assert.deepEqual([creatureCatalogue.length,Object.keys(tamingGuides).length,Object.keys(creatureInfo).length,Object.keys(generalHabitats).length,Object.keys(aberrationHabitats).length],[203,203,183,173,35]);
assert.equal(TamingCalculator.estimate('Giganotosaurus',150,2,'Exceptional Kibble'),null);assert.ok(TamingCalculator.estimate('Rex',150,2,'Exceptional Kibble'));
assert.equal(tamingGuides.Giganotosaurus.method,'special');assert.equal(tamingGuides.Giganotosaurus.releaseChange.released,'2026-11-06');
assert.ok(creatureArt('Enigmasaur').includes('Artwork pending'));assert.ok(!creatureArt('Enigmasaur').includes('<img'));assert.ok(creatureArt('Rex').includes('assets/creatures/'));
const protectedGuides=JSON.stringify([tamingGuides['Roll Rat'],tamingGuides.Quetzal,tamingGuides.Concavenator,tamingGuides.Gasbags,tamingGuides.Onyc,tamingGuides.Gacha,tamingGuides.Tusoteuthis,tamingGuides.Trilobite]);assert.equal(crypto.createHash('sha256').update(protectedGuides).digest('hex'),'3f787483846f8fb4dfcc5744bfe93ce6e68e11aefd80993798356de973c80969');
`,{assert,crypto});
const startup=app.slice(0,app.indexOf('const pets='));
for(const creature of ['Giganotosaurus','Rex']){const saved={creature,method:'knockout',session:{creature,method:'knockout',estimate:{creature,food:'Exceptional Kibble',quantity:123},pendingFood:'Exceptional Kibble',pendingElixir:true,notes:'keep my notes',checks:[1],progress:42,started:123456,rate:2}};let persisted;const storage={getItem:()=>JSON.stringify(saved),setItem:(k,v)=>{persisted=JSON.parse(v)}};
const actual=vm.runInNewContext(data+'\n'+startup+';JSON.parse(JSON.stringify(state))',{document:{getElementById:()=>({})},localStorage:storage});assert.equal(actual.session.notes,saved.session.notes);assert.equal(actual.session.progress,42);assert.equal(actual.session.started,123456);assert.equal(actual.session.rate,2);assert.equal(JSON.stringify(actual.session.checks),'[1]');if(creature==='Giganotosaurus'){assert.equal(actual.session.method,'special');assert.equal(actual.session.estimate,null);assert.ok(!actual.session.pendingFood);assert.ok(persisted);}else assert.equal(JSON.stringify(actual),JSON.stringify(saved));}
assert.ok(app.includes('age>24*60*60*1000'));assert.ok(app.includes('official-rate.json?checked='));assert.ok(!app.includes('(scheduled check)'));assert.ok(!app.includes('/api/official-rate'));
const html=fs.readFileSync('site/index.html','utf8');assert.ok(!/References for|youtube\.com|youtu\.be|<iframe/i.test(html));assert.ok(html.includes('noindex'));assert.ok(html.includes('guide-review-lumina-nov12'));assert.ok(html.includes('habitat-review-lumina-nov12'));assert.ok(html.includes('app.js?v=v97-review-nov07'));
console.log('Existing guide, pending-route, calculator, saved-session and preservation checks passed.');

vm.runInNewContext(data+'\n'+`let reply,chatTarget,currentTab='plan',state={rate:1};function say(text,target,sources){reply={text,target,sources};}function planningEstimate(){return null;}`+routing+methodLabel+`
for(const n of ['Archaeopteryx','Castoroides']){
 const g=tamingGuides[n];assert.equal(g.checked,'2026-11-09');assert.equal(g.method,'knockout');assert.equal(methodLabel(n),'Knockout tame');assert.equal(creatureCatalogue.find(c=>c.name===n).guideReviewed,'2026-11-09');
 chatTarget=n;ask('How do I tame it?');assert.ok(reply.text.includes(g.overview));assert.ok(reply.text.includes(g.steps[0]));assert.ok(reply.text.includes(g.specialAction));
 ask('What food do I need?');assert.equal(reply.text,g.food);ask('What should I bring?');assert.equal(reply.text,g.preparation);assert.ok(g.provenance.comparisonLimitations);
}
for(const n of ['Archaeopteryx','Castoroides','Dimetrodon','Diplocaulus']){
 chatTarget=n;ask('Habitat?');assert.ok(reply.text.startsWith(generalHabitats[n]));assert.ok(reply.text.includes('vary by map'));assert.ok(!/https?:|References for|youtube/i.test(reply.text));assert.ok(creatureInfo[n].habitatProvenance.sources.includes('https://ark.wiki.gg/wiki/Spawn_entries'));
}
assert.ok(tamingGuides.Archaeopteryx.food.includes('Chitin'));assert.ok(tamingGuides.Castoroides.preparation.includes('dam'));
for(const n of ['Dimetrodon','Diplocaulus']){assert.ok(aberrationHabitats[n].includes('Aberrant '+n));assert.ok(aberrationHabitats[n].includes('Bioluminescent'));assert.ok(!aberrationHabitats[n].includes('native regular'));}
assert.ok(creatureInfo.Diplocaulus.behavior.includes('Skittish'));assert.equal(creatureInfo.Dimetrodon.scope,'Example habitat only; complete official ASA map coverage pending');
`,{assert});
console.log('November 9 refreshed guide routes, food/preparation, habitat replies and preserved encounter records passed.');

vm.runInNewContext(data+'\n'+`let reply,chatTarget,currentTab='plan',state={rate:1};function say(text,target,sources){reply={text,target,sources};}function planningEstimate(){return null;}`+routing+methodLabel+`
for(const n of ['Otter','Dung Beetle']){const g=tamingGuides[n];assert.equal(g.checked,'2026-11-10');assert.equal(g.method,'passive');assert.equal(methodLabel(n),'Passive tame');assert.equal(creatureCatalogue.find(c=>c.name===n).guideReviewed,'2026-11-10');chatTarget=n;ask('How do I tame it?');assert.ok(reply.text.includes(g.overview));assert.ok(reply.text.includes(g.steps[0]));assert.ok(reply.text.includes(g.specialAction));ask('What food do I need?');assert.equal(reply.text,g.food);ask('What should I bring?');assert.equal(reply.text,g.preparation);assert.ok(g.provenance.comparisonLimitations);}
for(const n of ['Otter','Dung Beetle','Equus']){chatTarget=n;ask('Habitat?');assert.ok(reply.text.startsWith(generalHabitats[n]));assert.ok(reply.text.includes('vary by map'));assert.ok(!/https?:|References for|youtube/i.test(reply.text));assert.ok(creatureInfo[n].habitatProvenance.sources.includes('https://ark.wiki.gg/wiki/Spawn_entries'));assert.ok(aberrationHabitats[n].includes('Aberrant'));}
assert.ok(tamingGuides.Otter.food.includes('after taming'));assert.ok(tamingGuides['Dung Beetle'].food.includes('provide meat'));assert.ok(tamingGuides['Dung Beetle'].food.includes('not accepted'));assert.ok(aberrationHabitats['Dung Beetle'].includes('red (Element)'));assert.ok(aberrationHabitats.Otter.includes('green (Fertile)'));assert.ok(aberrationHabitats.Equus.includes('green (Fertile)'));
assert.equal(tamingGuides.Equus.checked,'2026-10-05');assert.ok(tamingGuides.Equus.specialAction.includes('USB keyboard'));assert.ok(creatureInfo.Equus.behavior.includes('Startles'));assert.ok(creatureInfo['Dung Beetle'].behavior.includes('aggravated'));
`,{assert});
console.log('November 10 passive routes, ongoing diet, habitat replies, variants and retained suggestions passed.');

vm.runInNewContext(data+'\n'+`let reply,chatTarget,currentTab='plan',state={rate:1};function say(text,target,sources){reply={text,target,sources};}function planningEstimate(){return null;}`+routing+methodLabel+`
for(const n of ['Basilosaurus','Ichthyosaurus']){const g=tamingGuides[n];assert.equal(g.checked,'2026-11-11');assert.equal(g.method,'passive');assert.equal(methodLabel(n),'Passive tame');assert.equal(creatureCatalogue.find(c=>c.name===n).guideReviewed,'2026-11-11');chatTarget=n;ask('How do I tame it?');assert.ok(reply.text.includes(g.overview));assert.ok(reply.text.includes(g.steps[0]));assert.ok(reply.text.includes(g.specialAction));ask('What food do I need?');assert.equal(reply.text,g.food);ask('What should I bring?');assert.equal(reply.text,g.preparation);assert.ok(g.provenance.comparisonLimitations);}
for(const n of ['Basilosaurus','Ichthyosaurus','Archelon']){chatTarget=n;ask('Habitat?');assert.ok(reply.text.startsWith(generalHabitats[n]));assert.ok(reply.text.includes('vary by map'));assert.ok(!/https?:|References for|youtube/i.test(reply.text));assert.ok(creatureInfo[n].habitatProvenance.sources.includes('https://ark.wiki.gg/wiki/Spawn_entries'));}
assert.ok(tamingGuides.Basilosaurus.preparation.includes('Manta'));assert.ok(tamingGuides.Basilosaurus.specialAction.includes('predator attention'));assert.ok(tamingGuides.Ichthyosaurus.overview.includes('swim away'));assert.ok(generalHabitats.Archelon.includes('deeper sea'));assert.ok(creatureInfo.Basilosaurus.behavior.includes('nearby Manta'));assert.equal(tamingGuides.Archelon.checked,'2026-09-30');
`,{assert});
console.log('November 11 marine passive routes, food/preparation and habitat replies passed.');

vm.runInNewContext(data+'\n'+`let reply,chatTarget,currentTab='plan',state={rate:1};function say(text,target,sources){reply={text,target,sources};}function planningEstimate(){return null;}`+routing+methodLabel+`
for(const n of ['Jerboa','Lymantria']){const g=tamingGuides[n];assert.equal(g.checked,'2026-11-12');assert.equal(g.method,'knockout');assert.equal(methodLabel(n),'Knockout tame');assert.equal(creatureCatalogue.find(c=>c.name===n).guideReviewed,'2026-11-12');chatTarget=n;ask('How do I tame it?');assert.ok(reply.text.includes(g.overview));assert.ok(reply.text.includes(g.steps[0]));assert.ok(reply.text.includes(g.specialAction));ask('What food do I need?');assert.equal(reply.text,g.food);ask('What should I bring?');assert.equal(reply.text,g.preparation);assert.ok(g.provenance.comparisonLimitations);}
for(const n of ['Jerboa','Lymantria','Iguanodon']){chatTarget=n;ask('Habitat?');assert.ok(reply.text.startsWith(generalHabitats[n]));assert.ok(reply.text.includes('vary by map'));assert.ok(!/https?:|References for|youtube/i.test(reply.text));assert.ok(creatureInfo[n].habitatProvenance.sources.includes('https://ark.wiki.gg/wiki/Spawn_entries'));}
assert.ok(tamingGuides.Jerboa.food.includes('Plant Species Y'));assert.ok(tamingGuides.Lymantria.preparation.includes('limited health'));assert.ok(aberrationHabitats.Iguanodon.includes('Aberrant Iguanodon'));assert.ok(aberrationHabitats.Iguanodon.includes('green (Fertile)'));assert.ok(creatureInfo.Lymantria.behavior.includes('spore cloud'));assert.ok(creatureInfo.Iguanodon.behavior.includes('herd'));assert.equal(tamingGuides.Iguanodon.checked,'2026-10-04');
`,{assert});
console.log('November 12 knockout routes, preparation, habitat replies, variant scope and detailed encounter preservation passed.');

vm.runInNewContext(data+'\n'+`let reply,chatTarget='Lumina',currentTab='plan',state={rate:1};function say(text,target,sources){reply={text,target,sources};}function planningEstimate(){return null;}`+routing+methodLabel+`
const g=tamingGuides.Lumina;assert.equal(g.checked,'2026-11-12');assert.equal(methodLabel('Lumina'),'Special tame');assert.equal(creatureCatalogue.find(c=>c.name==='Lumina').acquisition,'Special tame');
ask('How do I tame it?');assert.ok(reply.text.includes(g.overview));assert.ok(reply.text.includes(g.steps[0]));assert.ok(reply.text.includes('Suggested method:'));assert.ok(reply.text.includes('unverified'));assert.ok(!/https?:|References for|youtube/i.test(reply.text));
ask('What food do I need?');assert.equal(reply.text,g.food);assert.ok(reply.text.includes('Superior Kibble'));assert.ok(reply.text.includes('Suggested method:'));
ask('What should I bring?');assert.equal(reply.text,g.preparation);
ask('Habitat?');assert.ok(reply.text.startsWith(generalHabitats.Lumina));assert.ok(reply.text.includes('vary by map'));assert.ok(!reply.text.includes('https:'));
assert.equal(TamingCalculator.estimate('Lumina',150,2,'Superior Kibble'),null);
assert.equal(TamingCalculator.estimate('Giganotosaurus',150,2,'Exceptional Kibble'),null);assert.ok(TamingCalculator.estimate('Rex',150,2,'Exceptional Kibble'));
const visible=[g.overview,g.food,g.preparation,...g.steps,g.specialAction,...g.tips,generalHabitats.Lumina].join(' ');
assert.ok(!/\\d|%|owner|suggested by|youtube|https?:/i.test(visible));
assert.ok(g.verification.suggestedPending.includes('post-challenge feeding prompt and repeat cycle'));assert.ok(g.verification.pending.includes('glide duration-versus-distance criterion'));
assert.ok(g.provenance.suggestedMethods.includes('Firsthand origin was not established'));
assert.equal(creatureCatalogue.filter(c=>!tamingGuides[c.name]).length,0);
`,{assert});
console.log('Lumina challenge, suggested feeding/retry labels, pending numbers/controls, replies and calculator exclusion passed.');
