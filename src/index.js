import Animations from './Animations';
import Carousels from './Carousels';
import MobilePinning from './MobilePinning';
import Modals from './Modals';
import Nav from './Nav';
import Preloader from './Preloader';
import ScrollSnap from './ScrollSnap';
import WaveAnim from './WaveAnim';

class Main {
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
  waveAnim;
  preloaderComplete = false;

  constructor() {
    this.scrollContainer = document.querySelector('.page-main');
    this.scrollSections = document.querySelectorAll('.section');

    this.scrollSnap = new ScrollSnap(this.scrollContainer, this.scrollSections);
    this.mobilePinning = new MobilePinning(this.scrollContainer);
    this.preloader = new Preloader();
    this.carousels = new Carousels();
    this.animations = new Animations();
    this.modals = new Modals();
    this.nav = new Nav();
    this.waveAnim = new WaveAnim();

    document.body.style.overflow = 'hidden';

    this.initBreakpointListener(); // at this point, this.isMobile is set

    if (!this.isMobile) {
      gsap.set($('[data-animation]').not('.nav'), { visibility: 'hidden' });
    }

    window.addEventListener('preloader_complete', this.onPreloaderComplete.bind(this));
    window.addEventListener('go_to_section', this.onScrollToSection.bind(this));
    window.addEventListener('modal_open', this.onModalOpen.bind(this));
    window.addEventListener('modal_closed', this.onModalClosed.bind(this));
    window.addEventListener('clicked_nav', this.onClickedNav.bind(this));

    this.preloader.start();
    this.animations.init();
    this.nav.deepLink();
  }

  initBreakpointListener() {
    this.mql = window.matchMedia('(min-width: 992px)');
    this.mql.addEventListener('change', this.onChangeBreakpoint.bind(this));
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
      const section = document
        .querySelector(`[data-section=${sectionId}]`)
        .querySelectorAll('.section')[0];
      const sectionIdx = [...this.scrollSections].findIndex((s) => s === section);
      this.scrollSnap.gotoIdx(sectionIdx, true);
    }
  }

  onPreloaderComplete() {
    this.preloaderComplete = true;
    document.body.style.overflow = '';
    this.waveAnim.onPreloaderComplete();
    this.onChangeBreakpoint(this.mql);
  }

  onScrollToSection(e) {
    const currentSection = this.scrollSections[e.detail];
    const parentSection = currentSection.closest('.section_part').dataset.section;
    this.nav.currentSection = parentSection;

    window.history.replaceState(
      {},
      '',
      `${document.location.origin}#${parentSection === 'none' ? 'top' : parentSection}`
    );
  }

  onChangeBreakpoint(e) {
    this.isMobile = !e.matches;

    this.preloader.isMobile = this.isMobile;
    this.animations.isMobile = this.isMobile;
    this.nav.isMobile = this.isMobile;
    this.waveAnim.isMobile = this.isMobile;

    if (this.isMobile) {
      gsap.set($('[data-animation]').not('.nav'), { visibility: 'visible' });
    }

    if (!this.preloaderComplete) {
      return;
    }

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
