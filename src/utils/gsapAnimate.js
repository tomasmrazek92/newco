export function gsapAnimate(element, isMobile) {
	const $el = $(element);
	const tl = gsap.timeline();

	if (isMobile) return;

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
	if ($el.is('[data-animation="writer"]')) {
		const scoreText = $el.text();

		$el.text('');
		tl.to($elt, {
			duration: 2,
			text: scoreText,
			ease: 'none',
		});
	}

	return tl;
}