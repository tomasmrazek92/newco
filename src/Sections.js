import { gsapAnimate } from './utils/gsapAnimate';

export default class Sections {
	currentLink;
	isMobile;
	$content;

	constructor() {
		this.$content = $('.page-main');
	}

	init() {
		// Scroll Navs
		$('.section_part').each((i, elm) => {
			const $section = $(elm);
			const $allSections = $('.section_part'); // Replace with your sections' class
			const sectionIndex = $allSections.index($section);
			const sectionLink = $section.attr('data-section');

			const config = {
				trigger: $section,
				start: this.isMobile ? 'top 80%' : 'left center',
				end: this.isMobile ? 'bottom 0%' : 'right center',
				scrub: true,
			};

			// Add scroller and horizontal props for desktop
			if (!this.isMobile) {
				config.scroller = this.$content[0];
				config.horizontal = true;
			}

			const tl = gsap.timeline({
				scrollTrigger: config,
			});

			if (sectionIndex === 0) {
				// Custom Anims
				const tl0 = gsap.timeline({
					scrollTrigger: {
						...config,
						start: this.isMobile ? 'top top' : 'left left',
						end: this.isMobile ? 'bottom top' : 'right left',
					},
				});

				tl0.to('.hero-bg_box', {
					opacity: 0,
				});
			}

			if (sectionIndex === 1) {
				const tl1 = gsap.timeline({
					scrollTrigger: {
						...config,
						start: this.isMobile ? 'top top' : 'left left',
						end: this.isMobile ? 'bottom top' : 'right left',
					},
				});

				tl1.from('.bottom-wave-box', {
					opacity: 0,
				});
			}
		});

		// Animations
		$('[data-animation]').each((i, elm) => {
			const $el = $(elm);
			const isHero = $el.closest('.section.cc-hero').length;

			const config = {
				trigger: $el,
				start: this.isMobile ? 'top 80%' : 'left 80%',
				scrub: true,
				onEnter: () => {
					if (!$el.attr('animated') && !isHero) {
						$el.attr('animated', 'true');
						gsapAnimate($el, this.isMobile);
					}
				},
			};

			// Add scroller and horizontal props for desktop
			if (!this.isMobile) {
				config.scroller = this.$content[0];
				config.horizontal = true;
			}

			const tl = gsap.timeline({
				scrollTrigger: config,
			});
		});
	}
}