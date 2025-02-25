import ScrollSnap from './ScrollSnap';

(function () {
  if (document.readyState !== 'loading') {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();

function init() {
  const scrollContainer = document.querySelector('.page-main');
  const scrollSnap = new ScrollSnap();

  // Use this to control the active state of the nav buttons
  scrollContainer.addEventListener('go_to_section', (e) => {
    // e.detail == the index number of the current section
    console.log('going to section', e.detail);
  });

  // to have it go to any section from an external call
  // scrollSnap.gotoIdx(targetIdx);
}
