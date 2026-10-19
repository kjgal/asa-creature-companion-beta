const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const app=fs.readFileSync('site/app.js','utf8');
const methodLabel=app.split('\n').find(l=>l.startsWith('function methodLabel('));
const routing=app.slice(app.indexOf('function creatureProfileReply'),app.indexOf("document.querySelectorAll('[data-question]')"));
vm.runInNewContext(['catalogue','guides','creature-info','taming-data'].map(n=>fs.readFileSync('site/'+n+'.js','utf8')).join('\n')+`
let reply,chatTarget,currentTab='plan',state={rate:1};
function say(text,target,sources){reply={text,target,sources};}
function planningEstimate(){return null;}
`+routing+'\n'+methodLabel+`
const expected={Glowbug:'not-tameable',Seeker:'not-tameable',Nameless:'not-tameable',Eurypterid:'not-tameable',Deathworm:'not-tameable'};
for(const [name,method] of Object.entries(expected)){
 const g=tamingGuides[name],info=creatureInfo[name],c=creatureCatalogue.find(c=>c.name===name);
 assert.equal(g.method,method);assert.equal(g.checked,'2026-10-19');assert.ok(g.sources.length);assert.ok(g.provenance.comparisonLimitations);assert.equal(info.checked,'2026-10-19');assert.equal(c.guideReviewed,'2026-10-19');
 assert.equal(methodLabel(name),'Not tameable');
 chatTarget=name;ask('How do I tame it?');assert.ok(reply.text.includes(g.overview));assert.ok(reply.text.includes(g.steps[0]));assert.ok(fullGuideReply(g).includes(g.specialAction));
 ask('What food do I need?');assert.equal(reply.text,g.food);ask('What should I bring?');assert.equal(reply.text,g.preparation);
 ask('Habitat?');assert.ok(reply.text.startsWith(generalHabitats[name]));assert.ok(reply.text.includes('vary by map'));if(aberrationHabitats[name])assert.ok(reply.text.includes(aberrationHabitats[name]));
 assert.ok(!/Kaitlyn|McCaul/i.test(JSON.stringify(g)));
}
assert.equal(creatureCatalogue.length,202);assert.equal(Object.keys(tamingGuides).length,144);assert.equal(Object.keys(creatureInfo).length,122);assert.equal(Object.keys(generalHabitats).length,103);assert.equal(Object.keys(aberrationHabitats).length,22);
assert.ok(aberrationHabitats.Glowtail.includes('native'));assert.ok(aberrationHabitats['Roll Rat'].includes('blue (Bioluminescent)'));
assert.equal(tamingGuides.Giganotosaurus.method,'knockout');assert.equal(tamingGuides.Giganotosaurus.checked,'2026-10-05');assert.equal(tamingGuides.Giganotosaurus.upcomingChange.targetDate,'2026-11-06');assert.ok(fullGuideReply(tamingGuides.Giganotosaurus).includes('Upcoming change'));
assert.ok(JSON.stringify(tamingGuides.Concavenator).includes('Tek Rifle'));assert.ok(JSON.stringify(tamingGuides.Quetzal).includes('Griffin'));assert.ok(JSON.stringify(tamingGuides.Quetzal).toLowerCase().includes('honey'));
`,{assert});
const html=fs.readFileSync('site/index.html','utf8');assert.ok(!/References for|youtube\\.com|youtu\\.be|<iframe/i.test(html));assert.ok(!app.includes("'References for '"));
const displayed={reply:{},'chat-context':{}};const say=app.split('\n').find(l=>l.startsWith('function say('));
vm.runInNewContext(say+";say('habitat reply','Glowtail',[['video','https://youtu.be/example'],['species','https://ark.wiki.gg/wiki/Glowtail']]);",{$:id=>displayed[id],openBubble:()=>{}});
assert.equal(displayed.reply.textContent,'habitat reply');assert.equal(displayed['chat-context'].textContent,'About Glowtail');
console.log('October 19 method, food, preparation, habitat, future-notice and metadata-only source checks passed.');
const protectedGuides=vm.runInNewContext(fs.readFileSync('site/guides.js','utf8')+';JSON.stringify([tamingGuides["Roll Rat"],tamingGuides.Quetzal,tamingGuides.Concavenator,tamingGuides.Gasbags,tamingGuides.Onyc,tamingGuides.Gacha,tamingGuides.Tusoteuthis,tamingGuides.Trilobite])');
assert.equal(require('node:crypto').createHash('sha256').update(protectedGuides).digest('hex'),'3f787483846f8fb4dfcc5744bfe93ce6e68e11aefd80993798356de973c80969');
vm.runInNewContext(['guides','creature-info'].map(n=>fs.readFileSync('site/'+n+'.js','utf8')).join('\n')+`;assert.ok(aberrationHabitats.Manta.includes('Aberrant Manta'));assert.ok(aberrationHabitats.Manta.includes('green (Fertile)'));assert.ok(tamingGuides.Titanoboa.specialAction.includes('not a hand-feed'));assert.ok(tamingGuides.Liopleurodon.overview.includes('temporary'));`,{assert});
vm.runInNewContext(['guides','creature-info'].map(n=>fs.readFileSync('site/'+n+'.js','utf8')).join('\n')+`;assert.ok(aberrationHabitats.Karkinos.includes('native'));assert.ok(aberrationHabitats.Karkinos.includes('blue (Bioluminescent)'));assert.ok(tamingGuides.Karkinos.specialAction.includes('main body'));assert.ok(tamingGuides['Rock Elemental'].overview.includes('head'));assert.ok(tamingGuides.Gacha.specialAction.includes('not a hotbar'));assert.ok(tamingGuides.Pegomastax.specialAction.includes('pickpocketing'));`,{assert});
vm.runInNewContext(['guides','creature-info'].map(n=>fs.readFileSync('site/'+n+'.js','utf8')).join('\n')+`;assert.ok(aberrationHabitats.Cnidaria.includes('Aberrant'));assert.ok(aberrationHabitats.Cnidaria.includes('red (Element)'));assert.ok(tamingGuides.Mek.specialAction.includes('Exo-Mek'));assert.ok(tamingGuides.Enforcer.specialAction.includes('consumed'));assert.ok(tamingGuides.Scout.overview.includes('Remote'));assert.ok(tamingGuides.Leedsichthys.specialAction.includes('without taming'));`,{assert});
const panelFunctions=['updateStartLabel','renderSelectedCreature','methodLabel'].map(name=>app.split('\n').find(l=>l.startsWith('function '+name+'('))).join('\n');
const questionsFunction=app.slice(app.indexOf('function updateQuickQuestions(){'),app.indexOf('function methodLabel('));
const fullGuideFunction=app.slice(app.indexOf('function fullGuideReply('),app.indexOf('function tamingBlurb('));
vm.runInNewContext(['catalogue','guides','creature-info'].map(n=>fs.readFileSync('site/'+n+'.js','utf8')).join('\n')+`
const els={};function $(id){return els[id]||(els[id]={replaceChildren(){},append(){}});}
let state={creature:'Rock Drake'},currentTab='plan',chatMode='profile',chatTarget='Rock Drake';
const buttons=[];const document={querySelector(){return {replaceChildren(){buttons.length=0;},append(b){buttons.push(b);}};},createElement(){return {dataset:{}};}};
function syncMethod(){}function setCreatureHeading(){}function creatureArt(){return '';}function renderPlannerEstimate(){}function ask(){}
`+panelFunctions+questionsFunction+fullGuideFunction+`
for(const name of ['Rock Drake','Deinonychus','Magmasaur','Fire Wyvern','Enforcer','Scout','Mek']){
 state.creature=chatTarget=name;renderSelectedCreature();updateQuickQuestions();
 assert.equal($('tame-planner').hidden,true);assert.equal($('creature-information').hidden,false);assert.equal($('start').textContent,'Track acquisition');assert.equal($('information-heading').textContent,'Acquisition');
 assert.ok($('creature-habitat').textContent.includes(tamingGuides[name].overview));assert.ok($('creature-habitat').textContent.includes(tamingGuides[name].steps[0]));
 assert.ok(buttons.some(b=>b.dataset.question==='How is it acquired?'));assert.ok(!buttons.some(b=>b.dataset.question==='Taming advice'));assert.ok(fullGuideReply(tamingGuides[name]).startsWith('How to acquire'));
}
for(const name of ['Glowbug','Seeker','Nameless','Eurypterid','Deathworm']){state.creature=chatTarget=name;renderSelectedCreature();assert.equal($('start').disabled,true);assert.equal($('start').hidden,true);assert.equal($('tame-planner').hidden,true);assert.ok($('creature-habitat').textContent.startsWith(generalHabitats[name]));assert.ok(fullGuideReply(tamingGuides[name]).startsWith('Wild encounter'));}
state.creature='Cnidaria';renderSelectedCreature();assert.equal($('start').disabled,true);assert.ok(fullGuideReply(tamingGuides.Cnidaria).startsWith('Wild encounter'));
state.creature='Basilisk';renderSelectedCreature();assert.equal($('tame-planner').hidden,false);assert.ok(fullGuideReply(tamingGuides.Basilisk).startsWith('How to tame'));
assert.ok(aberrationHabitats['Rock Drake'].includes('red (Element)'));assert.ok(aberrationHabitats.Basilisk.includes('native'));
`,{assert});
console.log('Egg and crafted acquisition panels, quick questions, guide headings and blocked encounter routes passed.');

