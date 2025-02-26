import { initSwipers } from './utils/globalFunctions';

export default class Carousels {
  constructor() {
    const swiperInstances = [
      [
        '.section.cc-about',
        '.about-wrap',
        'about-slider',
        {
          slidesPerView: 'auto',
          spaceBetween: 32,
        },
        'mobile',
      ],
      [
        '.section.cc-team',
        '.team-list-wrap',
        'team-slider',
        {
          slidesPerView: 'auto',
          spaceBetween: 16,
        },
        'mobile',
      ],
      [
        '.section.cc-exp',
        '.experience_slider',
        'exp-slider',
        {
          slidesPerView: 'auto',
          spaceBetween: 32,
        },
        'mobile',
      ],
      [
        '.section.cc-exp-cards',
        '.exp-cards_wrap',
        'exp-cards-slider',
        {
          slidesPerView: 'auto',
          spaceBetween: 32,
        },
        'mobile',
      ],
      [
        '.section.cc-ceo',
        '.ceo_slider',
        'ceo-slider',
        {
          slidesPerView: 'auto',
          spaceBetween: 16,
        },
        'mobile',
      ],
    ];

    // Initialize swipers with instances specific to this page
    initSwipers(swiperInstances);
  }
}
