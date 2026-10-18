const $=id=>document.getElementById(id);
const read=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}};
let state=read('asa-companion-v1',{companion:'drakeling',animation:true,motion:true,creature:'Rex',level:150,rate:1,method:'knockout',session:null});
// Invalidate saved estimates when their food values have been withdrawn; preserve session timing and notes.
if(state.session?.estimate){const old=state.session.estimate;if(tamingCalculationData.creatures[old.creature]?.foods[old.food]?.quantityReviewed===false){state.session.pendingFood=old.food;state.session.pendingElixir=old.elixir;state.session.estimate=null;try{localStorage.setItem('asa-companion-v1',JSON.stringify(state))}catch{}}}
const pets=[['drakeling','Drakeling'],['armadoggo','Armadoggo'],['otter','Otter'],['jerboa','Jerboa'],['veilwyn','Veilwyn'],['none','No companion']];
const creatures=creatureCatalogue.map(c=>c.name);
const petSounds={armadoggo:'Wuff! Wuff!',drakeling:'Chrrrp!',jerboa:'Squeak!',otter:'Chirp! Chirp!',veilwyn:'Prrr-chirp!'};
const save=()=>{try{localStorage.setItem('asa-companion-v1',JSON.stringify(state))}catch{$('reply').textContent='Your browser could not save this session. Keep this page open.'}};
let currentTab='plan';
let chatTarget=state.creature;
let chatMode='profile';
let tamingPreview=null;
const tamingView=()=>tamingPreview||state.session;
function tab(name,preview=false){if(name==='active'&&!preview)tamingPreview=null;currentTab=name;chatMode='profile';if(name==='active')renderSession();document.querySelectorAll('.page').forEach(e=>e.hidden=e.id!==name);document.querySelectorAll('nav button').forEach(e=>e.classList.toggle('selected',e.dataset.tab===name));moveCompanion();updateChatContext();window.scrollTo({top:0,left:0,behavior:'instant'});}
document.querySelectorAll('[data-tab]').forEach(e=>e.onclick=()=>tab(e.dataset.tab));
function imagePet(id){return id==='none'?'':`<span class="companion-art sprite" data-companion="${id}" role="img" aria-label="${pets.find(p=>p[0]===id)[1]} animated pixel companion" style="background-image:url('assets/${id}-idle.png?v=10')"></span>`}
function renderPets(){const p=pets.find(p=>p[0]===state.companion)||pets[0];$('companion-selected-label').textContent='Selected: '+p[1];$('companion-toggle').dataset.character=p[0];$('assistant-art').innerHTML=imagePet(p[0]);$('assistant-art').hidden=p[0]==='none';document.querySelector('.pet-prompt').innerHTML=p[0]==='none'?'Open guide helper':'Tap me<br>for help';$('assistant-name').textContent=p[0]==='none'?'Taming guide helper':'Taming Companion';$('companion-chat').classList.toggle('no-companion',p[0]==='none');$('companion-grid').innerHTML=pets.map(([id,name])=>`<button class="companion-card ${id===p[0]?'selected':''}" data-pet="${id}" aria-pressed="${id===p[0]}">${imagePet(id)||'<div style="height:100px;font-size:44px">○</div>'}<strong>${name}${id===p[0]?' ✓':''}</strong></button>`).join('');document.querySelectorAll('[data-pet]').forEach(e=>e.onclick=()=>{state.companion=e.dataset.pet;save();renderPets();updateChatContext();openBubble(false)});document.body.classList.toggle('idle-motion',state.animation);document.body.classList.toggle('background-motion',state.motion);$('animation').checked=state.animation;$('motion').checked=state.motion;syncAssistantPose()}
for(const id of ['animation','motion'])$(id).onchange=()=>{state[id]=$(id).checked;save();renderPets()};
function creatureArt(name){const c=creatureCatalogue.find(c=>c.name===name);if(!c)return '';return `<img class="creature-art" src="assets/creatures/${c.slug}.png?v=4" alt="" loading="lazy" width="160" height="160">`;}
function sourceLinks(container,sources){container.replaceChildren();for(const [label,url] of sources||[]){const a=document.createElement('a');a.textContent=label;a.href=url;a.target='_blank';a.rel='noopener noreferrer';container.append(a,document.createElement('br'));}}
function syncMethod(){state.method=tamingGuides[state.creature]?.method||(tamingCalculationData.creatures[state.creature]?'knockout':'unknown');$('method').value=state.method;}
function updateStartLabel(acquired=['Crafted / rewarded','Egg raising'].includes(creatureCatalogue.find(c=>c.name===state.creature)?.acquisition)){$('start').textContent=state.session?'View active tame':acquired?'Track acquisition':'I want to tame this';$('active-session-note').hidden=!state.session;$('active-session-note').textContent=state.session?'You’re tracking '+state.session.creature+'. You can still browse any creature’s taming advice here.':'';}
function sessionCreatureArt(session,preview=false){
 const cell=sleepingCreatureSprites[session.creature];
 const asleep=!preview&&session.method==='knockout'&&Number.isFinite(session.started)&&session.knockoutConfirmed!==false;
 if(!asleep||!cell)return creatureArt(session.creature);
 return '<span class="creature-art sleeping-creature-art" style="--sprite-aspect:'+cell[3]+'/'+cell[4]+';background-image:url(assets/sleeping-creatures-'+cell[0]+'.png);background-size:'+1254/cell[3]*100+'% '+1254/cell[4]*100+'%;background-position:'+cell[1]/(1254-cell[3])*100+'% '+cell[2]/(1254-cell[4])*100+'%"></span>';
}
function setCreatureHeading(id,name){const heading=$(id);const label={'Carcharodontosaurus':'Carcha','Acrocanthosaurus':'Acro'}[name]||name;heading.textContent=label;heading.setAttribute('aria-label',name);heading.title=label===name?'':name;}
function renderSelectedCreature(){const c=creatureCatalogue.find(c=>c.name===state.creature);const info=creatureInfo[state.creature];const guide=tamingGuides[state.creature];const blocked=c?.acquisition==='Not tameable';const acquired=['Crafted / rewarded','Egg raising'].includes(c?.acquisition);syncMethod();setCreatureHeading('creature-name',state.creature);$('picker-name').textContent=state.creature;$('picker-art').innerHTML=creatureArt(state.creature);$('selected-creature-art').innerHTML=creatureArt(state.creature);$('creature-category').textContent=c?(blocked?'Untameable':acquired?'Acquired creature':methodLabel(c.name)):'';$('tame-planner').hidden=blocked||acquired;$('start').disabled=blocked;$('start').hidden=blocked;updateStartLabel(acquired);$('creature-information').hidden=!(blocked||acquired);$('information-heading').textContent=acquired?'Acquisition':'Where it is found';$('creature-habitat').textContent=acquired?(info?.acquisition||'Its acquisition requirements have not been added yet.'):(generalHabitats[state.creature]?(generalHabitats[state.creature]+(aberrationHabitats[state.creature]?'\n\n'+aberrationHabitats[state.creature]:'')):info?.habitat||'Habitat information has not been checked yet.');$('creature-behavior').textContent=info?.behavior?info.behavior+'\n\nThese are example areas, not a complete map or coordinate list.':'';$('information-sources').replaceChildren();renderPlannerEstimate();}