vm.runInNewContext(['catalogue','guides','creature-info'].map(n=>fs.readFileSync('site/'+n+'.js','utf8')).join('\n')+`;assert.equal(tamingGuides.Tusoteuthis.method,'special');assert.ok(tamingGuides.Tusoteuthis.specialAction.includes('test date'));assert.ok(tamingGuides.Tusoteuthis.provenance.asa.includes('firsthand'));assert.ok(creatureInfo.Tusoteuthis.pending.includes('player'));assert.ok(aberrationHabitats['Yi Ling'].includes('not a separate Aberrant'));assert.ok(aberrationHabitats['Yi Ling'].includes('remains pending'));assert.ok(tamingGuides['Yi Ling'].overview.includes('knockout'));assert.ok(tamingGuides.Desmodus.overview.includes('passive'));`,{assert});
console.log('Tusoteuthis player report retained; special knockout/passive distinctions and native Yi Ling habitat wording passed.');

vm.runInNewContext(['catalogue','guides','creature-info'].map(n=>fs.readFileSync('site/'+n+'.js','utf8')).join('\n')+`;assert.ok(aberrationHabitats.Fasolasuchus.includes('Aberrant Fasolasuchus'));assert.ok(aberrationHabitats['Giant Bee'].includes('green (Fertile)'));assert.ok(aberrationHabitats['Giant Bee'].includes('not a distinct Aberrant'));assert.ok(!creatureCatalogue.some(c=>c.name==='Enigmasaur'));assert.ok(tamingGuides.Fasolasuchus.overview.includes('knockout'));assert.ok(tamingGuides['Giant Bee'].specialAction.includes('queen'));assert.ok(tamingGuides.Bloodstalker.specialAction.includes('effectiveness'));`,{assert});

