import * as THREE from 'three';

import testFragmentShader from './shaders/test/fragment.glsl';
import testVertexShader from './shaders/test/vertex.glsl';
import testVertexShader2 from './shaders/test/vertex2.glsl';

export default class WaveAnim {
  scene;
  meshTop;
  meshBottom;
  _currentSection;
  _isMobile;
  preloaderComplete = false;

  constructor() {
    // Canvas
    const canvas = document.createElement('canvas');
    canvas.classList.add('webgl');
    canvas.style.zIndex = '1';
    document.body.appendChild(canvas);

    // Scene
    this.scene = new THREE.Scene();

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener('resize', () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    /**
     * Camera
     */
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
    camera.position.set(0.25, 1.0, 1.2);
    this.scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Mesh
    // Geometry
    const texture = new THREE.TextureLoader().load(
      'https://cdn.prod.website-files.com/67a51f5233734befd00d7699/67bf928a8f6ad5c62f6effc8_curved.png'
    );
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
    texture.generateMipmaps = true;

    const geometry = new THREE.PlaneGeometry(2, 1, 400, 400);

    // Material
    // let material;

    const params1 = {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      vertexShader: testVertexShader,
      fragmentShader: testFragmentShader,
      freqX: -5,
      freqY: -1.3,
      twist: -3,
      elevation: 0.1,
    };

    const params2 = {
      position: [0, 2, 0],
      rotation: [0, 0, Math.PI],
      vertexShader: testVertexShader2,
      fragmentShader: testFragmentShader,
      freqX: -5,
      freqY: -1.3,
      twist: -3,
      elevation: 0.1,
    };

    // Create and add both meshes
    this.meshBottom = this.createMesh(params1, texture, geometry);
    this.meshTop = this.createMesh(params2, texture, geometry);

    // /**
    //  * Animate
    //  */
    const tick = () => {
      if (this.meshTop) {
        this.meshTop.material.uniforms.uManualTime.value += 0.0023;
      }

      if (this.meshBottom) {
        this.meshBottom.material.uniforms.uManualTime.value += 0.0022;
      }

      if (this.meshTop || this.meshBottom) {
        renderer.render(this.scene, camera);
        window.requestAnimationFrame(tick);
      }
    };

    tick();

    this.initAnim();
  }

  createMesh(params, texture, geometry) {
    const material = new THREE.ShaderMaterial({
      vertexShader: params.vertexShader,
      fragmentShader: params.fragmentShader,
      side: THREE.DoubleSide,
      depthWrite: false,
      transparent: true,
      uniforms: {
        uTexture: { value: texture },
        uTime: { value: 0.0 },
        uElevation: { value: params.elevation },
        uTwistFactor: { value: params.twist },
        uTwistFactor2: { value: -2 },
        uFrequency: { value: new THREE.Vector2(params.freqX, params.freqY) },
        uSpeed: { value: 0.5 },
        uManualTime: { value: 0 },
        uOpacity: { value: 0.0 },
      },
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(...params.position);
    mesh.rotation.set(...params.rotation);
    this.scene.add(mesh);

    return mesh;
  }

  get isMobile() {
    return this._isMobile;
  }

  set isMobile(val) {
    if (this.preloaderComplete) {
      this.showHideBottomMesh(val ? 0.0 : 1.0);
    }

    this._isMobile = val;
  }

  initAnim() {
    gsap.to(this.meshTop.material.uniforms.uOpacity, { value: 1.0, duration: 2, ease: 'linear' });
    gsap.to(this.meshBottom.material.uniforms.uOpacity, {
      value: 1.0,
      duration: 2,
      ease: 'linear',
    });
  }

  onPreloaderComplete() {
    this.preloaderComplete = true;

    if (this.meshTop) {
      gsap.killTweensOf(this.meshTop.material.uniforms.uOpacity);
      gsap.to(this.meshTop.material.uniforms.uOpacity, {
        value: 0.0,
        duration: 1,
        ease: 'linear',
        onComplete: () => {
          this.meshTop.geometry.dispose();
          this.meshTop.material.dispose();
          this.scene.remove(this.meshTop);
          this.meshTop = null;
        },
      });
    }

    if (this.meshBottom && this.isMobile) {
      this.showHideBottomMesh(0.0);
    }
  }

  showHideBottomMesh(opacity) {
    opacity = 0.0;
    gsap.killTweensOf(this.meshBottom.material.uniforms.uOpacity);
    gsap.to(this.meshBottom.material.uniforms.uOpacity, {
      value: opacity,
      duration: 1,
      ease: 'linear',
      // onComplete: () => {
      //   this.meshBottom.geometry.dispose();
      //   this.meshBottom.material.dispose();
      //   this.scene.remove(this.meshBottom);
      //   this.meshBottom = null;
      // },
    });
  }
}
