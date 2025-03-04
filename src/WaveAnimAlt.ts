import { Dir } from './ScrollSnap';
import wave from './wave.svg';

export default class WaveAnimAlt {
  private container: HTMLDivElement;
  private isAnimating = false;
  private waveCtn: HTMLDivElement;

  constructor() {
    this.container = document.querySelector('.bottom-wave-box') as HTMLDivElement;
    this.container.innerHTML = '';
    this.container.style.opacity = '1';

    this.waveCtn = document.createElement('div');
    this.waveCtn.style.opacity = '0';
    this.waveCtn.style.width = '100%';
    this.waveCtn.style.position = 'relative';
    this.container.append(this.waveCtn);

    const waveDiv = document.createElement('div');
    waveDiv.style.width = '100%';
    waveDiv.innerHTML = wave;
    this.waveCtn.append(waveDiv);

    const prevWave = document.createElement('div');
    prevWave.style.width = '100%';
    prevWave.style.height = '100%';
    prevWave.style.scale = '-1 1';
    prevWave.style.position = 'absolute';
    prevWave.style.top = '0';
    prevWave.style.left = '-100%';
    prevWave.innerHTML = wave;
    this.waveCtn.append(prevWave);

    const prevWave2 = document.createElement('div');
    prevWave2.style.width = '100%';
    prevWave2.style.height = '100%';
    prevWave2.style.position = 'absolute';
    prevWave2.style.top = '0';
    prevWave2.style.left = '-200%';
    prevWave2.innerHTML = wave;
    this.waveCtn.append(prevWave2);

    const nextWave = document.createElement('div');
    nextWave.style.width = '100%';
    nextWave.style.height = '100%';
    nextWave.style.scale = '-1 1';
    nextWave.style.position = 'absolute';
    nextWave.style.top = '0';
    nextWave.style.left = '100%';
    nextWave.innerHTML = wave;
    this.waveCtn.append(nextWave);

    const nextWave2 = document.createElement('div');
    nextWave2.style.width = '100%';
    nextWave2.style.height = '100%';
    nextWave2.style.position = 'absolute';
    nextWave2.style.top = '0';
    nextWave2.style.left = '200%';
    nextWave2.innerHTML = wave;
    this.waveCtn.append(nextWave2);
  }

  public scrolling(dir: Dir) {
    if (this.isAnimating) {
      return;
    }

    this.isAnimating = true;
    const x = dir === Dir.RIGHT ? '-200vw' : '200vw';
    gsap.to(this.waveCtn, {
      x,
      duration: 0.9,
      ease: 'power2.out',
      onComplete: () => {
        gsap.set(this.waveCtn, { x: 0 });
        this.isAnimating = false;
      },
    });
  }

  public onPreloaderComplete() {
    gsap.to(this.waveCtn, { opacity: 1, duration: 0.5, ease: 'linear' });
  }
}