vm.runInNewContext(['catalogue','guides','creature-info'].map(n=>fs.readFileSync('site/'+n+'.js','utf8')).join('\n')+`;for(const name of ['Coelacanth','Piranha','Sabertooth Salmon','Trilobite']){assert.ok(tamingGuides[name].overview.includes('capture'));assert.ok(tamingGuides[name].food.includes('rather than a taming-food'));assert.ok(tamingGuides[name].steps.at(-1).includes('in water'));assert.equal(creatureCatalogue.find(c=>c.name===name).acquisition,'Special tame');}assert.ok(tamingGuides.Trilobite.food.includes('conflict'));assert.ok(tamingGuides.Trilobite.specialAction.includes('pending'));assert.ok(aberrationHabitats.Coelacanth.includes('green (Fertile)'));assert.ok(aberrationHabitats.Piranha.includes('blue (Bioluminescent)'));assert.ok(aberrationHabitats.Trilobite.includes('Aberrant'));assert.ok(aberrationHabitats['Sabertooth Salmon'].includes('blue (Bioluminescent)'));`,{assert});
console.log('Live Fish Basket capture/release, pending Trilobite upkeep and variant-specific habitat checks passed.');

vm.runInNewContext(['catalogue','guides','creature-info'].map(n=>fs.readFileSync('site/'+n+'.js','utf8')).join('\n')+`;assert.ok(creatureCatalogue.find(c=>c.name==='Glowbug').aliases.includes('light bug'));assert.ok(aberrationHabitats.Nameless.includes('blue (Bioluminescent)'));assert.ok(aberrationHabitats.Seeker.includes('red (Element)'));assert.ok(creatureInfo.Glowbug.habitat.includes('Element Falls'));assert.ok(creatureInfo.Eurypterid.behavior.includes('torpor'));for(const name of ['Glowbug','Seeker','Nameless','Eurypterid','Deathworm'])assert.equal(tamingGuides[name].method,'not-tameable');`,{assert});
const crypto=require('node:crypto');
const preservedFiles={"site/app.js":"5c88fb12fc328d1cc670207ed33a2fa664a295da","site/install.js":"b6a5e03907f5958376eb6686b89012b5cafbd958","site/style.css":"ec02ebd255649e730f117c172ed5726722e63c6b","site/manifest.webmanifest":"ad7fd0ee5afb8d1719769c71a1c616f44ac0f449","site/robots.txt":"1f53798bb4fe33c86020be7f10c44f29486fd190",".github/workflows/pages.yml":"b97693d01422755933180d6758a49a673f0327b4","scripts/update-rate.mjs":"c6750916bdf8c6e12fbcaf2343de53d8b495de31"};
for(const [p,sha] of Object.entries(preservedFiles)){const b=fs.readFileSync(p);assert.equal(crypto.createHash('sha1').update(Buffer.from('blob '+b.length)).update(Buffer.from([0])).update(b).digest('hex'),sha,p+' changed unexpectedly');}
assert.ok(app.includes("fetch('official-rate.json'"));assert.ok(!app.includes('/api/official-rate'));assert.ok(/noindex/.test(html));assert.ok(fs.readFileSync('site/robots.txt','utf8').includes('Disallow: /'));
console.log('Public beta, scheduled-rate/manual fallback, manifest, approved icons references and existing interface files preserved.');
