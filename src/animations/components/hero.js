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
    delay: 2.9,
    y: '100%',
    ease: Expo.easeInOut,
  });
  TweenMax.from('.hero__btn .hide', 1.5, {
    delay: 2.4,
    y: '-100%',
    ease: Expo.easeInOut,
	});
	TweenMax.from('.chipses__doritos', 1.5, {
    delay: 2.4,
    y: '-150%',
    ease: Expo.easeInOut,
	});
}

export default hero;