function renderCreatures(){const q=$('search').value.toLowerCase().trim();const filter=$('catalogue-filter').value;const visible=creatureCatalogue.filter(c=>(c.name.toLowerCase().includes(q)||(c.aliases||[]).some(a=>a.includes(q)))&&(filter==='all'||filter==='guides'&&!!tamingGuides[c.name]||filter==='dlc'&&c.dlc||filter==='encounters'&&c.category==='Wild encounters'));$('catalogue-count').textContent=creatureCatalogue.length+' creature entries';$('search-count').textContent=visible.length+' shown · '+Object.keys(tamingGuides).length+' guides available';$('creatures').innerHTML=visible.map(c=>`<button data-creature="${c.name}" class="creature-card ${c.name===state.creature?'selected':''}" aria-pressed="${c.name===state.creature}">${creatureArt(c.name)}<span class="creature-label">${c.name}</span><span class="creature-guide-status">${methodLabel(c.name)+(tamingGuides[c.name]?' · Guide available':'')}</span></button>`).join('')||'<p class="muted">No matches. Try another name or choose All creatures.</p>';document.querySelectorAll('[data-creature]').forEach(e=>e.onclick=()=>{state.creature=e.dataset.creature;chatMode='profile';const guide=tamingGuides[state.creature];if(guide){state.method=guide.method;$('method').value=guide.method;}else{state.method='unknown';$('method').value='unknown';}save();renderCreatures();renderSelectedCreature();updateChatContext();$('creature-picker').open=false;$('creature-picker-toggle').focus({preventScroll:true})});renderSelectedCreature();}
document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{$('catalogue-filter').value=b.dataset.filter;$('filter-toggle').textContent=b.textContent;$('filter-menu').open=false;renderCreatures();$('filter-toggle').focus({preventScroll:true})});document.addEventListener('click',e=>{if($('filter-menu').open&&!$('filter-menu').contains(e.target))$('filter-menu').open=false});
$('search').oninput=renderCreatures;$('creature-name').textContent=state.creature;$('level').value=state.level;if(!tamingGuides[state.creature]&&!state.session){state.method='unknown'}$('method').value=state.method;
function planningInputs(){return {level:Number($('level').value),rate:$('custom-rate').value!==''?Number($('custom-rate').value):state.rate};}
function planningEstimate(creature=state.creature){const input=planningInputs();const foods=tamingCalculationData.creatures[creature]?.foods;const food=foods&&Object.hasOwn(foods,state.tamingFood)?state.tamingFood:Object.keys(foods||{})[0];return TamingCalculator.estimate(creature,input.level,input.rate,food,state.sanguineElixir===true);}
function renderPlannerEstimate(){
 const session=tamingView();
 $('taming-estimate').hidden=!session||session.method!=='knockout';
 if(!session)return;
 const species=tamingCalculationData.creatures[session.creature];
 $('estimate-heading').textContent=session.creature+' taming estimates';
 $('estimate-pending').hidden=!!species;$('estimate-controls').hidden=!species;
 if(!species){$('estimate-pending').textContent='Food quantities and feeding times for '+session.creature+' are pending verification.';return;}
 if(!session.estimate&&!session.pendingFood&&species.foods[state.tamingFood]?.quantityReviewed===false){session.pendingFood=state.tamingFood;session.pendingElixir=state.sanguineElixir===true;}
 const select=$('taming-food'),names=Object.keys(species.foods).filter(food=>species.foods[food].quantityReviewed!==false);
 const chosen=session.pendingFood?null:(session.estimate?.food||names[0]);select.value=chosen||'';
 const icons={'Exceptional Kibble':'◆','Raw Mutton':'🍖','Raw Prime Meat':'🥩','Raw Meat':'🥩'};
 const kibbleTiers={'Basic Kibble':'basic','Simple Kibble':'simple','Regular Kibble':'regular','Superior Kibble':'superior','Exceptional Kibble':'exceptional','Extraordinary Kibble':'extraordinary'};
 const foodSprites={'Cooked Lamb Chop':[0,0],'Cooked Prime Meat':[1,0],'Prime Meat Jerky':[2,0],'Raw Prime Fish Meat':[0,1,0,440],'Cooked Prime Fish Meat':[1,1,438,438],'Cooked Meat':[2,1,877,377],'Cooked Meat Jerky':[0,2],'Raw Fish Meat':[1,2],'Cooked Fish Meat':[2,2]};
 const herbivoreSprites={'Bug Repellant':[0,0],'Archelon Algae (ASA)':[1,0],'Vegetables':[2,0],'Mejoberry':[0,1],'Berries':[1,1],'Sweet Vegetable Cake':[2,1]};
 const label=name=>{const tier=kibbleTiers[name],tierClass=tier?' kibble-'+tier:'',cell=foodSprites[name];const botanical=name==='Rare Flower'?'flower':name==='Rare Mushroom'?'mushroom':null;const herb=herbivoreSprites[name];const art=herb?'<span class="food-sprite herbivore-icon" style="background-position:'+herb[0]*50+'% '+herb[1]*50+'%"></span>':botanical?'<span class="food-sprite botanical-icon botanical-'+botanical+'"></span>':tier?'<img src="assets/kibble-pellets.png" alt="" width="28" height="28">':cell?'<span class="food-sprite" style="background-position:'+(cell.length>2?cell[2]/(1254-cell[3])*100:cell[0]*50)+'% '+cell[1]*50+'%;background-size:'+(cell.length>2?1254/cell[3]*100:300)+'% 300%"></span>':(icons[name]||'◆');return '<span class="food-icon'+tierClass+'" aria-hidden="true">'+art+'</span><span class="food-name'+tierClass+'">'+name+'</span>';};
 $('food-toggle').innerHTML=chosen?label(chosen):'Choose taming food';
 $('food-options').innerHTML=names.map(name=>'<button type="button" data-food="'+name+'" aria-pressed="'+(name===chosen)+'" class="'+(name===chosen?'selected':'')+'">'+label(name)+'</button>').join('');
 document.querySelectorAll('[data-food]').forEach(button=>button.onclick=()=>{select.value=button.dataset.food;$('food-menu').open=false;updateSessionEstimate();$('food-toggle').focus({preventScroll:true});});
 $('sanguine-elixir').checked=session.pendingElixir??(session.estimate?.elixir===true);
 const estimate=session.estimate;
 $('estimate-error').hidden=!!estimate;
 if(!estimate)$('estimate-error').textContent='Choose a taming food to see its requirements.';

}
function updateSessionEstimate(){
 const session=tamingView();if(!session)return;
 const estimate=TamingCalculator.estimate(session.creature,session.level,session.rate,$('taming-food').value,$('sanguine-elixir').checked);
 session.estimate=estimate;
 if(!estimate){session.pendingFood=$('taming-food').value;session.pendingElixir=$('sanguine-elixir').checked;save();renderSession();updateChatContext();return;}
 delete session.pendingFood;delete session.pendingElixir;
 if(!tamingPreview){state.tamingFood=estimate.food;state.sanguineElixir=estimate.elixir;}
 save();renderSession();updateChatContext();
}
$('sanguine-elixir').onchange=updateSessionEstimate;
$('taming-food').onchange=updateSessionEstimate;
$('level').oninput=()=>{const value=Number($('level').value);if(Number.isInteger(value)&&value>=1&&value<=1000){state.level=value;save();}renderPlannerEstimate();};
// A custom rate is a local override; automatic updates only change the planner.
if(state.customRate===undefined)state.customRate=Number.isFinite(state.rate)&&![1,2,3].includes(state.rate)?state.rate:null;
if(!Number.isFinite(state.rate)||state.rate<0.1)state.rate=1;
if(state.customRate!==null)$('custom-rate').value=state.customRate;
let officialRateBusy=false;
function rate(v){if(!Number.isFinite(v)||v<0.1)return;state.rate=v;save();renderPlannerEstimate();}
function showOfficialRate(unavailable=false){
 const known=state.officialRate;
 $('official-rate').textContent=known?'Official rate: ×'+known.rate+' (scheduled check)'+(unavailable?' (last checked)':''):unavailable?'Official rate unavailable':'Checking official rate…';
 const checked=$('official-rate-checked');
 checked.hidden=!known;
 if(known){const date=new Date(known.checkedAt),today=date.toDateString()===new Date().toDateString();checked.dateTime=known.checkedAt;checked.title=date.toLocaleString(undefined,{month:'short',day:'numeric',hour:'numeric',minute:'2-digit',timeZoneName:'short'});checked.textContent='Last checked: '+date.toLocaleString(undefined,today?{hour:'numeric',minute:'2-digit'}:{month:'numeric',day:'numeric',hour:'numeric',minute:'2-digit'});}
 else{checked.removeAttribute('datetime');checked.textContent='';}
 $('rate-help').textContent=state.customRate!==null?'Using custom rate: ×'+state.customRate:unavailable?'Couldn’t refresh. Using ×'+state.rate+'; check your server or enter a custom rate.':'';
 $('rate-help').hidden=!$('rate-help').textContent;
}
async function refreshOfficialRate(){
 if(officialRateBusy)return;officialRateBusy=true;
 try{
  const response=await fetch('official-rate.json',{cache:'no-store',signal:AbortSignal.timeout(10000)});
  if(!response.ok)throw new Error('Unavailable');
  const data=await response.json();
  if(!Number.isFinite(data.rate)||data.rate<0.1||data.rate>100||!Number.isFinite(Date.parse(data.checkedAt))||Date.now()-Date.parse(data.checkedAt)>2*60*60*1000)throw new Error('Invalid or stale rate');
  state.officialRate={rate:data.rate,checkedAt:data.checkedAt};
  if(state.customRate===null){$('custom-rate').value='';rate(data.rate);}
  else save();
  showOfficialRate();
 }catch{showOfficialRate(true);}finally{officialRateBusy=false;}
}
$('custom-rate').oninput=()=>{
 const raw=$('custom-rate').value,value=Number(raw);
 if(raw===''){state.customRate=null;if(state.officialRate)rate(state.officialRate.rate);else save();showOfficialRate(!state.officialRate);refreshOfficialRate();}
 else if(Number.isFinite(value)&&value>=0.1){state.customRate=value;rate(value);showOfficialRate();}
 else renderPlannerEstimate();
};
const steps={unknown:['Record your own observations','Confirm this creature’s method in game before proceeding','Add requirements and progress in notes','Confirm completion in game'],knockout:['Record the creature’s current condition','Check supplies and surroundings','Watch the observed torpor and progress','Confirm the tame is complete in game'],passive:['Record the current feeding or interaction stage','Check the next action in game','Record progress after each interaction','Confirm the tame is complete in game'],special:['Write this creature’s specific requirements in notes','Record the current taming stage','Complete and check each required action in game','Confirm the tame is complete in game']};
function renderSession(){
 renderPlannerEstimate();const s=tamingView();
 $('empty').hidden=!!s;$('session').hidden=!s;if(!s)return;
 $('session-creature-art').innerHTML=sessionCreatureArt(s,!!tamingPreview);setCreatureHeading('session-title',s.creature);
 $('session-estimate').hidden=!!tamingPreview||!s.estimate;
 $('finish').hidden=!!tamingPreview;$('discard').hidden=!!tamingPreview;$('session-notes').hidden=!!tamingPreview;
 $('preview-actions').hidden=!tamingPreview;$('preview-track').hidden=!!state.session; $('return-active').hidden=!state.session;
 $('preview-note').textContent=tamingPreview?'Browsing requirements only. '+(state.session?'Your '+state.session.creature+' tame is still saved.':'Start tracking when you’re ready.'):'';
 $('session-food').textContent='';
 $('feeding-countdown').hidden=!s.estimate||s.estimate.durationSeconds===null;
 $('begin-feeding').hidden=!s.estimate||s.estimate.durationSeconds===null||Number.isFinite(s.started);
 $('countdown-heading').hidden=!Number.isFinite(s.started);
 $('session-rate').textContent='Level '+s.level+' · '+s.rate+'× · '+({knockout:'Knockout tame',passive:'Passive tame',special:'Special tame',unknown:'Method not checked'}[s.method]||'Acquisition');
 $('notes').value=s.notes||'';tick();
}

