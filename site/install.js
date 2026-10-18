(() => {
 const button=document.getElementById('install-app'),dialog=document.getElementById('install-dialog');
 let installPrompt=null;
 const standalone=window.matchMedia('(display-mode: standalone)');
 const installed=()=>standalone.matches||navigator.standalone===true;
 const update=()=>{button.hidden=installed();};
 update();standalone.addEventListener('change',update);
 window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installPrompt=event;update();});
 window.addEventListener('appinstalled',()=>{installPrompt=null;button.hidden=true;dialog.close();});
 function instructions(){
  const ua=navigator.userAgent;
  const ios=/iPhone|iPad|iPod/.test(ua)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
  let text;
  if(ios)text='In Safari, tap Share, then Add to Home Screen. Turn on Open as Web App if offered, then tap Add.';
  else if(/Android/.test(ua))text='Open this page in Chrome or your usual browser. Tap its menu, then Install app or Add to Home screen. If neither appears, that browser may not support installation.';
  else if(/Macintosh/.test(ua)&&/Safari/.test(ua)&&!/Chrome|Chromium|Edg/.test(ua))text='In Safari, choose File → Add to Dock. If that option is missing, try a current version of Safari or Chrome.';
  else text='Look for the install icon beside the address bar, or open your browser menu and choose Install app. In Chrome it may be under Cast, save and share; in Edge, under Apps. If no install option appears, you can keep using this website normally.';
  document.getElementById('install-instructions').textContent=text;
  if(!dialog.open)dialog.showModal();
 }
 button.addEventListener('click',async()=>{
  if(!installPrompt){instructions();return;}
  const prompt=installPrompt;installPrompt=null;
  try{await prompt.prompt();await prompt.userChoice;}catch{instructions();}
 });
 document.getElementById('install-close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('close',()=>button.focus({preventScroll:true}));
})();
