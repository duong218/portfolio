import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export function startLenis() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.__portfolioLenis) return;
  window.__portfolioLenis = new Lenis({
    autoRaf: true,
    duration: 1.05,
    smoothWheel: true,
    syncTouch: false,
    wheelMultiplier: 0.9,
  });
}
