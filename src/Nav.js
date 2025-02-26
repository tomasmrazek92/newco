export default class Nav {
	_isMobile;
	navbar;
	wNavBtn;
	navLinks;
	onScrollBound = this.onScroll.bind(this);
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

		this.navLinks.on('click', (e) => {
			e.preventDefault();

			const linkId = $(e.currentTarget).attr('id');

			window.dispatchEvent(new CustomEvent('clicked_nav', { detail: linkId }));
		});

		$('.nav_brand').on('click', () => {
			window.dispatchEvent(new CustomEvent('clicked_nav', { detail: 'none' }));
		});

		this.createObserver(this.wNavBtn, this.menuCallback.bind(this));
	}

	get isMobile() {
		return this._isMobile;
	}

	set isMobile(val) {
		this._isMobile = val;

		if (val !== this._isMobile) {
			if (val) {
				window.addEventListener('scroll', this.onScrollBound);
			} else {
				window.removeEventListener('scroll', this.onScrollBound);
			}
		}
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
			this.contactBtns.forEach(elm => elm.classList.add('start'));
		} else {
			this.contactBtns.forEach(elm => elm.classList.remove('start'));
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