$('start').onclick=()=>{if(state.session){tab('active');return;}const input=planningInputs();if(!TamingCalculator.validInputs(input.level,input.rate)){say('Enter a whole wild level from 1 to 1000 and a taming rate of at least 0.1×.');return;}state.level=input.level;state.rate=input.rate;if(state.session){$('reply').textContent='You already have an active session. Complete or discard it before starting another.';tab('active');return}state.session={creature:state.creature,level:state.level,rate:state.rate,method:state.method,started:null,knockoutConfirmed:false,progress:0,checks:[],notes:'',timer:null,estimate:planningEstimate()};save();renderSession();tab('active')};
function browseFullGuide(){
 const input=planningInputs();if(!TamingCalculator.validInputs(input.level,input.rate)){say('Choose a wild level from 1 to 1000 and a rate of at least 0.1×.');return;}
 const name=chatTarget;tamingPreview={creature:name,level:input.level,rate:input.rate,method:tamingGuides[name]?.method||(tamingCalculationData.creatures[name]?'knockout':'unknown'),started:null,notes:'',estimate:planningEstimate(name)};
 tab('active',true);openBubble(true);
}
$('return-active').onclick=()=>tab('active');
$('preview-track').onclick=()=>{if(state.session||!tamingPreview)return;state.session=tamingPreview;tamingPreview=null;save();tab('active');};

