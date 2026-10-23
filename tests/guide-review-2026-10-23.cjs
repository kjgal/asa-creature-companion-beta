const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const app=fs.readFileSync('site/app.js','utf8');
const files=['catalogue','guides','creature-info','taming-data'].map(n=>fs.readFileSync('site/'+n+'.js','utf8')).join('\n');
const methodLabel=app.split('\n').find(l=>l.startsWith('function methodLabel('));
const routing=app.slice(app.indexOf('function creatureProfileReply'),app.indexOf("document.querySelectorAll('[data-question]')"));
const checks=[
"let reply,chatTarget,currentTab='plan',state={rate:1};",
"function say(text,target,sources){reply={text,target,sources};}",
"function planningEstimate(){return null;}",
routing,methodLabel,
"const targets=['Desert Titan','Forest Titan','Ice Titan','Titanosaur','Reaper King','Reaper Queen'];",
"for(const name of targets){const g=tamingGuides[name],info=creatureInfo[name],c=creatureCatalogue.find(c=>c.name===name);assert.equal(g.checked,'2026-10-23');assert.equal(info.checked,'2026-10-23');assert.equal(c.guideReviewed,'2026-10-23');assert.ok(g.sources.length);assert.ok(g.provenance.comparisonLimitations);chatTarget=name;ask('How do I tame it?');assert.ok(reply.text.includes(g.overview));assert.ok(reply.text.includes(g.steps[0]));ask('Habitat?');assert.ok(reply.text.startsWith(generalHabitats[name]));assert.ok(reply.text.includes('vary by map'));assert.ok(!/suggested by|suggested methods from/i.test(JSON.stringify(g)));}",
"for(const name of ['Desert Titan','Forest Titan','Ice Titan']){assert.equal(tamingGuides[name].method,'special');assert.equal(methodLabel(name),'Special tame');assert.ok(tamingGuides[name].overview.includes('temporary'));assert.ok(tamingGuides[name].food.startsWith('No taming food'));}",
"assert.equal(tamingGuides.Titanosaur.method,'knockout');assert.equal(methodLabel('Titanosaur'),'Knockout tame');assert.ok(tamingGuides.Titanosaur.overview.includes('head'));assert.ok(tamingGuides.Titanosaur.overview.includes('temporary'));",
"assert.equal(tamingGuides['Reaper King'].method,'acquisition');assert.equal(methodLabel('Reaper King'),'Acquisition');assert.equal(creatureCatalogue.find(c=>c.name==='Reaper King').acquisition,'Offspring acquisition');assert.ok(creatureInfo['Reaper King'].acquisition.includes('claim and raise'));",
"assert.equal(tamingGuides['Reaper Queen'].method,'not-tameable');assert.equal(methodLabel('Reaper Queen'),'Not tameable');assert.equal(creatureCatalogue.find(c=>c.name==='Reaper Queen').acquisition,'Not tameable');",
"assert.equal(creatureCatalogue.length,202);assert.equal(Object.keys(tamingGuides).length,166);assert.equal(Object.keys(creatureInfo).length,143);assert.equal(Object.keys(generalHabitats).length,122);assert.equal(Object.keys(aberrationHabitats).length,25);",
"assert.ok(aberrationHabitats['Reaper Queen'].includes('red (Element)'));assert.ok(aberrationHabitats['Reaper King'].includes('Surface Kings'));",
"assert.equal(tamingGuides.Giganotosaurus.method,'knockout');assert.equal(tamingGuides.Giganotosaurus.upcomingChange.targetDate,'2026-11-06');assert.ok(JSON.stringify(tamingGuides.Concavenator).includes('Tek Rifle'));"
].join('\n');
vm.runInNewContext(files+'\n'+checks,{assert});

const html=fs.readFileSync('site/index.html','utf8');
assert.ok(!/References for|youtube\.com|youtu\.be|<iframe/i.test(html));assert.ok(!app.includes("'References for '"));
assert.ok(html.includes('guides.js?v=guide-review-oct23'));assert.ok(html.includes('creature-info.js?v=habitat-review-oct23'));assert.ok(html.includes('app.js?v=offspring-acquisition-oct23'));
const displayed={reply:{},'chat-context':{}};const say=app.split('\n').find(l=>l.startsWith('function say('));
vm.runInNewContext(say+";say('habitat reply','Reaper Queen',[['video','https://youtu.be/example'],['species','https://ark.wiki.gg/wiki/Reaper']]);",{$:id=>displayed[id],openBubble:()=>{}});
assert.equal(displayed.reply.textContent,'habitat reply');assert.equal(displayed['chat-context'].textContent,'About Reaper Queen');

