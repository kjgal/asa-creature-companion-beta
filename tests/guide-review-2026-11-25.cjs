const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8'),app=read('site/app.js');
const data=['catalogue','guides','creature-info','taming-data','taming-calculator'].map(n=>read('site/'+n+'.js')).join('\n');
const routing=app.slice(app.indexOf('function creatureProfileReply'),app.indexOf("document.querySelectorAll('[data-question]')"));
const method=app.split('\n').find(l=>l.startsWith('function methodLabel('));
vm.runInNewContext(data+"\nlet reply,chatTarget,currentTab='plan',state={rate:1};function say(t){reply=t;}function planningEstimate(){return null;}\n"+routing+'\n'+method+`
assert.deepEqual([creatureCatalogue.length,Object.keys(tamingGuides).length,Object.keys(creatureInfo).length,Object.keys(generalHabitats).length,Object.keys(aberrationHabitats).length],[203,203,190,199,40]);
for(const [name,kind] of [['Bison','knockout'],['Helicoprion','special']]){
 chatTarget=name;const g=tamingGuides[name];assert.equal(g.method,kind);assert.equal(g.checked,'2026-11-25');
 ask('How do I tame it?');assert.ok(reply.includes(g.overview));assert.ok(reply.includes(g.steps[0]));assert.ok(reply.includes(g.tips));assert.ok(!/https:|References for|youtube/i.test(reply));
 ask('What food do I need?');assert.equal(reply,g.food);
 ask('What should I bring?');assert.equal(reply,g.preparation);
 ask('Habitat?');assert.ok(reply.startsWith(generalHabitats[name]));assert.ok(reply.includes('vary by map'));assert.ok(!/https:|References for|youtube/i.test(reply));
 assert.ok(creatureInfo[name].habitatProvenance.sources.some(s=>s.endsWith('/Spawn_entries')));assert.ok(!aberrationHabitats[name]);
}
chatTarget='Bison';ask('What food do I need?');assert.ok(reply.includes('disagree'));assert.ok(reply.includes('pending'));
chatTarget='Helicoprion';ask('How do I tame it?');assert.ok(reply.includes('looted'));assert.ok(reply.includes('dismount-and-feed'));assert.ok(!reply.includes('Megalodon'));
assert.equal(TamingCalculator.estimate('Helicoprion',150,1,'Little Ratfish Treats'),null);
assert.equal(tamingGuides.Liopleurodon.upcomingChange.checked,'2026-11-21');assert.ok(JSON.stringify(tamingGuides.Concavenator).includes('Suggested method'));
assert.ok(!creatureCatalogue.some(c=>['Khoron','Zuffin'].includes(c.name)));
const food=Object.keys(tamingCalculationData.creatures.Rex.foods).find(k=>tamingCalculationData.creatures.Rex.foods[k].quantityReviewed!==false);assert.ok(TamingCalculator.estimate('Rex',150,1,food));
`,{assert});
const html=read('site/index.html');for(const asset of ['guides.js?v=guide-review-nov25','catalogue.js?v=guide-review-nov25','creature-info.js?v=habitat-review-nov25'])assert.ok(html.includes(asset));
assert.match(html,/noindex/);assert.ok(!html.includes('<iframe'));assert.ok(!app.includes('/api/official-rate'));assert.ok(app.includes('official-rate.json?checked='));assert.ok(!app.includes('(scheduled check)'));assert.ok(!app.includes('References for '));
console.log('November 25 method, feeding, habitat, conflict, calculator and visibility checks passed.');
