let state = {
  isMobile: null,
  lenis: null,
  $content: $('.page-main'),
};

// #region scrollFunction
// Core initialization
function initScrolling() {
  cleanupScrolling();

  state.isMobile = $(window).width() <= 991;

  // Function to get URL parameters
  const getUrlParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  };

  // Get touchMultiplier from URL or use default
  const touchMultiplierParam = getUrlParam('touch');
  const touchMultiplier = touchMultiplierParam ? parseFloat(touchMultiplierParam) : 0.8;

  // Init Lenis
  state.lenis = new Lenis({
    content: state.$content[0],
    lerp: 1,
    duration: 1,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    touchMultiplier: touchMultiplier,
    smoothWheel: true,
    orientation: state.isMobile ? 'vertical' : 'horizontal',
  });

  // Set up ScrollTrigger for horizontal scroll
  if (!state.isMobile) {
    state.lenis.on('scroll', ScrollTrigger.update);
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
  }

  // Initialize all sections
  initSections();

  // Start render loop
  requestAnimationFrame(function raf(time) {
    state.lenis.raf(time);
    requestAnimationFrame(raf);
  });

  state.lenis.scrollTo('start', {
    immediate: true,
    lock: true, // Add this to force the scroll
  });
}
// Section initialization with consistent config
function initSections() {
  // Scroll Navs
  $('.section_part').each(function () {
    const $section = $(this);
    const $allSections = $('.section_part'); // Replace with your sections' class
    const sectionIndex = $allSections.index($section);
    const sectionId = $section.attr('id');
    const sectionLink = $section.attr('data-section');

    const config = {
      trigger: $section,
      start: state.isMobile ? 'top 80%' : 'left center',
      end: state.isMobile ? 'bottom 0%' : 'right center',
      scrub: true,
      onEnter: () => {
        if (!state.isMobile) {
          if (sectionIndex === 0) {
            $('.btn.cc-nav').addClass('start');
          }
          animateNavBackground(sectionLink);
        }
      },
      onEnterBack: () => {
        if (!state.isMobile) {
          if (sectionIndex === 0) {
            $('.btn.cc-nav').addClass('start');
          }
          animateNavBackground(sectionLink);
        }
      },
      onLeave: () => {
        if (!state.isMobile) {
          if (sectionIndex === 0) {
            $('.btn.cc-nav').removeClass('start');
          }
        }
      },
    };

    // Add scroller and horizontal props for desktop
    if (!state.isMobile) {
      config.scroller = state.$content[0];
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
          start: state.isMobile ? 'top top' : 'left left',
          end: state.isMobile ? 'bottom top' : 'right left',
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
          start: state.isMobile ? 'top top' : 'left left',
          end: state.isMobile ? 'bottom top' : 'right left',
        },
      });

      tl1.from('.bottom-wave-box', {
        opacity: 0,
      });
    }
  });

  // Animations
  $('[data-animation]').each(function () {
    const $el = $(this);

    const config = {
      trigger: $el,
      start: state.isMobile ? 'top 80%' : 'left 80%',
      scrub: true,
      onEnter: function () {
        if (!$el.attr('animated')) {
          $el.attr('animated', 'true');
          gsapAnimate($el);
        }
      },
    };

    // Add scroller and horizontal props for desktop
    if (!state.isMobile) {
      config.scroller = state.$content[0];
      config.horizontal = true;
    }

    const tl = gsap.timeline({
      scrollTrigger: config,
    });
  });
}

