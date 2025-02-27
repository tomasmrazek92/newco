import * as THREE from "three";
import testVertexShader from "./shaders/test/vertex.glsl";
import testVertexShader2 from "./shaders/test/vertex2.glsl";
import testFragmentShader from "./shaders/test/fragment.glsl";

export default class WaveAnim {
	scene;
	meshTop;
	meshBottom;
	_currentSection;

	constructor() {
		// Canvas
		const canvas = document.createElement('canvas');
		canvas.classList.add('webgl');
		canvas.style.zIndex = '1';
		document.body.appendChild(canvas);

		// Kill (and move) other elements from previous build
		// Doing it this way instead of actually deleting in authoring just in case we want to go back to using them
		const preloader = document.querySelector('.page-load');
		// preloader.style.zIndex = '0';
		// preloader.style.background = 'transparent';

		const preloaderBGs = document.querySelectorAll('.page-load_bg');
		// preloaderBGs.forEach(elm => elm.style.display = 'none');

		const mainContent = document.querySelector('.page-main');
		// mainContent.style.zIndex = '2';

		const modals = document.querySelector('.modal');
		// nav.style.zIndex = 1002;

		const bottomWaveImage = document.querySelector('.bottom-wave-img');
		// bottomWaveImage.style.display = 'none';


		// Scene
		this.scene = new THREE.Scene();

		/**
		 * Sizes
		 */
		const sizes = {
			width: window.innerWidth,
			height: window.innerHeight,
		};

		window.addEventListener("resize", () => {
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
		const texture = new THREE.TextureLoader().load("https://cdn.prod.website-files.com/67a51f5233734befd00d7699/67bf928a8f6ad5c62f6effc8_curved.png");
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
			position: [0, 2.1, 0],
			rotation: [0, 0, Math.PI],
			vertexShader: testVertexShader2,
			fragmentShader: testFragmentShader,
			freqX: -3,
			freqY: 1.9,
			twist: -3.5,
			elevation: 0.2,
		};

		// Create and add both meshes
		this.meshBottom = this.createMesh(params1, texture, geometry);
		this.meshTop = this.createMesh(params2, texture, geometry);

		// /**
		//  * Animate
		//  */
		const tick = (time) => {
			if (this.meshTop) {
				this.meshTop.material.uniforms.uManualTime.value += 0.0025;
			}

			this.meshBottom.material.uniforms.uManualTime.value += 0.0022;

			renderer.render(this.scene, camera);

			window.requestAnimationFrame(tick);
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

	initAnim() {
		gsap.to(this.meshTop.material.uniforms.uOpacity, { value: 1.0, duration: 2, ease: 'linear' });
		gsap.to(this.meshBottom.material.uniforms.uOpacity, { value: 1.0, duration: 2, ease: 'linear' });
	}

	onPreloaderComplete() {
		if (this.meshTop) {
			gsap.killTweensOf(this.meshTop.material.uniforms.uOpacity);
			gsap.to(this.meshTop.material.uniforms.uOpacity, {
				value: 0.0, duration: 1, ease: 'linear', onComplete: () => {
					this.meshTop.geometry.dispose();
					this.meshTop.material.dispose();
					this.scene.remove(this.meshTop);
					this.meshTop = null;
				},
			});
		}
	}
}
