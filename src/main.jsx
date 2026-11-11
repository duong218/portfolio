import React from 'react';
import { createRoot } from 'react-dom/client';
import lottie from 'lottie-web/build/player/lottie_light';
import cat from './assets/Cat_Movement.json';
import './styles.css';
import './effects/welcome.js';
import { startLenis } from './effects/lenis.js';
window.React=React; window.ReactDOM={createRoot}; window.lottie=lottie;
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const node=document.getElementById('wl-cb');
if(node){const anim=lottie.loadAnimation({container:node,renderer:'svg',loop:true,autoplay:!reduced,animationData:cat});if(reduced)anim.goToAndStop(60,true);}
window.__go.then(() => requestAnimationFrame(() => startLenis()));
import('./legacy-app.js');
