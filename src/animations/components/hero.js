import { TweenMax, Expo } from 'gsap';

function hero() {
  TweenMax.from('.hide', 1.5, {
    delay: 2.2,
    y: '100%',
    ease: Expo.easeInOut,
  });
  TweenMax.from('.hero__subtitle', 1.5, {
    delay: 2.4,
    y: '30%',
    opacity: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from('.hero__description', 1.5, {
    delay: 2.6,
    y: '30',
    opacity: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from('.hero__price', 1.5, {
    delay: 2.8,
    y: '30',
    opacity: 0,
    ease: Expo.easeInOut,
  });
  TweenMax.from('.hero__btn', 0.5, {
    delay: 3,
    y: '30',
    opacity: 0,
    ease: Expo.easeInOut,
  });
}

export default hero;
