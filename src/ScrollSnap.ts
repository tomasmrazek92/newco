// import { gsap } from 'gsap'; // "Dynamic require of gsap is not supported"?? Maybe because it's also being included separately via a <script>?

enum Dir {
  LEFT,
  RIGHT,
}

/**
 * Controls scroll-snapping of page sections based on mousewheel/trackpad and keypad buttons.
 * When a section is as wide as the viewport, scrolling will trigger a full scroll event over to the prev/next section.
 * If the current section is wider than the viewport, scrolling will smoothly scroll within the bounds of that section.
 *
 * Dispatches the following event on the "container" element: 'go_to_section' with the detail property being the index number of the current section.
 *
 * @example
 * const scrollContainer = document.querySelector('.page-main');
 * scrollContainer.addEventListener('go_to_section', (e) => {
 *  // e.detail == the index number of the current section
 *  console.log('going to section', e.detail);
 * })
 *
 * Can control which section to animate to externally via the `gotoIdx(targetSectionIdx)` method.
 *
 * @example
 * scrollSnap.gotoIdx(0);
 */
export default class ScrollSnap {
  // Config
  static readonly SCROLL_DUR = 0.4; /** Speed at which scroll animation happens (in seconds) */
  static readonly SCROLL_EASE_BETWEEN_SECTIONS: gsap.EaseString =
    'power2.out'; /** Easing method of scroll animation from one section to another. From GSAP. */
  static readonly SCROLL_EASE_WITHIN_SECTION = 0.1; /** The easing strength when scrolling within a long section. */
  static readonly SCROLL_STRENGTH_MULTIPLIER = 0.6; /** Amount to strengthen or dampen the scrollwheel strength by when scrolling within a section. */
  static readonly MIN_SCROLL_STRENGTH = 10; /** The minimum strength/speed someone has to scroll in order to trigger the effect. */

  // DOM elements
  private container: HTMLElement; /** Container which "scrolls". It doesn't actually scroll though. Rather its position gets adjusted. */
  private sections: NodeListOf<HTMLElement>; /** The blades within that determine where the stop points are. */

  // State
  private isAnimating = false;
  private isScrollingWithinSection = false;
  private currentSectionIdx = 0; /** TODO: in the future we might want to have deep-links to other sections which means we would need to calculate what the actual starting section is. */
  private prevDir: Dir | null = null;
  private prevScrollStrength = 0;
  private targetX = 0;

  // Listeners
  private onMouseWheelBound = this.onMouseWheel.bind(this);
  private onKeyDownBound = this.onKeyDown.bind(this);
  private onChangeBreakpointBound = this.onChangeBreakpoint.bind(this);
  private onResizeBound = this.onResize.bind(this);

  // Lifecycle
  // ==============================================================
  constructor() {
    this.container = document.querySelector('.page-main') as HTMLElement;
    this.sections = document.querySelectorAll('.section-snap');

    const mql = window.matchMedia('(min-width: 992px)');
    mql.addEventListener('change', this.onChangeBreakpointBound);

    if (mql.matches) {
      this.init();
    }
  }

  private init() {
    window.addEventListener('wheel', this.onMouseWheelBound);
    window.addEventListener('keydown', this.onKeyDownBound);
    window.addEventListener('resize', this.onResizeBound);
  }

  private kill() {
    window.removeEventListener('wheel', this.onMouseWheelBound);
    window.removeEventListener('keydown', this.onKeyDownBound);
    window.removeEventListener('resize', this.onResizeBound);
    gsap.killTweensOf(this.container);
    this.container.style.transform = 'none';
  }
  // ==============================================================
  // End Lifecycle

  // Public methods
  // ==============================================================
  /**
   * Animate to a target section
   * @param targetSectionIdx index of `this.sections` to animate to
   * @param instant Defaults to false. Whether or not you want to ignore the animation and jump straight to the end state.
   * @param fromScrollEvent Should be ignored/undefined when calling this method externally
   */
  public gotoIdx(targetSectionIdx: number, instant = false, fromScrollEvent = false) {
    if (this.isAnimating) {
      return;
    }

    const dir = this.currentSectionIdx < targetSectionIdx ? Dir.RIGHT : Dir.LEFT;

    this.currentSectionIdx = targetSectionIdx;
    this.isAnimating = !instant;
    this.isScrollingWithinSection = false;

    const targetSection = this.sections[this.currentSectionIdx];

    this.targetX = -targetSection.offsetLeft;

    // If we're scrolling backwards and the target section is wider than the viewport, go to the end of it
    if (fromScrollEvent && dir === Dir.LEFT && targetSection.offsetWidth > window.innerWidth) {
      this.targetX = -(targetSection.offsetLeft + targetSection.offsetWidth - window.innerWidth);
    }

    gsap.to(this.container, {
      x: this.targetX,
      duration: instant ? 0 : ScrollSnap.SCROLL_DUR,
      ease: ScrollSnap.SCROLL_EASE_BETWEEN_SECTIONS,
      onComplete: () => {
        this.isAnimating = false;
      },
    });

    this.container.dispatchEvent(new CustomEvent('go_to_section', { detail: targetSectionIdx }));
  }
  // ==============================================================
  // End Public methods