$('notes').oninput=()=>{state.session.notes=$('notes').value;save()};
$('begin-feeding').onclick=()=>{if(!state.session?.estimate||Number.isFinite(state.session.started))return;state.session.started=Date.now();state.session.knockoutConfirmed=state.session.method==='knockout';save();renderSession();updateChatContext()};
const format=n=>{n=Math.max(0,Math.floor(n));return[Math.floor(n/3600),Math.floor(n/60)%60,n%60].map(v=>String(v).padStart(2,'0')).join(':')};
function tick(){
 const session=tamingView();if(!session)return;
 if(!Number.isFinite(session.started)){$('feeding-countdown').textContent='';return;}
 const remaining=TamingCalculator.remaining(session.estimate,session.started,Date.now());
 if(remaining!==null)$('feeding-countdown').textContent=remaining>0?format(remaining)+' estimated left':'Check completion in game';
}
document.addEventListener('click',event=>{if($('food-menu').open&&!$('food-menu').contains(event.target))$('food-menu').open=false});
$('food-menu').addEventListener('keydown',event=>{if(event.key==='Escape'){$('food-menu').open=false;$('food-toggle').focus({preventScroll:true});}});

$('finish').onclick=()=>{const name=state.session.creature;state.session=null;save();renderSession();tab('plan');$('reply').textContent=`${name} session completed. Ready for your next tame.`};$('discard').onclick=()=>{if(state.session)$('remove-dialog').showModal()};
$('remove-cancel').onclick=()=>$('remove-dialog').close();
$('remove-confirm').onclick=()=>{state.session=null;save();$('remove-dialog').close();renderSession();tab('plan');};
$('remove-dialog').addEventListener('close',()=>{if(state.session)$('discard').focus({preventScroll:true});else $('start').focus({preventScroll:true})});
function syncAssistantPose(){const sprite=$('assistant-art').querySelector('.sprite');if(!sprite)return;const playing=state.companion==='armadoggo'&&!$('chat-bubble').hidden;sprite.classList.toggle('playing',playing);sprite.style.backgroundImage=`url('assets/${state.companion}-${playing?'play':'idle'}.png?v=10')`;sprite.setAttribute('aria-label',`${pets.find(p=>p[0]===state.companion)[1]} ${playing?'play bow and panting':'sitting or idle'} pixel companion`);}
function openBubble(open=true){document.querySelector('.pet-prompt').hidden=open;$('chat-bubble').hidden=!open;$('companion-toggle').setAttribute('aria-expanded',String(open));$('companion-chat').classList.toggle('chat-open',open);syncAssistantPose();requestAnimationFrame(alignChatTail);}
function say(text,target=chatTarget,sources=[],reveal=true){$('reply').textContent=text;$('chat-context').textContent='About '+target;if(reveal)openBubble();}

