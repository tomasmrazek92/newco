import { gsapAnimate } from './utils/gsapAnimate';

export default class Preloader {
  SEEN_PRELOADED_KEY = 'seen_preloader';
  isMobile = false;
  skip;
  tl;

  constructor() {
    this.skip =
      window.sessionStorage.getItem(this.SEEN_PRELOADED_KEY) === 'true' ||
      document.location.hash !== '';
    // this.skip = false;
    if (!this.skip) {
      window.sessionStorage.setItem(this.SEEN_PRELOADED_KEY, 'true');
    }
  }

  start() {
    let preloader = $('.page-load');
    let preloaderParts = $('.page-load_item');
    let preLoaderBgTop = $('.page-load_bg.cc-top');
    let preLoaderBgBottom = $('.page-load_bg.cc-bottom');
    let mainContent = $('.page-main');
    let sections = $('.section');
    let nav = $('.nav_wrapper');

    window.dispatchEvent(new CustomEvent('preloader_begin'));

    this.tl = gsap.timeline({
      onComplete: () => {
        let heroItems = $('.section.cc-hero').find('[data-animation]');
        heroItems.each((i, elm) => {
          gsapAnimate($(elm), this.isMobile);
        });
        window.dispatchEvent(new CustomEvent('preloader_complete'));
        $(document).off('click.skipPreloader');
      },
    });

    // Click to skip the preloader
    $(document).on('click.skipPreloader', () => {
      this.skipToEnd();
    });

    mainContent[0].style.display = 'flex';
    gsap.set(sections, { autoAlpha: 0 });
    gsap.set(nav, { autoAlpha: 0 });

    const self = this;
    preloaderParts.each(function (index) {
      const $element = $(this);

      if (index === 0) {
        self.tl.fromTo(
          $element,
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
        self.tl.to(
          preLoaderBgTop,
          {
            xPercent: -5,
            rotate: -3,
          },
          '<'
        );
        self.tl.to(
          preLoaderBgBottom,
          {
            xPercent: 5,
            rotate: -3,
          },
          '<'
        );
        self.tl.to($element, {
          opacity: 0,
          delay: 1.5,
        });
      }
      if (index === 1) {
        self.tl.fromTo(
          $element,
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
        self.tl.to(
          preLoaderBgTop,
          {
            xPercent: -10,
            rotate: -6,
          },
          '<'
        );
        self.tl.to(
          preLoaderBgBottom,
          {
            xPercent: 10,
            rotate: -6,
          },
          '<'
        );
        self.tl.to($element, {
          opacity: 0,
          delay: 0.7,
        });
      }
      if (index === 2) {
        self.tl.to($element, {
          display: 'block',
        });
        self.tl.fromTo(
          $element.find('span'),
          {
            yPercent: 50,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
          }
        );
        self.tl.to(
          preLoaderBgTop,
          {
            xPercent: -15,
            rotate: -9,
          },
          '<'
        );
        self.tl.to(
          preLoaderBgBottom,
          {
            xPercent: 15,
            rotate: -9,
          },
          '<'
        );
        self.tl.to(
          $element.find('span'),
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
        self.tl.to(
          preLoaderBgTop,
          {
            yPercent: -100,
          },
          '<'
        );
        self.tl.to(
          preLoaderBgBottom,
          {
            xPercent: 100,
          },
          '<'
        );
        self.tl.to($element, {
          opacity: 0,
        });
      }
    });

    this.tl.to(preloader, { autoAlpha: 0, duration: 0.25, ease: 'linear' }, '<');
    this.tl.to(sections, { autoAlpha: 1, duration: 0.25, ease: 'linear' }, '<');
    this.tl.to(nav, { autoAlpha: 1, display: 'block', duration: 0.5, ease: 'linear' }, '<');

    if (this.skip) {
      this.skipToEnd();
    }
  }

  skipToEnd() {
    if (this.tl) {
      this.tl.progress(0.95);
      $(document).off('click.skipPreloader');
    }
  }
}
