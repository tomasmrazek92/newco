"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

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
  var runSwipers = (swiperInstances) => {
    swiperInstances.forEach((instance) => {
      createResponsiveSwiper(...instance);
    });
  };
  var initSwipers = (swiperInstances, swipersState) => {
    runSwipers(swiperInstances);
    window.addEventListener("resize", function() {
      if (window.innerWidth !== windowWidth) {
        windowWidth = window.innerWidth;
        runSwipers(swiperInstances);
      }
    });
  };

  // src/Carousels.js
  var Carousels = class {
    constructor() {
      const swiperInstances = [
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
    }
  };

  // src/MobilePinning.js
  var MobilePinning = class {
    sections;
    scrollContainer;
    constructor(scrollContainer) {
      this.sections = $(".section_part");
      this.scrollContainer = scrollContainer;
    }
    start() {
      this.scrollContainer.style.transform = "none";
      this.sections.each((index, section) => {
        if (index === this.sections.length - 1)
          return;
        const nextSection = this.sections[index + 1];
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
    }
    kill() {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.pin)
          st.kill();
      });
    }
  };

  // src/Modals.js
  var Modals = class {
    modalGroup;
    modals;
    modalTargets;
    constructor() {
      this.modalGroup = document.querySelector("[data-modal-group-status]");
      this.modals = document.querySelectorAll("[data-modal-name]");
      this.modalTargets = document.querySelectorAll("[data-modal-target]");
      this.modalTargets.forEach((modalTarget) => {
        modalTarget.addEventListener("click", this.openModal.bind(this));
      });
      document.querySelectorAll("[data-modal-close]").forEach((closeBtn) => {
        closeBtn.addEventListener("click", this.closeAllModals.bind(this));
      });
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          this.closeAllModals();
        }
      });
    }
    openModal(e) {
      const modalTarget = e.currentTarget;
      const modalTargetName = modalTarget.getAttribute("data-modal-target");
      this.modalTargets.forEach((target) => target.setAttribute("data-modal-status", "not-active"));
      this.modals.forEach((modal) => modal.setAttribute("data-modal-status", "not-active"));
      if (modalTargetName === "team") {
        let teamCard = $(modalTarget).closest(".team-list-item");
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
      if (this.modalGroup) {
        this.modalGroup.setAttribute("data-modal-group-status", "active");
      }
      window.dispatchEvent(new CustomEvent("modal_open"));
    }
    // Function to close all modals
    closeAllModals() {
      this.modalTargets.forEach((target) => target.setAttribute("data-modal-status", "not-active"));
      if (this.modalGroup) {
        this.modalGroup.setAttribute("data-modal-group-status", "not-active");
      }
      window.dispatchEvent(new CustomEvent("modal_closed"));
    }
  };

  // src/Nav.js
  var Nav = class {
    _isMobile;
    navbar;
    wNavBtn;
    navLinks;
    onScrollBound;
    _currentSection;
    navContainer;
    navBg;
    constructor() {
      this.navbar = $(".nav");
      this.wNavBtn = $(".w-nav-button");
      this.navLinks = $(".nav_menu-link");
      this.navContainer = document.querySelector(".nav_menu-inner");
      this.navBg = document.querySelector(".nav_menu-bg");
      this.contactBtns = document.querySelectorAll(".btn.cc-nav");
      this.onScrollBound = this.onScroll.bind(this);
      this.navLinks.on("click", (e) => {
        e.preventDefault();
        const linkId = $(e.currentTarget).attr("id");
        if (this.isMobile) {
          const targetSection = $(`.section_part[data-section="${linkId}"]`);
          if (targetSection.length) {
            const pinSpacer = targetSection.parent(".pin-spacer");
            let scrollTarget;
            if (pinSpacer.length) {
              scrollTarget = pinSpacer.offset().top;
            } else {
              scrollTarget = targetSection.offset().top;
            }
            gsap.to(window, { scrollTo: { y: scrollTarget }, duration: 2, ease: "power2.out" });
          }
        }
        window.dispatchEvent(new CustomEvent("clicked_nav", { detail: linkId }));
      });
      $(".nav_brand").on("click", () => {
        window.dispatchEvent(new CustomEvent("clicked_nav", { detail: "none" }));
      });
      this.createObserver(this.wNavBtn, this.menuCallback.bind(this));
    }
    get isMobile() {
      return this._isMobile;
    }
    set isMobile(val) {
      if (val !== this._isMobile) {
        if (val) {
          window.addEventListener("scroll", this.onScrollBound);
        } else {
          window.removeEventListener("scroll", this.onScrollBound);
        }
      }
      this._isMobile = val;
    }
    get currentSection() {
      return this._currentSection;
    }
    set currentSection(section) {
      this._currentSection = section;
      const targetLink = this.navLinks.filter(`#${section}`);
      this.navLinks.removeClass("active");
      targetLink.addClass("active");
      this.animateNavBackground(targetLink[0]);
      this.updateContactBtn(section);
    }
    createObserver(targetNodes, callback) {
      targetNodes.each((i, node) => {
        const observer = new MutationObserver((mutationsList) => {
          mutationsList.forEach((mutation) => {
            if (mutation.type === "attributes" && mutation.attributeName === "class") {
              callback(mutation.target);
            }
          });
        });
        observer.observe(node, { attributes: true, attributeFilter: ["class"] });
      });
    }
    updateContactBtn(section) {
      if (!this.isMobile && section === "none") {
        this.contactBtns.forEach((elm) => elm.classList.add("start"));
      } else {
        this.contactBtns.forEach((elm) => elm.classList.remove("start"));
      }
    }
    animateNavBackground(targetLink) {
      if (!targetLink) {
        this.navBg.style.opacity = "0";
        return;
      }
      const containerRect = this.navContainer.getBoundingClientRect();
      const linkRect = targetLink.getBoundingClientRect();
      const relativeLeft = linkRect.left - containerRect.left;
      gsap.to(this.navBg, {
        x: relativeLeft,
        opacity: 1,
        width: linkRect.width,
        height: linkRect.height,
        duration: 0.4,
        ease: "power2.out"
      });
    }
    menuCallback() {
      if (this.wNavBtn.hasClass("w--open")) {
        this.navbar.addClass("open");
      } else {
        this.navbar.removeClass("open");
      }
    }
    onScroll() {
      if (this.navbar.length && this.isMobile) {
        if (window.scrollY > this.navbar.height() / 2) {
          if (!this.navbar.hasClass("active")) {
            this.navbar.addClass("active");
          }
        } else {
          if (this.navbar.hasClass("active")) {
            this.navbar.removeClass("active");
          }
        }
      }
    }
  };

  // src/utils/gsapAnimate.js
  function gsapAnimate(element, isMobile) {
    const $el = $(element);
    const tl = gsap.timeline();
    if (isMobile)
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

  // src/Preloader.js
  var Preloader = class {
    SEEN_PRELOADED_KEY = "seen_preloader";
    isMobile = false;
    skip;
    constructor() {
      this.skip = window.sessionStorage.getItem(this.SEEN_PRELOADED_KEY) === "true";
      window.sessionStorage.setItem(this.SEEN_PRELOADED_KEY, "true");
    }
    start() {
      let preloader = $(".page-load");
      let preloaderParts = $(".page-load_item");
      let preLoaderBgTop = $(".page-load_bg.cc-top");
      let preLoaderBgBottom = $(".page-load_bg.cc-bottom");
      let tl = gsap.timeline({
        onComplete: () => {
          let heroItems = $(".section.cc-hero").find("[data-animation]");
          heroItems.each((i, elm) => {
            gsapAnimate($(elm), this.isMobile);
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
      if (this.skip) {
        tl.progress(1);
      }
    }
  };

  // src/ScrollSnap.ts
  var _ScrollSnap = class {
    // ==============================================================
    // #endregion Properties
    // #region Lifecycle
    // ==============================================================
    /**
     *
     * @param container Container which "scrolls". It doesn't actually scroll though. Rather its position gets adjusted.
     * @param sections The blades within that determine where the stop points are.
     */
    constructor(container, sections) {
      this.container = container;
      this.sections = sections;
      gsap.registerPlugin(ScrollToPlugin);
    }
    /** The minimum strength/speed someone has to scroll in order to trigger the effect. */
    // State
    isAnimating = false;
    isScrollingWithinSection = false;
    currentSectionIdx = 0;
    /** TODO: in the future we might want to have deep-links to other sections which means we would need to calculate what the actual starting section is. */
    prevDir = null;
    prevScrollStrength = 0;
    targetX = 0;
    // Listeners
    onScrollBound = this.onScroll.bind(this);
    onMouseWheelBound = this.onMouseWheel.bind(this);
    onKeyDownBound = this.onKeyDown.bind(this);
    onResizeBound = this.onResize.bind(this);
    // ==============================================================
    // #endregion Lifecycle
    // #region Public methods
    // ==============================================================
    start() {
      window.addEventListener("scroll", this.onScrollBound);
      window.addEventListener("wheel", this.onMouseWheelBound, { passive: false });
      window.addEventListener("keydown", this.onKeyDownBound, { passive: false });
      window.addEventListener("resize", this.onResizeBound);
    }
    kill() {
      window.removeEventListener("scroll", this.onScrollBound);
      window.removeEventListener("wheel", this.onMouseWheelBound);
      window.removeEventListener("keydown", this.onKeyDownBound);
      window.removeEventListener("resize", this.onResizeBound);
      gsap.killTweensOf(window);
    }
    /**
     * Animate to a target section
     * @param targetSectionIdx index of `this.sections` to animate to
     * @param instant Defaults to false. Whether or not you want to ignore the animation and jump straight to the end state.
     * @param fromScrollEvent Should be ignored/undefined when calling this method externally
     */
    gotoIdx(targetSectionIdx, instant = false, fromScrollEvent = false) {
      if (this.isAnimating) {
        return;
      }
      const dir = this.currentSectionIdx < targetSectionIdx ? 1 /* RIGHT */ : 0 /* LEFT */;
      this.currentSectionIdx = targetSectionIdx;
      this.isAnimating = !instant;
      this.isScrollingWithinSection = false;
      const targetSection = this.sections[this.currentSectionIdx];
      this.targetX = targetSection.offsetLeft;
      if (fromScrollEvent && dir === 0 /* LEFT */ && targetSection.offsetWidth > window.innerWidth) {
        this.targetX = targetSection.offsetLeft + targetSection.offsetWidth - window.innerWidth;
      }
      gsap.to(window, {
        scrollTo: { x: this.targetX, y: 0 },
        duration: instant ? 0 : _ScrollSnap.SCROLL_DUR,
        ease: _ScrollSnap.SCROLL_EASE_BETWEEN_SECTIONS,
        onComplete: () => {
          this.isAnimating = false;
        }
      });
      window.dispatchEvent(new CustomEvent("go_to_section", { detail: targetSectionIdx }));
    }
    // ==============================================================
    // #endregion End Public methods
    // #region Private methods
    // ==============================================================
    /**
     * We're within a section that's wider than the viewport. Smooth the scrolling within it.
     */
    scrollWithinSection(e) {
      if (this.isAnimating) {
        return;
      }
      const scrollStrength = Math.abs(e.deltaY) > 0 ? e.deltaY : e.deltaX;
      const dir = scrollStrength > 0 ? 1 /* RIGHT */ : 0 /* LEFT */;
      if (!this.isScrollingWithinSection && Math.abs(scrollStrength) < this.prevScrollStrength && dir === this.prevDir) {
        return true;
      }
      this.targetX += scrollStrength * _ScrollSnap.SCROLL_STRENGTH_MULTIPLIER;
      const currentSection = this.sections[this.currentSectionIdx];
      const minX = currentSection.offsetLeft;
      const maxX = currentSection.offsetLeft + currentSection.offsetWidth - window.innerWidth;
      this.targetX = this.clamp(minX, this.targetX, maxX);
      if (!this.isScrollingWithinSection) {
        this.isScrollingWithinSection = true;
        this.smoothScrollWithinSection();
      }
      const currentX = window.scrollX;
      const buffer = 30;
      return dir === 0 /* LEFT */ && currentX > minX + buffer || dir === 1 /* RIGHT */ && currentX < maxX - buffer;
    }
    /**
     * Ease between a current value and a target value
     */
    smoothScrollWithinSection() {
      const currentX = window.scrollX;
      const deltaX = this.targetX - currentX;
      const EASING = _ScrollSnap.SCROLL_EASE_WITHIN_SECTION;
      gsap.set(window, { scrollTo: { x: currentX + deltaX * EASING, y: 0 } });
      if (this.isScrollingWithinSection) {
        requestAnimationFrame(this.smoothScrollWithinSection.bind(this));
      }
    }
    /**
     * Go left or right. Calculate which section index that should be.
     * @param dir
     */
    go(dir) {
      this.prevDir = dir;
      let targetSectionIdx = this.currentSectionIdx + (dir === 1 /* RIGHT */ ? 1 : -1);
      targetSectionIdx = this.clamp(0, targetSectionIdx, this.sections.length - 1);
      if (targetSectionIdx !== this.currentSectionIdx) {
        this.gotoIdx(targetSectionIdx, false, true);
      }
    }
    /**
     * Simple utility to clamp a value between a min and max.
     * @param min Lowest possible value
     * @param val Current value
     * @param max Maximum possible value
     */
    clamp(min, val, max) {
      return Math.min(Math.max(val, min), max);
    }
    // ==============================================================
    // #endregion End Private methods
    // #region Event Listeners
    // ==============================================================
    onScroll(e) {
    }
    /**
     * On mouse wheel interaction, figure out which way we're scrolling.
     */
    onMouseWheel(e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      const scrollStrength = Math.abs(e.deltaY) > 0 ? e.deltaY : e.deltaX;
      if (Math.abs(scrollStrength) < _ScrollSnap.MIN_SCROLL_STRENGTH) {
        this.prevScrollStrength = 0;
        return;
      }
      const currentSection = this.sections[this.currentSectionIdx];
      if (currentSection.offsetWidth > window.innerWidth) {
        const withinSectionBounds = this.scrollWithinSection(e);
        if (withinSectionBounds) {
          return;
        }
      }
      const dir = scrollStrength > 0 ? 1 /* RIGHT */ : 0 /* LEFT */;
      if (Math.abs(scrollStrength) > this.prevScrollStrength || dir !== this.prevDir) {
        this.go(dir);
      }
      this.prevScrollStrength = Math.abs(scrollStrength);
    }
    /**
     * On keydown. So the user can still navigate via keyboard.
     */
    onKeyDown(e) {
      const tagName = e.target.tagName.toLowerCase();
      if (tagName === "input" || tagName === "textarea" || tagName === "select" || e.target.isContentEditable) {
        return;
      }
      let dir;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        dir = 1 /* RIGHT */;
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        dir = 0 /* LEFT */;
      } else {
        return;
      }
      const currentSection = this.sections[this.currentSectionIdx];
      if (currentSection.offsetWidth > window.innerWidth) {
        const scrollAmt = 300;
        const deltaY = dir === 1 /* RIGHT */ ? scrollAmt : -scrollAmt;
        const withinSectionBounds = this.scrollWithinSection(new WheelEvent("wheel", { deltaY }));
        if (withinSectionBounds) {
          return;
        }
      }
      this.go(dir);
    }
    /**
     * Window resize event handler
     */
    onResize() {
      const targetSection = this.sections[this.currentSectionIdx];
      this.targetX = targetSection.offsetLeft;
      gsap.set(window, {
        scrollTo: { x: this.targetX, y: 0 }
      });
      this.isAnimating = false;
    }
    // ==============================================================
    // #endregion End Event Listeners
  };
  var ScrollSnap = _ScrollSnap;
  // #region Properties
  // ==============================================================
  // Config
  __publicField(ScrollSnap, "SCROLL_DUR", 0.6);
  /** Speed at which scroll animation happens (in seconds) */
  __publicField(ScrollSnap, "SCROLL_EASE_BETWEEN_SECTIONS", "power2.out");
  /** Easing method of scroll animation from one section to another. From GSAP. */
  __publicField(ScrollSnap, "SCROLL_EASE_WITHIN_SECTION", 0.1);
  /** The easing strength when scrolling within a long section. */
  __publicField(ScrollSnap, "SCROLL_STRENGTH_MULTIPLIER", 0.6);
  /** Amount to strengthen or dampen the scrollwheel strength by when scrolling within a section. */
  __publicField(ScrollSnap, "MIN_SCROLL_STRENGTH", 10);

  // src/Animations.js
  var Sections = class {
    currentLink;
    isMobile;
    $content;
    intObs;
    constructor() {
      this.$content = $(".page-main");
      this.intObs = new IntersectionObserver(this.onIntersection.bind(this), { threshold: 0.2 });
    }
    init() {
      $("[data-animation]").each((i, elm) => {
        const $el = $(elm);
        const isHero = $el.closest(".section.cc-hero").length;
        if (!isHero) {
          this.intObs.observe(elm);
        }
      });
    }
    onIntersection(entries, observer) {
      entries.forEach((entry) => {
        const elm = entry.target;
        if (entry.isIntersecting && !elm.hasAttribute("animated")) {
          elm.setAttribute("animated", "");
          observer.unobserve(elm);
          gsapAnimate(elm, this.isMobile);
        }
      });
    }
  };

  // src/index.js
  var Main = class {
    isMobile;
    scrollContainer;
    scrollSections;
    scrollSnap;
    mobilePinning;
    preloader;
    carousels;
    animations;
    modals;
    mql;
    nav;
    constructor() {
      this.scrollContainer = document.querySelector(".page-main");
      this.scrollSections = document.querySelectorAll(".section");
      this.scrollSnap = new ScrollSnap(this.scrollContainer, this.scrollSections);
      this.mobilePinning = new MobilePinning(this.scrollContainer);
      this.preloader = new Preloader();
      this.carousels = new Carousels();
      this.animations = new Sections();
      this.modals = new Modals();
      this.nav = new Nav();
      this.initBreakpointListener();
      if (!this.isMobile) {
        gsap.set($("[data-animation]").not(".nav"), { visibility: "hidden" });
      }
      this.preloader.start();
      this.animations.init();
      window.addEventListener("go_to_section", this.onScrollToSection.bind(this));
      window.addEventListener("modal_open", this.onModalOpen.bind(this));
      window.addEventListener("modal_closed", this.onModalClosed.bind(this));
      window.addEventListener("clicked_nav", this.onClickedNav.bind(this));
    }
    initBreakpointListener() {
      this.mql = window.matchMedia("(min-width: 992px)");
      this.mql.addEventListener("change", this.onChangeBreakpoint.bind(this));
      this.onChangeBreakpoint(this.mql);
    }
    onModalOpen() {
      if (this.isMobile) {
        this.mobilePinning.kill();
      } else {
        this.scrollSnap.kill();
      }
    }
    onModalClosed() {
      if (this.isMobile) {
        this.mobilePinning.start();
      } else {
        this.scrollSnap.start();
      }
    }
    onClickedNav(e) {
      const sectionId = e.detail;
      if (!this.isMobile) {
        const section = document.querySelector(`[data-section=${sectionId}]`).querySelectorAll(".section")[0];
        const sectionIdx = [...this.scrollSections].findIndex((s) => s === section);
        this.scrollSnap.gotoIdx(sectionIdx, true);
      }
    }
    onScrollToSection(e) {
      const currentSection = this.scrollSections[e.detail];
      const parentSection = currentSection.closest(".section_part");
      this.nav.currentSection = parentSection.dataset.section;
    }
    onChangeBreakpoint(e) {
      this.isMobile = !e.matches;
      this.preloader.isMobile = this.isMobile;
      this.animations.isMobile = this.isMobile;
      this.nav.isMobile = this.isMobile;
      if (this.isMobile) {
        gsap.set($("[data-animation]").not(".nav"), { visibility: "visible" });
      }
      if (this.isMobile) {
        this.scrollSnap.kill();
        this.mobilePinning.start();
      } else {
        this.scrollSnap.start();
        this.mobilePinning.kill();
      }
    }
  };
  (function() {
    if (document.readyState !== "loading") {
      init();
    } else {
      document.addEventListener("DOMContentLoaded", init);
    }
    function init() {
      new Main();
    }
  })();
})();
//# sourceMappingURL=index.js.map
