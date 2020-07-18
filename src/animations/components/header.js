import { TweenMax, Expo } from 'gsap';

function header() {
	TweenMax.from('.logo img', 1.5, {
    delay: 0.6,
    y: '-100%',
    ease: Expo.easeInOut,
	});
	TweenMax.staggerFrom('.menu__links', 1.5, {
    delay: 0.7,
    y: '-200%',
    opacity: 0,
    ease: Expo.easeInOut,
	},0.2);
	TweenMax.from('.cart', 1.5, {
    delay: 1.7,
    y: '-100',
    ease: Expo.easeInOut,
  });
}

export default header;