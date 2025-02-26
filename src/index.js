import Carousels from './Carousels';
import MobilePinning from './MobilePinning';
import Modals from './Modals';
import Nav from './Nav';
import Preloader from './Preloader';
import ScrollSnap from './ScrollSnap';
import Sections from './Sections';

class Main {
  isMobile;
  scrollContainer;
  scrollSections;
  scrollSnap;
  mobilePinning;
  preloader;
  carousels;
  sections;
  modals;
  mql;
  nav;

  constructor() {
    this.scrollContainer = document.querySelector('.page-main');
    this.scrollSections = document.querySelectorAll('.section');

    this.scrollSnap = new ScrollSnap(this.scrollContainer, this.scrollSections);
    this.mobilePinning = new MobilePinning(this.scrollContainer);
    this.preloader = new Preloader();
    this.carousels = new Carousels();
    this.sections = new Sections();
    this.modals = new Modals();
    this.nav = new Nav();

    this.initBreakpointListener(); // at this point, this.isMobile is set

    this.preloader.start();
    this.sections.init();

    window.addEventListener('go_to_section', this.onScrollToSection.bind(this));
    window.addEventListener('modal_open', this.onModalOpen.bind(this));
    window.addEventListener('modal_closed', this.onModalClosed.bind(this));
    window.addEventListener('clicked_nav', this.onClickedNav.bind(this));
  }

  initBreakpointListener() {
    this.mql = window.matchMedia('(min-width: 992px)');
    this.mql.addEventListener('change', this.onChangeBreakpoint);
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
      const section = document.querySelector(`[data-section=${sectionId}]`).querySelectorAll('.section')[0];
      const sectionIdx = [...this.scrollSections].findIndex(s => s === section);
      this.scrollSnap.gotoIdx(sectionIdx, true);
    }
  }

  onScrollToSection(e) {
    const currentSection = this.scrollSections[e.detail];
    const parentSection = currentSection.closest('.section_part');
    this.nav.currentSection = parentSection.dataset.section;
  }

  onChangeBreakpoint(e) {
    this.isMobile = !e.matches;

    if (this.isMobile) {
      gsap.set($('[data-animation]').not('.nav'), { visibility: 'hidden' });
    } else {
      gsap.set($('[data-animation]').not('.nav'), { visibility: 'visible' });
    }

    this.preloader.isMobile = this.isMobile;
    this.sections.isMobile = this.isMobile;
    this.nav.isMobile = this.isMobile;

    if (this.isMobile) {
      this.scrollSnap.kill();
      this.mobilePinning.start();
    } else {
      this.scrollSnap.start();
      this.mobilePinning.kill();
    }
  }
}

(function () {
  if (document.readyState !== 'loading') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }

  function init() {
    new Main();
  }
})();
