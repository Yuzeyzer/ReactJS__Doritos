import { TweenMax, Expo } from 'gsap';

function overlay() {
  TweenMax.to('.overlay__first', 1.5, {
    delay: 0.1,
    top: '-100%',
    ease: Expo.easeInOut,
  });
  TweenMax.to('.overlay__second', 1.5, {
    delay: 0.3,
    top: '-100%',
    ease: Expo.easeInOut,
  });
  TweenMax.to('.overlay__third', 1.5, {
    delay: 0.6,
    top: '-100%',
    ease: Expo.easeInOut,
  });
}

export default overlay;
