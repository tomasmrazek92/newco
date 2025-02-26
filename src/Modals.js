export default class Modals {
	modalGroup;
	modals;
	modalTargets;

	constructor() {
		this.modalGroup = document.querySelector('[data-modal-group-status]');
		this.modals = document.querySelectorAll('[data-modal-name]');
		this.modalTargets = document.querySelectorAll('[data-modal-target]');

		// Open modal
		this.modalTargets.forEach((modalTarget) => {
			modalTarget.addEventListener('click', this.openModal.bind(this));
		});

		// Close modal
		document.querySelectorAll('[data-modal-close]').forEach((closeBtn) => {
			closeBtn.addEventListener('click', this.closeAllModals.bind(this));
		});

		// Close modal on `Escape` key
		document.addEventListener('keydown', event => {
			if (event.key === 'Escape') {
				this.closeAllModals();
			}
		});
	}

	openModal(e) {
		const modalTarget = e.currentTarget;
		const modalTargetName = modalTarget.getAttribute('data-modal-target');

		// Close all modals
		this.modalTargets.forEach((target) => target.setAttribute('data-modal-status', 'not-active'));
		this.modals.forEach((modal) => modal.setAttribute('data-modal-status', 'not-active'));

		if (modalTargetName === 'team') {
			let teamCard = $(modalTarget).closest('.team-list-item');
			let currentIndex = teamCard.parent().index();
			let teamName = teamCard.find('[data-team-name]').text();
			let teamRole = teamCard.find('[data-team-role]').text();

			$('[data-target-name]').text(teamName);
			$('[data-target-role]').text(teamRole);

			$('.team_visual .w-dyn-item').hide();
			$('.team_visual .w-dyn-item').eq(currentIndex).fadeIn();

			$('.team_role-rich-item').hide();
			$('.team_role-rich-item').eq(currentIndex).show();
		}

		// Activate clicked modal
		document
			.querySelector(`[data-modal-target="${modalTargetName}"]`)
			.setAttribute('data-modal-status', 'active');
		document
			.querySelector(`[data-modal-name="${modalTargetName}"]`)
			.setAttribute('data-modal-status', 'active');

		// Set group to active
		if (this.modalGroup) {
			this.modalGroup.setAttribute('data-modal-group-status', 'active');
		}

		window.dispatchEvent(new CustomEvent('modal_open'));
	}

	// Function to close all modals
	closeAllModals() {
		this.modalTargets.forEach((target) => target.setAttribute('data-modal-status', 'not-active'));

		if (this.modalGroup) {
			this.modalGroup.setAttribute('data-modal-group-status', 'not-active');
		}

		window.dispatchEvent(new CustomEvent('modal_closed'));
	}
}