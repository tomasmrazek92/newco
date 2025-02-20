let state = {
  isMobile: null,
  lenis: null,
  $content: $('.page-main'),
};

// Core initialization
function initScrolling() {
  cleanupScrolling();
  state.isMobile = $(window).width() <= 991;

  // Init Lenis
  state.lenis = new Lenis({
    content: state.$content[0],
    lerp: 1,
    duration: 1,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    touchMultiplier: 1.5,
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
}
// Section initialization with consistent config
function initSections() {
  $('section').each(function () {
    const $section = $(this);
    const $allSections = $('section'); // Replace with your sections' class
    const sectionIndex = $allSections.index($section);
    const sectionId = $section.attr('id');
    const sectionLink = $section.attr('data-section');

    const config = {
      trigger: $section,
      start: state.isMobile ? 'top 80%' : 'left 80%',
      end: state.isMobile ? 'bottom 0%' : 'right 0%',
      scrub: true,
      markers: true,
      onEnter: () => {
        console.log('In View ' + sectionIndex);
        console.log(sectionIndex);
        if (!$section.hasClass('animated') && sectionIndex !== 0) {
          $section.addClass('animated');
          gsapSection($section);
        }
        animateNavBackground(sectionLink);
      },
      onEnterBack: () => {
        animateNavBackground(sectionLink);
      },
      onLeave: () => {
        console.log('Out View ' + sectionIndex);
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

    // Hero
    if (sectionIndex === 0) {
      gsap.to('.hero-bg_box', {
        scale: 1.2,
        opacity: 0,
        scrollTrigger: {
          ...config,
          scrub: 1,
          start: 'right right',
          end: 'right center',
        },
      });
    }
  });
}

// GSAP Anims
function gsapSet() {
  gsap.set($('[data-animation]').not('.nav'), { visibility: 'hidden' });
}
function gsapSection(sectionEl) {
  // els
  let trigger = $(sectionEl);
  let heading = $(sectionEl).find('[data-animation="heading"]');
  let items = $(sectionEl).find('[data-animation="item"]');
  let itemsStagger = $(sectionEl).find('[data-animation="stagger"]'); // childs = [data-animation="stagger-item"]
  let counter = $(sectionEl).find('[data-animation="counter"]');
  let fade = $(sectionEl).find('[data-animation="fade"]');

  // properties
  let stagger = trigger.attr('data-stagger') || 0.2;

  let tl = gsap.timeline();

  if (heading.length) {
    let type = heading.attr('data-split-type') || 'line';
    let typeSplit = new SplitType(heading, {
      types: 'lines, words, chars',
      tagName: 'span',
    });

    tl.from(
      heading.find(`.${type}`),
      {
        y: '2rem',
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.1,
      },
      '<'
    );
    tl.to(
      heading,
      {
        visibility: 'visible',
      },
      '<'
    );
    tl.to(
      heading.find(`.${type}`),
      {
        visibility: 'visisble',
      },
      '<'
    );
  }
  if (items.length) {
    const previousTweens = tl.getChildren(); // Get all tweens in the timeline
    tl.fromTo(
      items,
      { y: '2rem', opacity: 0 },
      { y: '0rem', opacity: 1, visibility: 'visible', stagger: stagger },
      previousTweens.length > 0 ? '<' : '<'
    );
  }
  if (itemsStagger.length) {
    itemsStagger.each(function () {
      let items = $(this).find('[data-animation="stagger-item"]');
      let stagger = $(this).attr('data-stagger') || 0.1;

      // Set initial visibility
      gsap.set([this, items], { visibility: 'visible' });

      // Then do the stagger animation
      tl.from(
        items,
        {
          y: '1rem',
          opacity: 0,
          stagger: stagger,
          clearProps: 'visibility', // Clear visibility prop after animation
        },
        '<'
      );
    });
  }
  if (counter.length) {
    $(counter).each(function () {
      let element = $(this);
      let scoreText = element.text();

      // Continue with normal animation for numeric scores
      let score = parseFloat(scoreText);
      let counter = { val: 0 };

      // Animate both width and counter
      tl.to(
        counter,
        {
          val: score,
          duration: 1,
          onStart: () => {
            gsap.to(element, { opacity: 1 });
          },
          onUpdate: function () {
            element.text(counter.val.toFixed(0));
          },
          ease: 'power2.out',
        },
        '<'
      );

      tl.to(
        element,
        {
          visibility: 'visible',
        },
        '<'
      );
    });
  }
  if (fade.length) {
    fade.each(function () {
      tl.from($(this), { opacity: 0 }, '<');
    });
  }
}
function runPreloader() {
  let preloader = $('.page-load');
  let preloaderParts = $('.page-load_item');
  let preLoaderBgTop = $('.page-load_bg.cc-top');
  let preLoaderBgBottom = $('.page-load_bg.cc-bottom');

  let tl = gsap.timeline({
    onStart: () => {
      // Immediately stop it
      state.lenis.stop();
    },
    onComplete: () => {
      state.lenis.start();
      gsapSection($('section').eq(0));
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

// Nav
let currentLink;
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
    gsap.to(navBg, { opacity: 0 });
    navLinks.forEach((link) => link.classList.remove('active'));
    return;
  }

  if (!navBg) {
    console.warn('Nav background element not found');
    return;
  }

  console.log(targetLinkText);

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
$('.nav_menu-link').on('click', function (e) {
  e.preventDefault();

  const linkId = $(this).attr('id');
  const targetSection = $(`section[data-section="${linkId}"]`).first();

  if (targetSection.length && state.lenis) {
    state.lenis.scrollTo(targetSection[0], {
      duration: 4, // Duration in seconds (default is 1)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing function
      lock: true, // Prevents user scroll during animation
      lerp: 0.1, // Lower number = smoother scrolling (default is 0.1)
    });
  }
});

// Cleanup function
function cleanupScrolling() {
  ScrollTrigger.getAll().forEach((st) => st.kill());
  if (state.lenis) state.lenis.destroy();
}

// Modals
function initModalBasic() {
  const modalGroup = document.querySelector('[data-modal-group-status]');
  const modals = document.querySelectorAll('[data-modal-name]');
  const modalTargets = document.querySelectorAll('[data-modal-target]');

  // Open modal
  modalTargets.forEach((modalTarget) => {
    modalTarget.addEventListener('click', function () {
      const modalTargetName = this.getAttribute('data-modal-target');
      console.log(modalTargetName);

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

        console.log(teamName + '-' + teamRole);
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
