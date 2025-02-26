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

  // src/snap-test.js
  (function() {
    if (document.readyState !== "loading") {
      init();
    } else {
      document.addEventListener("DOMContentLoaded", init);
    }
  })();
  function init() {
    const scrollContainer = document.querySelector(".page-main");
    const scrollSnap = new ScrollSnap();
    scrollContainer.addEventListener("go_to_section", (e) => {
      console.log("going to section", e.detail);
    });
  }
})();
//# sourceMappingURL=snap-test.js.map
