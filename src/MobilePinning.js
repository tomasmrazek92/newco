export default class MobilePinning {
  sections;
  scrollContainer;

  constructor(scrollContainer) {
    this.sections = $('.section_part');
    this.scrollContainer = scrollContainer;
  }

  start() {
    this.scrollContainer.style.transform = 'none';

    this.sections.each((index, section) => {
      if (index === this.sections.length - 1) return; // Skip last section

      const nextSection = this.sections[index + 1];
      const currentHeight = $(section).outerHeight();
      const isShortSection = currentHeight <= window.innerHeight;

      // Set initial z-index - lower sections should have higher z-index
      $(section).css({ position: 'relative', zIndex: 1 });
      $(nextSection).css({ position: 'relative', zIndex: 2 });

      ScrollTrigger.create({
        trigger: section,
        start: isShortSection ? 'top top' : 'bottom bottom',
        endTrigger: nextSection,
        end: 'top top',
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
        onEnter: () => {
          // Keep next section above current
          $(section).css({ zIndex: 1 });
          $(nextSection).css({ zIndex: 2 });
        },
        onEnterBack: () => {
          // Maintain z-index when scrolling back
          $(section).css({ zIndex: 1 });
          $(nextSection).css({ zIndex: 2 });
        },
        onLeave: () => {
          // Keep next section above when leaving
          $(section).css({ zIndex: 1 });
          $(nextSection).css({ zIndex: 2 });
        },
        onLeaveBack: () => {
          // Keep next section above when scrolling back
          $(section).css({ zIndex: 1 });
          $(nextSection).css({ zIndex: 2 });
        },
      });
    });
  }

  kill() {
    ScrollTrigger.getAll().forEach((st) => {
      if (st.vars.pin) st.kill();
    });
  }
}