// GSAP Anims
function runPreloader() {
  let preloader = $('.page-load');
  let preloaderParts = $('.page-load_item');
  let preLoaderBgTop = $('.page-load_bg.cc-top');
  let preLoaderBgBottom = $('.page-load_bg.cc-bottom');

  let tl = gsap.timeline({
    onStart: () => {
      state.lenis.stop();
    },
    onComplete: () => {
      state.lenis.start();
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
        delay: 1,
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
          stagger: {
            amount: 0.8,
          },
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
        $(this),
        {
          opacity: 0,
          delay: 1.5,
        },
        '<'
      );
    }
  });
  tl.to(preloader, { opacity: 0, display: 'none' }, '<');
}
function gsapSet() {
  if (!state.isMobile) {
    gsap.set($('[data-animation]').not('.nav'), { visibility: 'hidden' });
  }
}
function gsapAnimate(element) {
  const $el = $(element);
  const tl = gsap.timeline();

  if (state.isMobile) return;

  // Heading animation
  if ($el.is('[data-animation="heading"]')) {
    const type = $el.attr('data-split-type') || 'word';
    const typeSplit = new SplitType($el, {
      types: 'words, chars',
      tagName: 'span',
    });

    tl.from($el.find(`.${type}`), {
      y: '2rem',
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.1,
    });
    tl.to(
      [$el, $el.find(`.${type}`)],
      {
        visibility: 'visible',
      },
      '<'
    );
  }

  // Item animation
  if ($el.is('[data-animation="item"]')) {
    const stagger = $el.attr('data-stagger') || 0.2;
    tl.fromTo(
      $el,
      { y: '2rem', opacity: 0 },
      { y: '0rem', opacity: 1, visibility: 'visible', stagger }
    );
  }

  // Stagger animation
  if ($el.is('[data-animation="stagger"]')) {
    const staggerItems = $el.find('[data-animation="stagger-item"]');
    const stagger = $el.attr('data-stagger') || 0.1;

    gsap.set([$el, staggerItems], {
      visibility: 'visible',
      immediateRender: true,
    });

    tl.from(staggerItems, {
      y: '1rem',
      opacity: 0,
      stagger,
      clearProps: 'visibility',
      overwrite: 'auto',
      force3D: true,
    });
  }

  // Counter animation
  if ($el.is('[data-animation="counter"]')) {
    const scoreText = $el.text();
    const score = parseFloat(scoreText);
    const counter = { val: 0 };

    tl.to(counter, {
      val: score,
      duration: 1,
      onStart: () => {
        gsap.to($el, { opacity: 1 });
      },
      onUpdate: function () {
        $el.text(counter.val.toFixed(0));
      },
      ease: 'power2.out',
    });
    tl.to($el, { visibility: 'visible' }, '<');
  }

  // Fade animation
  if ($el.is('[data-animation="fade"]')) {
    tl.from($el, { opacity: 0 });
  }

  return tl;
}
// Cleanup function
function cleanupScrolling() {
  $('.nav').removeClass('active');
  ScrollTrigger.getAll().forEach((st) => st.kill());
  if (state.lenis) state.lenis.destroy();
}

// #endregion

// #region Nav
const navbar = $('.nav');
let currentLink;

// Moving shape
function animateNavBackground(targetLinkText) {
  // Return if we are on same item
  if (currentLink === targetLinkText) return;

  currentLink = targetLinkText;

  // Find all nav menu links
  const navLinks = document.querySelectorAll('.nav_menu-link');
  const navContainer = document.querySelector('.nav_menu-inner');

  // Get the background element
  const navBg = document.querySelector('.nav_menu-bg');

  // Find the matching link
  const targetLink = Array.from(navLinks).find(
    (link) =>
      link.textContent.trim().toLowerCase() === targetLinkText.toLowerCase() ||
      link.id.toLowerCase() === targetLinkText.toLowerCase()
  );

  if (!targetLink || !navContainer || targetLinkText === 'none') {
    $('.nav_menu-bg').css('opacity', '0');
    navLinks.forEach((link) => link.classList.remove('active'));
    return;
  }

  if (!navBg) {
    console.warn('Nav background element not found');
    return;
  }

  // Get the positions relative to the parent container
  const containerRect = navContainer.getBoundingClientRect();
  const linkRect = targetLink.getBoundingClientRect();

  // Calculate position relative to container
  const relativeLeft = linkRect.left - containerRect.left;

  // Create the animation
  gsap.to(navBg, {
    x: relativeLeft,
    opacity: 1,
    width: linkRect.width,
    height: linkRect.height,
    duration: 0.4,
    ease: 'power2.out',
    onStart: () => {
      // Add active class to current link
      navLinks.forEach((link) => link.classList.remove('active'));
      targetLink.classList.add('active');
    },
  });
}

// Scroll bg
window.onscroll = () => {
  if (navbar.length && $(window).width() < 992) {
    if (window.scrollY > $(navbar).height() / 2) {
      if (!navbar.hasClass('active')) {
        navbar.addClass('active');
      }
    } else {
      if (navbar.hasClass('active')) {
        navbar.removeClass('active');
      }
    }
  }
};

// Click for open Menu
function createObserver(targetSelector, callback) {
  const targetNodes = $(targetSelector);
  targetNodes.each(function () {
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          callback(mutation.target);
        }
      });
    });
    observer.observe(this, { attributes: true, attributeFilter: ['class'] }); // Pass the DOM node directly
  });
}
function menuCallback() {
  if ($('.w-nav-button').hasClass('w--open')) {
    navbar.addClass('open');
  } else {
    navbar.removeClass('open');
  }
}
createObserver('.w-nav-button', menuCallback);

// Scroll Anchors
$('.nav_menu-link').on('click', function (e) {
  e.preventDefault();

  const linkId = $(this).attr('id');
  const targetSection = $(`.section_part[data-section="${linkId}"]`);

  if (targetSection.length && state.lenis) {
    // Get the pin-spacer parent if it exists
    const pinSpacer = targetSection.parent('.pin-spacer');

    // Calculate the actual scroll position
    let scrollTarget;

    if (pinSpacer.length) {
      // If section is pinned, use the pin-spacer's offset
      scrollTarget = pinSpacer.offset().top;
    } else {
      // If section is not pinned, use the section's offset
      scrollTarget = targetSection.offset().left;
    }

    // Add any additional offset for fixed headers if needed
    // const headerOffset = $('.your-header').height(); // Uncomment if needed
    // scrollTarget -= headerOffset;

    state.lenis.scrollTo(scrollTarget, {
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lock: true,
      lerp: 0.1,
    });
  }
});

