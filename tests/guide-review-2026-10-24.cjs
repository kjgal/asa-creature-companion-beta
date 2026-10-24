const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const app=fs.readFileSync('site/app.js','utf8'),data=['catalogue','guides','creature-info','taming-data'].map(n=>fs.readFileSync('site/'+n+'.js','utf8')).join('\n');
const routing=app.slice(app.indexOf('function creatureProfileReply'),app.indexOf("document.querySelectorAll('[data-question]')"));
vm.runInNewContext(data+'\n'+`let reply,chatTarget,currentTab='plan',state={rate:1};function say(text,target,sources){reply={text,target,sources};}function planningEstimate(){return null;}`+routing+`
for(const n of ['Unicorn','Phoenix','Troodon']){const g=tamingGuides[n];assert.equal(g.checked,'2026-10-24');assert.equal(creatureCatalogue.find(c=>c.name===n).guideReviewed,'2026-10-24');chatTarget=n;ask('How do I tame it?');assert.ok(reply.text.includes(g.overview));ask('Food?');assert.ok(reply.text.includes(g.food));ask('Preparation?');assert.ok(reply.text.includes(g.preparation));ask('Habitat?');assert.ok(reply.text.startsWith(generalHabitats[n]));assert.ok(reply.text.includes('vary by map'));assert.ok(g.provenance.comparisonLimitations);}
assert.equal(tamingGuides.Unicorn.method,'passive');assert.equal(tamingGuides.Phoenix.method,'special');assert.equal(tamingGuides.Troodon.method,'special');
assert.equal(tamingGuides.Giganotosaurus.upcomingChange.targetDate,'2026-11-05');assert.equal(tamingGuides.Giganotosaurus.method,'knockout');
assert.deepEqual([creatureCatalogue.length,Object.keys(tamingGuides).length,Object.keys(creatureInfo).length,Object.keys(generalHabitats).length,Object.keys(aberrationHabitats).length],[202,169,146,125,25]);
`,{assert});
assert.ok(app.includes('age>24*60*60*1000'));assert.ok(app.includes('official-rate.json?checked='));assert.ok(!app.includes('(scheduled check)'));assert.ok(!app.includes('/api/official-rate'));
assert.ok(!/References for|youtube\.com|youtu\.be|<iframe/i.test(fs.readFileSync('site/index.html','utf8')));
console.log('October 24 guide, food, preparation, habitat, classification and rate-preservation checks passed.');
