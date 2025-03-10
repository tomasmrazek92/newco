export default class Nav {
  _isMobile;
  navbar;
  wNavBtn;
  navLinks;
  onScrollBound;
  _currentSection;
  navContainer;
  navBg;

  constructor() {
    this.navbar = $('.nav');
    this.wNavBtn = $('.w-nav-button');
    this.navLinks = $('.nav_menu-link');
    this.navContainer = document.querySelector('.nav_menu-inner');
    this.navBg = document.querySelector('.nav_menu-bg');
    this.contactBtns = document.querySelectorAll('.btn.cc-nav');
    this.onScrollBound = this.onScroll.bind(this);

    this.navLinks.on('click', (e) => {
      e.preventDefault();

      const linkId = $(e.currentTarget).attr('id');

      this.mobileScrollToSection(linkId);

      window.history.pushState({}, '', `${document.location.origin}#${linkId}`);

      window.dispatchEvent(new CustomEvent('clicked_nav', { detail: linkId }));
    });

    $('.nav_brand').on('click', () => {
      window.dispatchEvent(new CustomEvent('clicked_nav', { detail: 'none' }));
    });

    this.createObserver(this.wNavBtn, this.menuCallback.bind(this));

    window.addEventListener('hashchange', this.deepLink.bind(this));
  }

  get isMobile() {
    return this._isMobile;
  }

  set isMobile(val) {
    if (val !== this._isMobile) {
      if (val) {
        window.addEventListener('scroll', this.onScrollBound);
      } else {
        window.removeEventListener('scroll', this.onScrollBound);
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
    this.navLinks.removeClass('active');
    targetLink.addClass('active');
    this.animateNavBackground(targetLink[0]);
    this.updateContactBtn(section);
  }

  deepLink() {
    let linkId = document.location.hash.substring(1);
    if (linkId === 'top') {
      linkId = 'none';
    }
    if (linkId.trim() !== '') {
      window.dispatchEvent(new CustomEvent('clicked_nav', { detail: linkId }));
    }
  }

  mobileScrollToSection(linkId) {
    if (this.isMobile) {
      if (linkId === 'top') {
        linkId = 'none';
      }

      const targetSection = $(`.section_part[data-section="${linkId}"]`);

      if (targetSection.length) {
        // Get the pin-spacer parent if it exists
        const pinSpacer = targetSection.parent('.pin-spacer');

        // Calculate the actual scroll position
        let scrollTarget;

        if (pinSpacer.length) {
          // If section is pinned, use the pin-spacer's offset
          scrollTarget = pinSpacer.offset().top;
        } else {
          // If section is not pinned, use the section's offset
          scrollTarget = targetSection.offset().top;
        }

        // Add any additional offset for fixed headers if needed
        // const headerOffset = $('.your-header').height(); // Uncomment if needed
        // scrollTarget -= headerOffset;

        gsap.to(window, { scrollTo: { y: scrollTarget }, duration: 0, ease: 'power2.out' });
      }
    }
  }

  createObserver(targetNodes, callback) {
    targetNodes.each((i, node) => {
      const observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            callback(mutation.target);
          }
        });
      });
      observer.observe(node, { attributes: true, attributeFilter: ['class'] }); // Pass the DOM node directly
    });
  }

  updateContactBtn(section) {
    if (!this.isMobile && section === 'none') {
      this.contactBtns.forEach((elm) => elm.classList.add('start'));
    } else {
      this.contactBtns.forEach((elm) => elm.classList.remove('start'));
    }
  }

  animateNavBackground(targetLink) {
    if (!targetLink) {
      this.navBg.style.opacity = '0';
      return;
    }

    // Get the positions relative to the parent container
    const containerRect = this.navContainer.getBoundingClientRect();
    const linkRect = targetLink.getBoundingClientRect();

    // Calculate position relative to container
    const relativeLeft = linkRect.left - containerRect.left;

    // Create the animation
    gsap.to(this.navBg, {
      x: relativeLeft,
      opacity: 1,
      width: linkRect.width,
      height: linkRect.height,
      duration: 0.4,
      ease: 'power2.out',
    });
  }

  menuCallback() {
    if (this.wNavBtn.hasClass('w--open')) {
      this.navbar.addClass('open');
    } else {
      this.navbar.removeClass('open');
    }
  }

  onScroll() {
    if (this.navbar.length && this.isMobile) {
      if (window.scrollY > this.navbar.height() / 2) {
        if (!this.navbar.hasClass('active')) {
          this.navbar.addClass('active');
        }
      } else {
        if (this.navbar.hasClass('active')) {
          this.navbar.removeClass('active');
        }
      }
    }
  }
}