function estimateReply(estimate){
 return 'Estimated minimum:\n'+estimate.quantity+' × '+estimate.food+'.\nEstimated total feeding time: '+format(estimate.durationSeconds)+'.\n'+(estimate.elixir?'Includes one successful early Sanguine Elixir use.':'No elixir selected.')+'\nAssumes full starting food, default food drain and uninterrupted feeding. Check progress and torpor in game.';
}
function creatureIntroduction(name){
 const info=creatureInfo[name],profile=creatureUses[name];
 return profile?.overview||info?.behavior||info?.habitat||info?.acquisition||'I’m still adding useful details about '+name+'. Its profile will cover what it’s good for and what to watch out for.';
}
function creatureProfileReply(name,topic){
 const info=creatureInfo[name],profile=creatureUses[name];
 if(topic==='uses')return profile?.uses||'I haven’t checked the practical uses for '+name+' yet.';
 return profile?.abilities||info?.behavior||'I haven’t checked the special abilities for '+name+' yet.';
}

function fullGuideReply(guide){
 return (guide.method==='acquisition'?'How to acquire\n':guide.method==='not-tameable'?'Wild encounter\n':'How to tame\n')+guide.overview+(guide.steps?.length?'\n\n'+guide.steps.map((step,i)=>(i+1)+'. '+step).join('\n'):'')+(guide.tips?'\n\n'+guide.tips:'');
}
function tamingBlurb(name){
 if(name==='Gigantoraptor')return 'You’ll earn a baby Gigantoraptor’s trust at its nest. Bring a fertilized egg to distract its parent.';
 const guide=tamingGuides[name];return guide?.overview?.match(/^[\s\S]*?[.!?](?:\s|$)/)?.[0]?.trim()||methodLabel(name)+'. Its detailed steps are still being checked.';
}

