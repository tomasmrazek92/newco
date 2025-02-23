let state = {
  isMobile: null,
  lenis: null,
  $content: $('.page-main'),
  currentSection: 0,
  isAnimating: false,
  lastScrollTime: 0,
  scrollCooldown: 1000,
};

function isWideSection(section) {
  return section.offsetWidth > window.innerWidth + 1;
}

function isAtEndOfWideSection(section) {
  if (!isWideSection(section)) return false;

  const currentScroll = state.lenis.scroll;
  const sectionEnd = section.offsetLeft + section.offsetWidth - window.innerWidth;

  // Consider we're at the end if we're within 20px of the section end
  return Math.abs(currentScroll - sectionEnd) < 20;
}

function isAtStartOfWideSection(section) {
  if (!isWideSection(section)) return false;

  const currentScroll = state.lenis.scroll;
  const sectionStart = section.offsetLeft;

  // Consider we're at the start if we're within 20px of the section start
  return Math.abs(currentScroll - sectionStart) < 20;
}

function initScrolling() {
  cleanupScrolling();

  state.isMobile = $(window).width() <= 991;

  const getUrlParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };

  const touchMultiplierParam = getUrlParam('touch');
  const touchMultiplier = touchMultiplierParam ? parseFloat(touchMultiplierParam) : 0.8;

  state.lenis = new Lenis({
    content: state.$content[0],
    lerp: 1,
    duration: 1.5,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    touchMultiplier: touchMultiplier,
    smoothWheel: true,
    orientation: state.isMobile ? 'vertical' : 'horizontal',
    wheelMultiplier: 0.5,
  });

  if (!state.isMobile) {
    state.lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    ScrollTrigger.scrollerProxy(state.$content[0], {
      scrollLeft(value) {
        if (arguments.length) {
          state.lenis.scrollTo(value, 0, 0);
        }
        return state.lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: 'transform',
    });

    window.addEventListener(
      'wheel',
      (e) => {
        const sections = document.querySelectorAll('.section-snap');
        const currentSection = sections[state.currentSection];
        const direction = Math.sign(e.deltaY);

        if (isWideSection(currentSection)) {
          // Check if we're at the boundaries of the wide section
          if (
            (direction > 0 && isAtEndOfWideSection(currentSection)) ||
            (direction < 0 && isAtStartOfWideSection(currentSection))
          ) {
            e.preventDefault();

            const now = Date.now();
            if (state.isAnimating || now - state.lastScrollTime < state.scrollCooldown) {
              return;
            }

            const nextSection = state.currentSection + direction;

            if (nextSection >= 0 && nextSection < sections.length) {
              state.isAnimating = true;
              state.lastScrollTime = now;

              state.lenis.scrollTo(sections[nextSection].offsetLeft, {
                duration: 1.5,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                lock: true,
                onComplete: () => {
                  state.isAnimating = false;
                  state.currentSection = nextSection;
                },
              });
            }
          }
          return;
        }

        // Regular section snapping
        e.preventDefault();

        const now = Date.now();
        if (state.isAnimating || now - state.lastScrollTime < state.scrollCooldown) {
          return;
        }

        state.lastScrollTime = now;
        const nextSection = state.currentSection + direction;

        if (nextSection >= 0 && nextSection < sections.length) {
          state.isAnimating = true;

          state.lenis.scrollTo(sections[nextSection].offsetLeft, {
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            lock: true,
            onComplete: () => {
              state.isAnimating = false;
              state.currentSection = nextSection;
            },
          });
        }
      },
      { passive: false }
    );
  }

  requestAnimationFrame(function raf(time) {
    state.lenis.raf(time);
    requestAnimationFrame(raf);
  });

  setTimeout(() => {
    state.lenis.scrollTo(0, {
      immediate: true,
    });
  }, 100);
}

function cleanupScrolling() {
  $('.nav').removeClass('active');
  ScrollTrigger.getAll().forEach((st) => st.kill());
  if (state.lenis) state.lenis.destroy();
}

let resizeTimeout;
window.addEventListener('resize', () => {
  if (resizeTimeout) clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(initScrolling, 250);
});

initScrolling();
