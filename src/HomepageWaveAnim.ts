import waves from './homepage-waves.svg';

export default class HomepageWaveAnim {
  private paths: NodeListOf<SVGPathElement>;

  constructor() {
    const ctn = document.querySelector('[data-section="none"] .hero-bg_box') as HTMLDivElement;
    ctn.innerHTML = waves;

    const svg = ctn.querySelector('svg') as SVGElement;
    svg.style.width = '100%';
    svg.style.height = '100%';

    this.paths = svg.querySelectorAll<SVGPathElement>('path');

    this.reset();
  }

  public play() {
    this.reset();

    this.paths.forEach((path, i) => {
      gsap.to(path, { opacity: 1, duration: 1, delay: i * 0.03, ease: 'power2.easeIn' });
      gsap.to(path, { x: 0, y: 0, duration: 1, delay: i * 0.03, ease: 'power2.easeInOut' });
    });
  }

  private reset() {
    this.paths.forEach((path) => {
      gsap.killTweensOf(path);
      gsap.set(path, { opacity: 0, x: 50, y: 50, transformOrigin: '50% 50%' });
    });
  }
}
