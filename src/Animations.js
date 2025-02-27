import { gsapAnimate } from './utils/gsapAnimate';

export default class Sections {
  currentLink;
  isMobile;
  $content;
  intObs;

  constructor() {
    this.$content = $('.page-main');
    this.intObs = new IntersectionObserver(this.onIntersection.bind(this), { threshold: 0.2 });
  }

  init() {
    $('[data-animation]').each((i, elm) => {
      const $el = $(elm);
      const isHero = $el.closest('.section.cc-hero').length;

      if (!isHero) {
        this.intObs.observe(elm);
      }
    });
  }

  onIntersection(entries, observer) {
    entries.forEach((entry) => {
      const elm = entry.target;
      if (entry.isIntersecting && !elm.hasAttribute('animated')) {
        elm.setAttribute('animated', '');
        observer.unobserve(elm);
        gsapAnimate(elm, this.isMobile);
      }
    });
  }
}