$('[hero-scroll]').on('click', function () {
  state.lenis.scrollTo($(`section`).eq(1)[0], {
    duration: 1, // Duration in seconds (default is 1)
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing function
    lock: true, // Prevents user scroll during animation
    lerp: 0.1, // Lower number = smoother scrolling (default is 0.1)
  });
});

$('.nav_brand').on('click', function () {
  state.lenis.scrollTo($(`section`).eq(0)[0], {
    duration: 1, // Duration in seconds (default is 1)
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing function
    lock: true, // Prevents user scroll during animation
    lerp: 0.1, // Lower number = smoother scrolling (default is 0.1)
  });
});

// #endregion

// #region Modals
// Modals
function initModalBasic() {
  const modalGroup = document.querySelector('[data-modal-group-status]');
  const modals = document.querySelectorAll('[data-modal-name]');
  const modalTargets = document.querySelectorAll('[data-modal-target]');

  // Open modal
  modalTargets.forEach((modalTarget) => {
    modalTarget.addEventListener('click', function () {
      const modalTargetName = this.getAttribute('data-modal-target');

      // Close all modals
      modalTargets.forEach((target) => target.setAttribute('data-modal-status', 'not-active'));
      modals.forEach((modal) => modal.setAttribute('data-modal-status', 'not-active'));

      if (modalTargetName === 'team') {
        let teamCard = $(this).closest('.team-list-item');
        let currentIndex = teamCard.parent().index();
        let teamName = teamCard.find('[data-team-name]').text();
        let teamRole = teamCard.find('[data-team-role]').text();

        $('[data-target-name]').text(teamName);
        $('[data-target-role]').text(teamRole);

        $('.team_visual .w-dyn-item').hide();
        $('.team_visual .w-dyn-item').eq(currentIndex).fadeIn();

        $('.team_role-rich-item').hide();
        $('.team_role-rich-item').eq(currentIndex).show();
      }

      // Activate clicked modal
      document
        .querySelector(`[data-modal-target="${modalTargetName}"]`)
        .setAttribute('data-modal-status', 'active');
      document
        .querySelector(`[data-modal-name="${modalTargetName}"]`)
        .setAttribute('data-modal-status', 'active');

      // Set group to active
      if (modalGroup) {
        modalGroup.setAttribute('data-modal-group-status', 'active');
      }

      state.lenis.stop();
    });
  });

  // Close modal
  document.querySelectorAll('[data-modal-close]').forEach((closeBtn) => {
    closeBtn.addEventListener('click', closeAllModals);
  });

  // Close modal on `Escape` key
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeAllModals();
    }
  });

  // Function to close all modals
  function closeAllModals() {
    modalTargets.forEach((target) => target.setAttribute('data-modal-status', 'not-active'));

    if (modalGroup) {
      modalGroup.setAttribute('data-modal-group-status', 'not-active');
    }

    state.lenis.start();
  }
}
// #endregion

// Initialize on document ready
$(document).ready(function () {
  initScrolling();
  gsapSet();
  runPreloader();
  initModalBasic();

  // Debounced resize handler
  let resizeTimer;
  $(window).on('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const newIsMobile = $(window).width() <= 991;
      if (newIsMobile !== state.isMobile) {
        initScrolling();
      }
    }, 250);
  });

  // Cleanup on page unload
  $(window).on('beforeunload', cleanupScrolling);
});

// #region Swipers

import { initSwipers } from './utils/globalFunctions';

// Sample data for swiperInstances, specific to this page
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

// #endregion

// #region mobileSnap
// Mobile section pinning
const initMobilePinning = () => {
  if (window.innerWidth >= 992) return;

  const sections = $('.section_part');

  sections.each((index, section) => {
    if (index === sections.length - 1) return; // Skip last section

    const nextSection = sections[index + 1];
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
};

// Init
$(document).ready(() => {
  // Initialize pinning
  initMobilePinning();

  // Optimized resize handling
  let resizeTimeout;
  let prevWidth = $(window).width();

  $(window).on('resize', () => {
    const currentWidth = $(window).width();

    if (currentWidth !== prevWidth) {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        ScrollTrigger.getAll().forEach((st) => {
          if (st.vars.pin) st.kill();
        });
        initMobilePinning();
        prevWidth = currentWidth;
      }, 250);
    }
  });
});

// Simplified CSS
/*
  .section {
    width: 100%;
    backface-visibility: hidden;
  }
  
  @media screen and (min-width: 992px) {
    .section {
      transform: none !important;
    }
  }
  */

// #endregion