  // Private methods
  // ==============================================================
  /**
   * We're within a section that's wider than the viewport. Smooth the scrolling within it.
   */
  private scrollWithinSection(e: WheelEvent) {
    if (this.isAnimating) {
      return;
    }

    const scrollStrength = Math.abs(e.deltaY) > 0 ? e.deltaY : e.deltaX;
    const dir = scrollStrength > 0 ? Dir.RIGHT : Dir.LEFT;

    // ignore initial momentum
    if (
      !this.isScrollingWithinSection &&
      Math.abs(scrollStrength) < this.prevScrollStrength &&
      dir === this.prevDir
    ) {
      return true;
    }

    this.targetX -= scrollStrength * ScrollSnap.SCROLL_STRENGTH_MULTIPLIER;

    const currentSection = this.sections[this.currentSectionIdx];
    const minX = -(currentSection.offsetLeft + currentSection.offsetWidth - window.innerWidth);
    const maxX = -currentSection.offsetLeft;
    this.targetX = this.clamp(minX, this.targetX, maxX);

    if (!this.isScrollingWithinSection) {
      this.isScrollingWithinSection = true;
      this.smoothScrollWithinSection();
    }

    // Return whether or not we should still consider ourselves "within" the section
    const currentX = gsap.getProperty(this.container, 'x') as number;
    const buffer = 30;

    return (
      (dir === Dir.LEFT && currentX < maxX - buffer) ||
      (dir === Dir.RIGHT && currentX > minX + buffer)
    );
  }

  /**
   * Ease between a current value and a target value
   */
  private smoothScrollWithinSection() {
    const currentX = gsap.getProperty(this.container, 'x') as number;
    const deltaX = this.targetX - currentX;

    const EASING = ScrollSnap.SCROLL_EASE_WITHIN_SECTION;

    gsap.set(this.container, { x: currentX + deltaX * EASING });

    if (this.isScrollingWithinSection) {
      requestAnimationFrame(this.smoothScrollWithinSection.bind(this));
    }
  }

  /**
   * Go left or right. Calculate which section index that should be.
   * @param dir
   */
  private go(dir: Dir) {
    this.prevDir = dir;

    let targetSectionIdx = this.currentSectionIdx + (dir === Dir.RIGHT ? 1 : -1);
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
  private clamp(min: number, val: number, max: number) {
    return Math.min(Math.max(val, min), max);
  }
  // ==============================================================
  // End Private methods

  // Event Listeners
  // ==============================================================
  /**
   * On mouse wheel interaction, figure out which way we're scrolling.
   */
  private onMouseWheel(e: WheelEvent) {
    const scrollStrength = Math.abs(e.deltaY) > 0 ? e.deltaY : e.deltaX;

    // ignore micro-scrolls. Ratcheting mice sometimes throw a super tiny scroll event in the opposite direction at the end of the scroll.
    if (Math.abs(scrollStrength) < ScrollSnap.MIN_SCROLL_STRENGTH) {
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

    const dir = scrollStrength > 0 ? Dir.RIGHT : Dir.LEFT;

    /*
    Ignore momentum scrolling. i.e.: after you've scrolled, some mousewheels or trackpads will continue firing a bunch of wheel events.
    We don't want those to then trigger another scroll event. We want discrete purposeful scrolls only.
    */
    if (Math.abs(scrollStrength) > this.prevScrollStrength || dir !== this.prevDir) {
      this.go(dir);
    }

    this.prevScrollStrength = Math.abs(scrollStrength);
  }

  /**
   * On keydown. So the user can still navigate via keyboard.
   */
  private onKeyDown(e: KeyboardEvent) {
    const tagName = (e.target as HTMLElement).tagName.toLowerCase();

    // Ignore form fields and anything else that would have its own keyboard functionality
    if (
      tagName === 'input' ||
      tagName === 'textarea' ||
      tagName === 'select' ||
      (e.target as HTMLElement).isContentEditable
    ) {
      return;
    }

    let dir: Dir;

    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      dir = Dir.RIGHT;
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      dir = Dir.LEFT;
    } else {
      return;
    }

    const currentSection = this.sections[this.currentSectionIdx];
    if (currentSection.offsetWidth > window.innerWidth) {
      const scrollAmt = 300;
      const deltaY = dir === Dir.RIGHT ? scrollAmt : -scrollAmt;
      const withinSectionBounds = this.scrollWithinSection(new WheelEvent('wheel', { deltaY }));
      if (withinSectionBounds) {
        return;
      }
    }

    this.go(dir);
  }

  /**
   * Changing between desktop/mobile breakpoints
   */
  private onChangeBreakpoint(e: MediaQueryListEvent) {
    if (e.matches) {
      this.init();
    } else {
      this.kill();
    }
  }

  /**
   * Window resize event handler
   */
  private onResize() {
    const targetSection = this.sections[this.currentSectionIdx];

    this.targetX = -targetSection.offsetLeft;

    gsap.set(this.container, {
      x: this.targetX,
    });

    this.isAnimating = false;
  }
  // ==============================================================
  // End Event Listeners
}