const panelFunctions=['updateStartLabel','renderSelectedCreature','methodLabel'].map(name=>app.split('\n').find(l=>l.startsWith('function '+name+'('))).join('\n');
const questionsFunction=app.slice(app.indexOf('function updateQuickQuestions(){'),app.indexOf('function methodLabel('));
const fullGuideFunction=app.slice(app.indexOf('function fullGuideReply('),app.indexOf('function tamingBlurb('));
const panelSetup=[
"const els={};function $(id){return els[id]||(els[id]={replaceChildren(){},append(){}});}",
"let state={creature:'Desert Titan'},currentTab='plan',chatMode='profile',chatTarget='Desert Titan';",
"const buttons=[];const document={querySelector(){return {replaceChildren(){buttons.length=0;},append(b){buttons.push(b);}};},createElement(){return {dataset:{}};}};",
"function syncMethod(){}function setCreatureHeading(){}function creatureArt(){return '';}function renderPlannerEstimate(){}function ask(){}",
"for(const name of ['Desert Titan','Forest Titan','Ice Titan','Titanosaur']){state.creature=chatTarget=name;renderSelectedCreature();assert.equal($('tame-planner').hidden,false);assert.ok(fullGuideReply(tamingGuides[name]).startsWith('How to tame'));}",
"state.creature=chatTarget='Reaper King';renderSelectedCreature();updateQuickQuestions();assert.equal($('tame-planner').hidden,true);assert.equal($('creature-information').hidden,false);assert.equal($('start').textContent,'Track acquisition');assert.ok(buttons.some(b=>b.dataset.question==='How is it acquired?'));assert.ok(fullGuideReply(tamingGuides['Reaper King']).startsWith('How to acquire'));",
"state.creature=chatTarget='Reaper Queen';renderSelectedCreature();assert.equal($('start').disabled,true);assert.equal($('start').hidden,true);assert.equal($('tame-planner').hidden,true);assert.ok(fullGuideReply(tamingGuides['Reaper Queen']).startsWith('Wild encounter'));"
].join('\n');
vm.runInNewContext(files+'\n'+panelFunctions+'\n'+questionsFunction+'\n'+fullGuideFunction+'\n'+panelSetup,{assert});

const protectedGuides=vm.runInNewContext(fs.readFileSync('site/guides.js','utf8')+';JSON.stringify([tamingGuides["Roll Rat"],tamingGuides.Quetzal,tamingGuides.Concavenator,tamingGuides.Gasbags,tamingGuides.Onyc,tamingGuides.Gacha,tamingGuides.Tusoteuthis,tamingGuides.Trilobite])');
assert.equal(crypto.createHash('sha256').update(protectedGuides).digest('hex'),'3f787483846f8fb4dfcc5744bfe93ce6e68e11aefd80993798356de973c80969');
const protectedFiles={"site/install.js":"b6a5e03907f5958376eb6686b89012b5cafbd958","site/style.css":"ec02ebd255649e730f117c172ed5726722e63c6b","site/manifest.webmanifest":"ad7fd0ee5afb8d1719769c71a1c616f44ac0f449","site/robots.txt":"1f53798bb4fe33c86020be7f10c44f29486fd190",".github/workflows/pages.yml":"b97693d01422755933180d6758a49a673f0327b4","scripts/update-rate.mjs":"c6750916bdf8c6e12fbcaf2343de53d8b495de31"};
for(const [p,sha] of Object.entries(protectedFiles)){const b=fs.readFileSync(p);assert.equal(crypto.createHash('sha1').update(Buffer.from('blob '+b.length)).update(Buffer.from([0])).update(b).digest('hex'),sha,p+' changed unexpectedly');}
assert.ok(app.includes("fetch('official-rate.json'"));assert.ok(!app.includes('/api/official-rate'));assert.ok(/noindex/.test(html));assert.ok(fs.readFileSync('site/robots.txt','utf8').includes('Disallow: /'));
console.log('October 23 Titan, Reaper, habitat, offspring-acquisition, hidden-source and preservation checks passed.');
