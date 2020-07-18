import { TweenMax, Expo } from 'gsap';

function hero() {
  TweenMax.from('.hero__title .hide', 1.5, {
    delay: 2.2,
    y: '100%',
    ease: Expo.easeInOut,
  });
  TweenMax.from('.hero__subtitle .hide', 1.5, {
    delay: 2.4,
    y: '100%',
    ease: Expo.easeInOut,
  });
  TweenMax.from('.hero__description .hide', 1.5, {
    delay: 2.8,
    y: '100%',
    ease: Expo.easeInOut,
  });
  TweenMax.from('.hero__price .hide', 1.5, {
    delay: 3,
    y: '100%',
    ease: Expo.easeInOut,
  });
  TweenMax.from('.hero__btn .hide', 0.5, {
    delay: 3,
    y: '100%',
    ease: Expo.easeInOut,
  });
}

export default hero;
