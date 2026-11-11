document.body.classList.add('wl-on');
const welcome=document.getElementById('wl'), start=document.getElementById('wl-go');
window.__go=new Promise(resolve=>{start?.addEventListener('click',()=>{try{const C=window.AudioContext||window.webkitAudioContext; if(C){window.__audioContext ||= new C(); window.__audioContext.resume().catch(()=>{});}}catch{} welcome?.classList.add('bye');document.body.classList.remove('wl-on');setTimeout(()=>welcome?.remove(),700);resolve();},{once:true});});
start?.focus();
