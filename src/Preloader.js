import { gsapAnimate } from './utils/gsapAnimate';

export default class Preloader {
  SEEN_PRELOADED_KEY = 'seen_preloader';
  isMobile = false;
  skip;

  constructor() {
    this.skip = window.sessionStorage.getItem(this.SEEN_PRELOADED_KEY) === 'true';
    window.sessionStorage.setItem(this.SEEN_PRELOADED_KEY, 'true');
  }

  start() {
    let preloader = $('.page-load');
    let preloaderParts = $('.page-load_item');
    let preLoaderBgTop = $('.page-load_bg.cc-top');
    let preLoaderBgBottom = $('.page-load_bg.cc-bottom');

    let tl = gsap.timeline({
      onComplete: () => {
        let heroItems = $('.section.cc-hero').find('[data-animation]');
        heroItems.each((i, elm) => {
          gsapAnimate($(elm), this.isMobile);
        });
      },
    });

    preloaderParts.each(function (index) {
      if (index === 0) {
        tl.fromTo(
          $(this),
          {
            yPercent: 50,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            delay: 1,
            duration: 0.5,
            display: 'block',
          }
        );
        tl.to(
          preLoaderBgTop,
          {
            xPercent: -5,
            rotate: -3,
          },
          '<'
        );
        tl.to(
          preLoaderBgBottom,
          {
            xPercent: 5,
            rotate: -3,
          },
          '<'
        );
        tl.to($(this), {
          opacity: 0,
          delay: 1.5,
        });
      }
      if (index === 1) {
        tl.fromTo(
          $(this),
          {
            opacity: 0,
            scale: 0.8,
          },
          {
            display: 'block',
            opacity: 1,
            scale: 1,
          }
        );
        tl.to(
          preLoaderBgTop,
          {
            xPercent: -10,
            rotate: -6,
          },
          '<'
        );
        tl.to(
          preLoaderBgBottom,
          {
            xPercent: 10,
            rotate: -6,
          },
          '<'
        );
        tl.to($(this), {
          opacity: 0,
          delay: 0.7,
        });
      }
      if (index === 2) {
        tl.to($(this), {
          display: 'block',
        });
        tl.fromTo(
          $(this).find('span'),
          {
            yPercent: 50,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
          }
        );
        tl.to(
          preLoaderBgTop,
          {
            xPercent: -15,
            rotate: -9,
          },
          '<'
        );
        tl.to(
          preLoaderBgBottom,
          {
            xPercent: 15,
            rotate: -9,
          },
          '<'
        );
        tl.to(
          $(this).find('span'),
          {
            yPercent: 0,
            opacity: 0,
            stagger: {
              each: 0.1,
            },
            delay: 3,
          },
          '<'
        );
        tl.to(
          preLoaderBgTop,
          {
            yPercent: -100,
          },
          '<'
        );
        tl.to(
          preLoaderBgBottom,
          {
            xPercent: 100,
          },
          '<'
        );
        tl.to($(this), {
          opacity: 0,
        });
      }
    });
    tl.to(preloader, { opacity: 0, display: 'none' }, '<');

    if (this.skip) {
      tl.progress(1);
    }
  }
}