function updateChatContext(){
 if(currentTab==='companions'){openBubble(false);return;}
 if(currentTab==='plan')updateStartLabel();
 chatTarget=currentTab==='active'&&tamingView()?tamingView().creature:state.creature;
 const guide=tamingGuides[chatTarget],s=currentTab==='active'?tamingView():null;
 updateQuickQuestions();
 const prompt=document.querySelector('.pet-prompt');
 prompt.innerHTML=s?(s.estimate&&!Number.isFinite(s.started)?'Ready to<br>tame?':'Taming<br>advice'):'More about<br>this dino';
 const text=!s?creatureIntroduction(chatTarget):s?.estimate?(tamingPreview?'Here’s what to plan for.\n':Number.isFinite(s.started)?'Your tame is underway.\n':'Tap “It’s knocked out” below when feeding can begin.\n')+estimateReply(s.estimate):s.pendingFood?'Choose a taming food below to see its requirements.':guide?fullGuideReply(guide):'I’m ready to help with '+chatTarget+'. Its detailed guide is still being checked.';
 say(text,chatTarget,[],false);
}

const aliases={rex:'Rex',jerboa:'Jerboa',jeraboa:'Jerboa',otter:'Otter',armadoggo:'Armadoggo',armadogo:'Armadoggo',drakeling:'Drakeling',veilwyn:'Veilwyn',argentavis:'Argentavis',argy:'Argentavis',ankylosaurus:'Ankylosaurus',anky:'Ankylosaurus',parasaur:'Parasaur',triceratops:'Triceratops',trike:'Triceratops',concavenator:'Concavenator',concavinator:'Concavenator',helicoprion:'Helicoprion',heli:'Helicoprion'};
for(const c of creatureCatalogue){aliases[c.name.toLowerCase()]=c.name;for(const a of c.aliases||[])aliases[a]=c.name;}
function ask(question){
 if(question==='Full taming guide'){browseFullGuide();return;}
 if(question==='Taming advice'){chatMode='taming';updateQuickQuestions();say(tamingBlurb(chatTarget));return;}
 if(question==='About this dino'){chatMode='profile';updateQuickQuestions();say(creatureIntroduction(chatTarget));return;}
 const raw=(question||'').trim();const q=raw.toLowerCase();if(!q)return;const named=Object.keys(aliases).sort((a,b)=>b.length-a.length).find(a=>new RegExp('\\b'+a+'\\b').test(q));if(named)chatTarget=aliases[named];const g=tamingGuides[chatTarget];let answer;let sources=[];
 // Keep the three guide buttons focused on their own topic, including during estimate previews.
 if(g&&question==='How do I tame it?'){say(fullGuideReply(g),chatTarget,g.sources);return;}
 if(g&&question==='What food do I need?'){say(g.food,chatTarget,g.sources);return;}
 if(g&&question==='What should I bring?'){say(g.preparation,chatTarget,g.sources);return;}
if(/useful|uses|used for|good for/.test(q)){answer=creatureProfileReply(chatTarget,'uses');sources=creatureInfo[chatTarget]?.sources||[];}
else if(/abilit|behavior|strength|mechanic|special attack|weight reduction/.test(q)){answer=creatureProfileReply(chatTarget,'abilities');sources=creatureInfo[chatTarget]?.sources||[];}
else if(/about|overview/.test(q)){answer=creatureIntroduction(chatTarget);}

else if(/timer|remind|alert/.test(q)){answer='In Active tame, choose food and elixir, then press “It’s knocked out” once the creature is unconscious and ready to feed. Changing food or elixir updates the estimate without restarting it. The timer is saved across refreshes; background alerts are not connected.';}
else if(/rate|2x|2×|event|3x/.test(q)){answer=`Your planning rate is ${state.rate}×. Choose the rate before starting a session. The official rate is checked automatically; a custom rate overrides it. Active tames keep their starting rate. Supported knockout estimates use the selected rate; special methods do not use a standard timer.`;}
else if(!named&&/how (?:do i |can i |to )?tame (?:a |an |the )?([a-z]+)/.test(q)&&!['it','this','that','my'].includes(q.match(/how (?:do i |can i |to )?tame (?:a |an |the )?([a-z]+)/)[1])){const unknown=q.match(/how (?:do i |can i |to )?tame (?:a |an |the )?([a-z]+)/)[1];answer=`I don’t have a checked guide for “${unknown}” yet. I won’t substitute another creature’s method.`;say(answer,unknown);return;}
else if(/where|found|habitat|spawn|location|area|biome/.test(q)){const info=creatureInfo[chatTarget],general=generalHabitats[chatTarget];answer=general?general+(aberrationHabitats[chatTarget]?'\n\n'+aberrationHabitats[chatTarget]:'')+'\n\nTypical habitats; availability and regions vary by map.':info?.habitat?info.habitat+(info.habitat.includes('These are places to start looking, not a complete spawn map.')?'':'\n\nThese are places to start looking, not a complete spawn map.'):'Habitat information for '+chatTarget+' has not been checked yet.';sources=general?generalHabitatSources:info?.sources||[];}
else if(creatureCatalogue.find(c=>c.name===chatTarget)?.acquisition==='Not tameable'){const info=creatureInfo[chatTarget];answer=chatTarget+' cannot be tamed directly in normal official play. '+(info?.behavior||'Its encounter details have not been added yet.');sources=info?.sources||[];}
else if(['Crafted / rewarded','Egg raising'].includes(creatureCatalogue.find(c=>c.name===chatTarget)?.acquisition)){answer=creatureInfo[chatTarget]?.acquisition||chatTarget+' uses a separate acquisition process. Its detailed guide has not been added yet.';sources=creatureInfo[chatTarget]?.sources||[];}
else if(currentTab!=='active'&&/food|feed|eat|kibble|meat|berr/.test(q)&&!/how many|how much|quantity|amount|how long|duration|time/.test(q)){answer=g?.food||((tamingCalculationData.creatures[chatTarget]?.foods)?'Taming food options: '+Object.keys(tamingCalculationData.creatures[chatTarget].foods).join(', ')+'.':'The taming food for '+chatTarget+' is still being checked.');sources=g?.sources||[];}
else if(tamingCalculationData.creatures[chatTarget]&&/food|feed|eat|kibble|meat|berr|elixir|quantity|how many|how much|amount|how long|duration|time|minutes/.test(q)){const estimate=currentTab==='active'&&tamingView()?.creature===chatTarget?tamingView().estimate:planningEstimate(chatTarget);answer=estimate?estimateReply(estimate):'Choose a taming food below to see its requirements.';}
else if(!g){answer=`The ${chatTarget} ASA taming guide has not been added yet. I can’t reliably give its method, food or special steps. There are ${Object.keys(tamingGuides).length} guides in this build; you can use a manual session for ${chatTarget}.`;}
else if(/how many|how much|amount needed|quantity|quantities|how long|minutes|duration|time|shots|arrows|darts|amount|effectiveness|bonus/.test(q)){
 const active=currentTab==='active'&&tamingView()?.creature===chatTarget;
 const estimate=active?tamingView().estimate:planningEstimate(chatTarget);
 if(/shots|arrows|darts|effectiveness|bonus|narcotic|narcoberr|biotoxin|bio toxin/.test(q)){answer='Shot counts, torpor supplies and effectiveness estimates are still pending verification.';}
 else if(estimate){answer=`Estimate for level ${estimate.level} ${chatTarget} at ${estimate.rate}×: ${estimate.quantity} × ${estimate.food}. `+(estimate.durationSeconds===null?'Kibble feeding time is pending verification.':`Estimated feeding time: ${format(estimate.durationSeconds)} from full food with default food drain.`)+` No spoilage allowance. ${estimate.elixir?'Assumes one successful elixir use early in the tame.':'No elixir selected.'} Check progress and torpor in game.`;}
 else{answer=`I don’t yet have verified quantities, times, shot counts or effectiveness estimates for your ${chatTarget}’s level and rate. ${g.food}`;}sources=g.sources;}

else if(/food|feed|eat|kibble|berr|seed|fish|meat|elixir/.test(q)){
 const estimate=currentTab==='active'&&tamingView()?.creature===chatTarget?tamingView().estimate:planningEstimate(chatTarget);
 answer=estimate?('For level '+estimate.level+' '+chatTarget+' at '+estimate.rate+'×, estimate '+estimate.quantity+' × '+estimate.food+'. Estimated feeding time: '+format(estimate.durationSeconds)+'. '+(estimate.elixir?'Includes one early Sanguine Elixir use.':'No elixir selected.')+' Change food or elixir in Active tame to recalculate.'):g.food;sources=g.sources;
}
else if(/bring|suppl|prepar|need|trap|weapon|tek rifle|rocket|explosi/.test(q)){answer=g.preparation;sources=g.sources;}
else if(/torpor|knock|unconscious/.test(q)){answer=g.method==='knockout'?g.overview:g.overview+' Do not use a standard knockout checklist for this method.';sources=g.sources;}
else if(/tame|taming|method|how|steps|start/.test(q)){answer=g.overview;sources=g.sources;}
else {answer=`For ${chatTarget}, I can explain how to tame it, its taming food and what to bring. Try one of the question buttons. This free helper uses short checked guides rather than open-ended AI.`;}
say(answer,chatTarget,sources);}
document.querySelectorAll('[data-question]').forEach(e=>e.onclick=()=>ask(e.dataset.question));$('companion-toggle').onclick=()=>{if(currentTab==='companions')return;if(!$('chat-bubble').hidden){openBubble(false);return}updateChatContext();openBubble(true);};$('chat-close').onclick=()=>{openBubble(false);$('companion-toggle').focus({preventScroll:true})};document.addEventListener('keydown',e=>{if($('remove-dialog').open)return;if(e.key==='Escape'&&$('filter-menu').open){$('filter-menu').open=false;$('filter-toggle').focus({preventScroll:true});return}if(e.key==='Escape'&&$('creature-picker').open){$('creature-picker').open=false;$('creature-picker-toggle').focus({preventScroll:true});return}if(e.key==='Escape'&&!$('chat-bubble').hidden){openBubble(false);$('companion-toggle').focus({preventScroll:true})}});
renderPets();renderCreatures();renderSession();updateChatContext();setInterval(tick,1000);

