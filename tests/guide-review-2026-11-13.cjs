const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const data=['catalogue','guides','creature-info','taming-data','taming-calculator'].map(n=>fs.readFileSync('site/'+n+'.js','utf8')).join('\n'),app=fs.readFileSync('site/app.js','utf8');
const routing=app.slice(app.indexOf('function creatureProfileReply'),app.indexOf("document.querySelectorAll('[data-question]')"));
const method=app.split('\n').find(l=>l.startsWith('function methodLabel(')),art=app.split('\n').find(l=>l.startsWith('function creatureArt('));
vm.runInNewContext(data+'\n'+`let reply,chatTarget,currentTab='plan',state={rate:1};function say(text){reply=text;}function planningEstimate(){return null;}`+routing+method+art+`
for(const n of ['Moschops','Pachy']){
 const g=tamingGuides[n];chatTarget=n;assert.equal(g.checked,'2026-11-13');assert.equal(creatureCatalogue.find(c=>c.name===n).guideReviewed,'2026-11-13');
 ask('How do I tame it?');assert.ok(reply.includes(g.overview));assert.ok(reply.includes(g.steps[0]));assert.ok(reply.includes(g.specialAction));assert.ok(!/https?:|References for|youtube/i.test(reply));
 ask('What food do I need?');assert.equal(reply,g.food);ask('What should I bring?');assert.equal(reply,g.preparation);
 ask('Habitat?');assert.ok(reply.startsWith(generalHabitats[n]));assert.ok(reply.includes('vary by map'));assert.ok(!/https?:|References for/.test(reply));assert.ok(g.provenance.comparisonLimitations.includes('403'));assert.ok(creatureInfo[n].habitatProvenance.sources.includes('https://ark.wiki.gg/wiki/Spawn_entries'));
}
assert.equal(methodLabel('Moschops'),'Passive tame');assert.equal(methodLabel('Pachy'),'Knockout tame');assert.ok(tamingGuides.Moschops.preparation.includes('official PvE'));assert.ok(tamingGuides.Pachy.specialAction.includes('headplate'));assert.ok(tamingGuides.Pachy.food.includes('Simple Kibble'));
assert.ok(aberrationHabitats.Moschops.includes('Aberrant Moschops'));assert.ok(aberrationHabitats.Moschops.includes('green (Fertile)'));assert.ok(!aberrationHabitats.Pachy);assert.ok(creatureInfo.Pachy.behavior.includes('head attacks'));
chatTarget='Enigmasaur';ask('Habitat?');assert.ok(reply.startsWith('Available on:'));assert.ok(!reply.includes('v97'));assert.ok(creatureArt('Enigmasaur').includes('<img'));
assert.ok(tamingGuides.Lumina.specialAction.includes('Suggested'));assert.equal(tamingGuides.Giganotosaurus.method,'special');assert.equal(TamingCalculator.estimate('Giganotosaurus',150,2,'Exceptional Kibble'),null);assert.ok(TamingCalculator.estimate('Rex',150,2,'Exceptional Kibble'));
assert.deepEqual([creatureCatalogue.length,Object.keys(tamingGuides).length,Object.keys(creatureInfo).length,Object.keys(generalHabitats).length,Object.keys(aberrationHabitats).length],[203,203,184,175,36]);
`,{assert});
assert.ok(app.includes('official-rate.json?checked='));assert.ok(app.includes('age>24*60*60*1000'));assert.ok(!app.includes('/api/official-rate'));assert.ok(!app.includes('(scheduled check)'));
const html=fs.readFileSync('site/index.html','utf8');assert.ok(html.includes('noindex'));assert.ok(html.includes('habitat-review-nov13'));assert.ok(!/References for|youtu\.be|youtube\.com|<iframe/i.test(html));
console.log('November 13: guide, food/preparation/action and habitat replies; variant scope; Enigmasaur art/label; calculator/rate and source-visibility checks passed.');
