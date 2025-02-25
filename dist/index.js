"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/utils/globalFunctions.js
  var windowWidth = window.innerWidth;
  var uniqueIdCounters = {};
  var createResponsiveSwiper = (componentSelector, swiperSelector, classSelector, options, mode) => {
    let elements = $(componentSelector).add(swiperSelector);
    if (elements.length < 2)
      return;
    uniqueIdCounters[classSelector] = 0;
    uniqueIdCounters[classSelector] = uniqueIdCounters[classSelector] || 0;
    elements.each(function() {
      let uniqueKey = `${classSelector}_${uniqueIdCounters[classSelector]}`;
      addUniqueClassesToElements(this, swiperSelector, uniqueKey, [
        ".swiper-arrow",
        ".swiper-nav",
        ".swiper-drag-wrapper"
      ]);
      let swiperOptions = getMergedSwiperOptions(options, uniqueKey);
      manageSwiperInstance(this, swiperSelector, uniqueKey, classSelector, swiperOptions, mode);
      uniqueIdCounters[classSelector]++;
    });
  };
  var addUniqueClassesToElements = (context, swiperSelector, uniqueKey, controlSelectors) => {
    controlSelectors.forEach((selector) => {
      $(context).find(selector).addClass(uniqueKey);
    });
    $(context).find(swiperSelector).addClass(uniqueKey);
  };
  var getMergedSwiperOptions = (options, uniqueKey) => {
    const defaultPagination = {
      el: `.swiper-nav.${uniqueKey}`,
      type: "bullets",
      bulletActiveClass: "cc-active",
      bulletClass: "swiper-dot",
      clickable: true
    };
    const paginationConfig = options.pagination ? { ...defaultPagination, ...options.pagination } : defaultPagination;
    return {
      speed: 1e3,
      navigation: {
        prevEl: `.swiper-arrow.prev.${uniqueKey}`,
        nextEl: `.swiper-arrow.next.${uniqueKey}`
      },
      pagination: paginationConfig,
      ...options
    };
  };
  var manageSwiperInstance = (context, swiperSelector, uniqueKey, classSelector, swiperOptions, mode) => {
    swipers[classSelector] = swipers[classSelector] || {};
    swipers[classSelector][uniqueKey] = swipers[classSelector][uniqueKey] || {};
    let existingInstance = swipers[classSelector][uniqueKey];
    let existingSwiper = existingInstance.swiperInstance;
    let shouldInitDesktop = mode === "desktop" && window.matchMedia("(min-width: 992px)").matches;
    let shouldInitMobile = mode === "mobile" && window.matchMedia("(min-width: 0px) and (max-width: 991px)").matches;
    let shouldInitAll = mode === "all";
    const destroySwiper = () => {
      if (existingInstance.observer) {
        existingInstance.observer.disconnect();
        delete existingInstance.observer;
      }
      if (existingSwiper) {
        existingSwiper.destroy(true, true);
        delete swipers[classSelector][uniqueKey];
        console.log("Swiper destroyed for", swiperSelector, "with uniqueKey", uniqueKey);
      }
    };
    const reInitObserver = () => {
      if (existingInstance.observer) {
        existingInstance.observer.disconnect();
      }
      const swiperElement = $(`${swiperSelector}.${uniqueKey}`)[0];
      if (!swiperElement)
        return;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (shouldInitDesktop || shouldInitMobile || shouldInitAll)) {
            if (!existingSwiper) {
              let swiper = new Swiper(`${swiperSelector}.${uniqueKey}`, swiperOptions);
              swipers[classSelector][uniqueKey] = {
                swiperInstance: swiper,
                mode: shouldInitDesktop ? "desktop" : shouldInitMobile ? "mobile" : "all",
                initialized: true
              };
              observer.disconnect();
              console.log("Swiper initialized for", swiperSelector, "with uniqueKey", uniqueKey);
            }
          }
        });
      }, {});
      swipers[classSelector][uniqueKey].observer = observer;
      observer.observe(swiperElement);
    };
    if (!shouldInitDesktop && mode === "desktop")
      destroySwiper();
    else if (!shouldInitMobile && mode === "mobile")
      destroySwiper();
    else if (!shouldInitAll && mode === "all")
      destroySwiper();
    else if ((shouldInitDesktop || shouldInitMobile || shouldInitAll) && !existingSwiper) {
      reInitObserver();
    }
  };
  var runSwipers = (swiperInstances2) => {
    swiperInstances2.forEach((instance) => {
      createResponsiveSwiper(...instance);
    });
  };
  var initSwipers = (swiperInstances2, swipersState) => {
    runSwipers(swiperInstances2);
    window.addEventListener("resize", function() {
      if (window.innerWidth !== windowWidth) {
        windowWidth = window.innerWidth;
        runSwipers(swiperInstances2);
      }
    });
  };

  // src/index.js
  var state = {
    isMobile: null,
    lenis: null,
    $content: $(".page-main")
  };
  function initScrolling() {
    cleanupScrolling();
    state.isMobile = $(window).width() <= 991;
    const getUrlParam = (param) => {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    };
    const touchMultiplierParam = getUrlParam("touch");
    const touchMultiplier = touchMultiplierParam ? parseFloat(touchMultiplierParam) : 0.8;
    state.lenis = new Lenis({
      content: state.$content[0],
      lerp: 1,
      duration: 1,
      easing: (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
      touchMultiplier,
      smoothWheel: true,
      orientation: state.isMobile ? "vertical" : "horizontal"
    });
    if (!state.isMobile) {
      state.lenis.on("scroll", ScrollTrigger.update);
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
            height: window.innerHeight
          };
        },
        pinType: "transform"
      });
    }
    initSections();
    requestAnimationFrame(function raf(time) {
      state.lenis.raf(time);
      requestAnimationFrame(raf);
    });
    state.lenis.scrollTo("start", {
      immediate: true,
      lock: true
      // Add this to force the scroll
    });
  }
  function initSections() {
    $(".section_part").each(function() {
      const $section = $(this);
      const $allSections = $(".section_part");
      const sectionIndex = $allSections.index($section);
      const sectionId = $section.attr("id");
      const sectionLink = $section.attr("data-section");
      const config = {
        trigger: $section,
        start: state.isMobile ? "top 80%" : "left center",
        end: state.isMobile ? "bottom 0%" : "right center",
        scrub: true,
        onEnter: () => {
          if (!state.isMobile) {
            if (sectionIndex === 0) {
              $(".btn.cc-nav").addClass("start");
            }
            animateNavBackground(sectionLink);
          }
        },
        onEnterBack: () => {
          if (!state.isMobile) {
            if (sectionIndex === 0) {
              $(".btn.cc-nav").addClass("start");
            }
            animateNavBackground(sectionLink);
          }
        },
        onLeave: () => {
          if (!state.isMobile) {
            if (sectionIndex === 0) {
              $(".btn.cc-nav").removeClass("start");
            }
          }
        }
      };
      if (!state.isMobile) {
        config.scroller = state.$content[0];
        config.horizontal = true;
      }
      const tl = gsap.timeline({
        scrollTrigger: config
      });
      if (sectionIndex === 0) {
        const tl0 = gsap.timeline({
          scrollTrigger: {
            ...config,
            start: state.isMobile ? "top top" : "left left",
            end: state.isMobile ? "bottom top" : "right left"
          }
        });
        tl0.to(".hero-bg_box", {
          opacity: 0
        });
      }
      if (sectionIndex === 1) {
        const tl1 = gsap.timeline({
          scrollTrigger: {
            ...config,
            start: state.isMobile ? "top top" : "left left",
            end: state.isMobile ? "bottom top" : "right left"
          }
        });
        tl1.from(".bottom-wave-box", {
          opacity: 0
        });
      }
    });
    $("[data-animation]").each(function() {
      const $el = $(this);
      const isHero = $el.closest(".section.cc-hero").length;
      const config = {
        trigger: $el,
        start: state.isMobile ? "top 80%" : "left 80%",
        scrub: true,
        onEnter: function() {
          if (!$el.attr("animated") && !isHero) {
            $el.attr("animated", "true");
            gsapAnimate($el);
          }
        }
      };
      if (!state.isMobile) {
        config.scroller = state.$content[0];
        config.horizontal = true;
      }
      const tl = gsap.timeline({
        scrollTrigger: config
      });
    });
  }
  function runPreloader() {
    let preloader = $(".page-load");
    let preloaderParts = $(".page-load_item");
    let preLoaderBgTop = $(".page-load_bg.cc-top");
    let preLoaderBgBottom = $(".page-load_bg.cc-bottom");
    let tl = gsap.timeline({
      onStart: () => {
        state.lenis.stop();
      },
      onComplete: () => {
        state.lenis.start();
        let heroItems = $(".section.cc-hero").find("[data-animation]");
        heroItems.each(function() {
          gsapAnimate($(this));
        });
      }
    });
    preloaderParts.each(function(index) {
      if (index === 0) {
        tl.fromTo(
          $(this),
          {
            yPercent: 50,
            opacity: 0
          },
          {
            yPercent: 0,
            opacity: 1,
            delay: 1,
            duration: 0.5,
            display: "block"
          }
        );
        tl.to(
          preLoaderBgTop,
          {
            xPercent: -5,
            rotate: -3
          },
          "<"
        );
        tl.to(
          preLoaderBgBottom,
          {
            xPercent: 5,
            rotate: -3
          },
          "<"
        );
        tl.to($(this), {
          opacity: 0,
          delay: 1.5
        });
      }
      if (index === 1) {
        tl.fromTo(
          $(this),
          {
            opacity: 0,
            scale: 0.8
          },
          {
            display: "block",
            opacity: 1,
            scale: 1
          }
        );
        tl.to(
          preLoaderBgTop,
          {
            xPercent: -10,
            rotate: -6
          },
          "<"
        );
        tl.to(
          preLoaderBgBottom,
          {
            xPercent: 10,
            rotate: -6
          },
          "<"
        );
        tl.to($(this), {
          opacity: 0,
          delay: 0.7
        });
      }
      if (index === 2) {
        tl.to($(this), {
          display: "block"
        });
        tl.fromTo(
          $(this).find("span"),
          {
            yPercent: 50,
            opacity: 0
          },
          {
            yPercent: 0,
            opacity: 1
          }
        );
        tl.to(
          preLoaderBgTop,
          {
            xPercent: -15,
            rotate: -9
          },
          "<"
        );
        tl.to(
          preLoaderBgBottom,
          {
            xPercent: 15,
            rotate: -9
          },
          "<"
        );
        tl.to(
          $(this).find("span"),
          {
            yPercent: 0,
            opacity: 0,
            stagger: {
              each: 0.1
            },
            delay: 3
          },
          "<"
        );
        tl.to(
          preLoaderBgTop,
          {
            yPercent: -100
          },
          "<"
        );
        tl.to(
          preLoaderBgBottom,
          {
            xPercent: 100
          },
          "<"
        );
        tl.to($(this), {
          opacity: 0
        });
      }
    });
    tl.to(preloader, { opacity: 0, display: "none" }, "<");
  }
  function gsapSet() {
    if (!state.isMobile) {
      gsap.set($("[data-animation]").not(".nav"), { visibility: "hidden" });
    }
  }
  function gsapAnimate(element) {
    const $el = $(element);
    const tl = gsap.timeline();
    if (state.isMobile)
      return;
    if ($el.is('[data-animation="heading"]')) {
      const type = $el.attr("data-split-type") || "word";
      const typeSplit = new SplitType($el, {
        types: "words, chars",
        tagName: "span"
      });
      tl.from($el.find(`.${type}`), {
        y: "2rem",
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1
      });
      tl.to(
        [$el, $el.find(`.${type}`)],
        {
          visibility: "visible"
        },
        "<"
      );
    }
    if ($el.is('[data-animation="item"]')) {
      const stagger = $el.attr("data-stagger") || 0.2;
      tl.fromTo(
        $el,
        { y: "2rem", opacity: 0 },
        { y: "0rem", opacity: 1, visibility: "visible", stagger }
      );
    }
    if ($el.is('[data-animation="stagger"]')) {
      const staggerItems = $el.find('[data-animation="stagger-item"]');
      const stagger = $el.attr("data-stagger") || 0.1;
      gsap.set([$el, staggerItems], {
        visibility: "visible",
        immediateRender: true
      });
      tl.from(staggerItems, {
        y: "1rem",
        opacity: 0,
        stagger,
        clearProps: "visibility",
        overwrite: "auto",
        force3D: true
      });
    }
    if ($el.is('[data-animation="writer"]')) {
      const scoreText = $el.text();
      $el.text("");
      tl.to($elt, {
        duration: 2,
        text: scoreText,
        ease: "none"
      });
    }
    return tl;
  }
  function cleanupScrolling() {
    $(".nav").removeClass("active");
    ScrollTrigger.getAll().forEach((st) => st.kill());
    if (state.lenis)
      state.lenis.destroy();
  }
  var navbar = $(".nav");
  var currentLink;
  function animateNavBackground(targetLinkText) {
    if (currentLink === targetLinkText)
      return;
    currentLink = targetLinkText;
    const navLinks = document.querySelectorAll(".nav_menu-link");
    const navContainer = document.querySelector(".nav_menu-inner");
    const navBg = document.querySelector(".nav_menu-bg");
    const targetLink = Array.from(navLinks).find(
      (link) => link.textContent.trim().toLowerCase() === targetLinkText.toLowerCase() || link.id.toLowerCase() === targetLinkText.toLowerCase()
    );
    if (!targetLink || !navContainer || targetLinkText === "none") {
      $(".nav_menu-bg").css("opacity", "0");
      navLinks.forEach((link) => link.classList.remove("active"));
      return;
    }
    if (!navBg) {
      console.warn("Nav background element not found");
      return;
    }
    const containerRect = navContainer.getBoundingClientRect();
    const linkRect = targetLink.getBoundingClientRect();
    const relativeLeft = linkRect.left - containerRect.left;
    gsap.to(navBg, {
      x: relativeLeft,
      opacity: 1,
      width: linkRect.width,
      height: linkRect.height,
      duration: 0.4,
      ease: "power2.out",
      onStart: () => {
        navLinks.forEach((link) => link.classList.remove("active"));
        targetLink.classList.add("active");
      }
    });
  }
  window.onscroll = () => {
    if (navbar.length && $(window).width() < 992) {
      if (window.scrollY > $(navbar).height() / 2) {
        if (!navbar.hasClass("active")) {
          navbar.addClass("active");
        }
      } else {
        if (navbar.hasClass("active")) {
          navbar.removeClass("active");
        }
      }
    }
  };
  function createObserver(targetSelector, callback) {
    const targetNodes = $(targetSelector);
    targetNodes.each(function() {
      const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
          if (mutation.type === "attributes" && mutation.attributeName === "class") {
            callback(mutation.target);
          }
        });
      });
      observer.observe(this, { attributes: true, attributeFilter: ["class"] });
    });
  }
  function menuCallback() {
    if ($(".w-nav-button").hasClass("w--open")) {
      navbar.addClass("open");
    } else {
      navbar.removeClass("open");
    }
  }
  createObserver(".w-nav-button", menuCallback);
  $(".nav_menu-link").on("click", function(e) {
    e.preventDefault();
    const linkId = $(this).attr("id");
    const targetSection = $(`.section_part[data-section="${linkId}"]`);
    if (targetSection.length && state.lenis) {
      const pinSpacer = targetSection.parent(".pin-spacer");
      let scrollTarget;
      if (pinSpacer.length) {
        scrollTarget = pinSpacer.offset().top;
      } else {
        scrollTarget = targetSection.offset().left;
      }
      state.lenis.scrollTo(scrollTarget, {
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        lerp: 0.1
      });
    }
  });
  $("[hero-scroll]").on("click", function() {
    state.lenis.scrollTo($(`section`).eq(1)[0], {
      duration: 1,
      // Duration in seconds (default is 1)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // Smooth easing function
      lock: true,
      // Prevents user scroll during animation
      lerp: 0.1
      // Lower number = smoother scrolling (default is 0.1)
    });
  });
  $(".nav_brand").on("click", function() {
    state.lenis.scrollTo($(`section`).eq(0)[0], {
      duration: 1,
      // Duration in seconds (default is 1)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // Smooth easing function
      lock: true,
      // Prevents user scroll during animation
      lerp: 0.1
      // Lower number = smoother scrolling (default is 0.1)
    });
  });
  function initModalBasic() {
    const modalGroup = document.querySelector("[data-modal-group-status]");
    const modals = document.querySelectorAll("[data-modal-name]");
    const modalTargets = document.querySelectorAll("[data-modal-target]");
    modalTargets.forEach((modalTarget) => {
      modalTarget.addEventListener("click", function() {
        const modalTargetName = this.getAttribute("data-modal-target");
        modalTargets.forEach((target) => target.setAttribute("data-modal-status", "not-active"));
        modals.forEach((modal) => modal.setAttribute("data-modal-status", "not-active"));
        if (modalTargetName === "team") {
          let teamCard = $(this).closest(".team-list-item");
          let currentIndex = teamCard.parent().index();
          let teamName = teamCard.find("[data-team-name]").text();
          let teamRole = teamCard.find("[data-team-role]").text();
          $("[data-target-name]").text(teamName);
          $("[data-target-role]").text(teamRole);
          $(".team_visual .w-dyn-item").hide();
          $(".team_visual .w-dyn-item").eq(currentIndex).fadeIn();
          $(".team_role-rich-item").hide();
          $(".team_role-rich-item").eq(currentIndex).show();
        }
        document.querySelector(`[data-modal-target="${modalTargetName}"]`).setAttribute("data-modal-status", "active");
        document.querySelector(`[data-modal-name="${modalTargetName}"]`).setAttribute("data-modal-status", "active");
        if (modalGroup) {
          modalGroup.setAttribute("data-modal-group-status", "active");
        }
        state.lenis.stop();
      });
    });
    document.querySelectorAll("[data-modal-close]").forEach((closeBtn) => {
      closeBtn.addEventListener("click", closeAllModals);
    });
    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape") {
        closeAllModals();
      }
    });
    function closeAllModals() {
      modalTargets.forEach((target) => target.setAttribute("data-modal-status", "not-active"));
      if (modalGroup) {
        modalGroup.setAttribute("data-modal-group-status", "not-active");
      }
      state.lenis.start();
    }
  }
  $(document).ready(function() {
    initScrolling();
    gsapSet();
    runPreloader();
    initModalBasic();
    let resizeTimer;
    $(window).on("resize", function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const newIsMobile = $(window).width() <= 991;
        if (newIsMobile !== state.isMobile) {
          initScrolling();
        }
      }, 250);
    });
    $(window).on("beforeunload", cleanupScrolling);
  });
  var swiperInstances = [
    [
      ".section.cc-about",
      ".about-wrap",
      "about-slider",
      {
        slidesPerView: "auto",
        spaceBetween: 32
      },
      "mobile"
    ],
    [
      ".section.cc-team",
      ".team-list-wrap",
      "team-slider",
      {
        slidesPerView: "auto",
        spaceBetween: 16
      },
      "mobile"
    ],
    [
      ".section.cc-exp",
      ".experience_slider",
      "exp-slider",
      {
        slidesPerView: "auto",
        spaceBetween: 32
      },
      "mobile"
    ],
    [
      ".section.cc-exp-cards",
      ".exp-cards_wrap",
      "exp-cards-slider",
      {
        slidesPerView: "auto",
        spaceBetween: 32
      },
      "mobile"
    ],
    [
      ".section.cc-ceo",
      ".ceo_slider",
      "ceo-slider",
      {
        slidesPerView: "auto",
        spaceBetween: 16
      },
      "mobile"
    ]
  ];
  initSwipers(swiperInstances);
  var initMobilePinning = () => {
    if (window.innerWidth >= 992)
      return;
    const sections = $(".section_part");
    sections.each((index, section) => {
      if (index === sections.length - 1)
        return;
      const nextSection = sections[index + 1];
      const currentHeight = $(section).outerHeight();
      const isShortSection = currentHeight <= window.innerHeight;
      $(section).css({ position: "relative", zIndex: 1 });
      $(nextSection).css({ position: "relative", zIndex: 2 });
      ScrollTrigger.create({
        trigger: section,
        start: isShortSection ? "top top" : "bottom bottom",
        endTrigger: nextSection,
        end: "top top",
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
        onEnter: () => {
          $(section).css({ zIndex: 1 });
          $(nextSection).css({ zIndex: 2 });
        },
        onEnterBack: () => {
          $(section).css({ zIndex: 1 });
          $(nextSection).css({ zIndex: 2 });
        },
        onLeave: () => {
          $(section).css({ zIndex: 1 });
          $(nextSection).css({ zIndex: 2 });
        },
        onLeaveBack: () => {
          $(section).css({ zIndex: 1 });
          $(nextSection).css({ zIndex: 2 });
        }
      });
    });
  };
  $(document).ready(() => {
    initMobilePinning();
    let resizeTimeout;
    let prevWidth = $(window).width();
    $(window).on("resize", () => {
      const currentWidth = $(window).width();
      if (currentWidth !== prevWidth) {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          ScrollTrigger.getAll().forEach((st) => {
            if (st.vars.pin)
              st.kill();
          });
          initMobilePinning();
          prevWidth = currentWidth;
        }, 250);
      }
    });
  });
})();
//# sourceMappingURL=index.js.map