document.addEventListener('click',e=>{if($('creature-picker').open&&!$('creature-picker').contains(e.target))$('creature-picker').open=false});

function updateQuickQuestions(){
 const c=creatureCatalogue.find(c=>c.name===chatTarget),wild=c?.acquisition==='Not tameable',acquired=['Crafted / rewarded','Egg raising'].includes(c?.acquisition);
 const profile=currentTab!=='active'&&chatMode==='profile';
 const questions=currentTab!=='active'&&chatMode==='taming'?[['Full taming guide','Full taming guide'],['About this dino','About this dino']]:profile?[['What is it useful for?','Uses?'],['Where is it found?','Habitat?'],['What is its behavior?','Abilities?'],...(!wild&&!acquired?[['Taming advice','Taming advice']]:acquired?[['How is it acquired?','Acquisition?']]:[])]:wild?[['Where is it found?','Where found?'],['What is its behavior?','Behavior?']]:acquired?[['How is it acquired?','Acquisition?']]:[['How do I tame it?','How to tame?'],['What food do I need?','Food?'],['What should I bring?','Preparation?'],...(currentTab!=='active'&&tamingCalculationData.creatures[chatTarget]?[['How many food and how long?','Estimates?']]:[]),...(currentTab!=='active'?[['About this dino','About this dino']]:[])];
 const wrap=document.querySelector('.quick-questions');wrap.replaceChildren();for(const [question,label] of questions){const b=document.createElement('button');b.textContent=label;b.dataset.question=question;b.onclick=()=>ask(question);wrap.append(b)}
}

function methodLabel(name){const c=creatureCatalogue.find(c=>c.name===name);if(c?.acquisition==='Not tameable')return 'Not tameable';if(['Crafted / rewarded','Egg raising'].includes(c?.acquisition))return 'Acquisition';return {knockout:'Knockout tame',passive:'Passive tame',special:'Special tame'}[tamingGuides[name]?.method||(tamingCalculationData.creatures[name]?'knockout':null)]||'Method not checked';}
function moveCompanion(){const perched=currentTab==='companions';$('settings-companion-home').hidden=!perched;document.body.classList.toggle('companions-view',perched);$('companion-toggle').tabIndex=perched?-1:0;if(perched)openBubble(false);const desktop=window.matchMedia('(min-width:1000px)').matches&&!perched;$('desktop-companion-home').hidden=!desktop;const home=$(desktop?'desktop-companion-home':currentTab==='active'?'active-companion-home':perched?'settings-companion-home':'plan-companion-home');home.append($('companion-chat'));if(desktop&&$('chat-bubble').hidden)openBubble(true);}

moveCompanion();


function alignChatTail(){
 const bubble=$('chat-bubble'),sprite=$('assistant-art').querySelector('.sprite');
 if(bubble.hidden||!sprite)return;
 if(window.matchMedia?.('(max-width:680px), (min-width:1000px)').matches)return;
 const faceY={drakeling:.47,armadoggo:sprite.classList.contains('playing')?.70:.33,otter:.41,jerboa:.52,veilwyn:.52}[state.companion]??.5;
 const art=sprite.getBoundingClientRect(),box=bubble.getBoundingClientRect();
 if(!art.height||!box.height)return;
 const tailY=Math.max(16,Math.min(box.height-16,art.top+art.height*faceY-box.top));
 bubble.style.setProperty('--chat-tail-y',tailY+'px');
}
window.addEventListener('resize',alignChatTail);
if(typeof ResizeObserver!=='undefined'){
 const chatLayoutObserver=new ResizeObserver(alignChatTail);
 chatLayoutObserver.observe($('assistant-art'));chatLayoutObserver.observe($('chat-bubble'));
}

showOfficialRate(true);
refreshOfficialRate();
setInterval(()=>{if(!document.hidden)refreshOfficialRate();},5*60*1000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)refreshOfficialRate();});

window.matchMedia('(min-width:1000px)').addEventListener('change',()=>{moveCompanion();alignChatTail();});
