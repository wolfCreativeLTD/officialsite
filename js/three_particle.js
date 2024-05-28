import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.164.1/three.module.min.js";

let camera, scene, renderer, parameters, light;

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

let material;

init();
animate();

function init() {
  camera = new THREE.PerspectiveCamera(
    21,
    window.innerWidth / window.innerHeight,
    1,
    2000
  );
  camera.position.z = 2000;

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x00ddff, 0.00028);

  const geometry = new THREE.BufferGeometry();
  const vertices = [];

  const textureLoader = new THREE.TextureLoader();

  const sprite = textureLoader.load("images/particle.png");

  for (let i = 0; i < 400; i++) {
    const theta = Math.random() * Math.PI;
    const phi = Math.random() * Math.PI * 2;
    const r = (2 * Math.random() - 1) * 400 + 1000;

    /*
					const x = ( 1 - Math.pow( Math.random(), 3 ) ) * 2000 - 1000;
					const y = ( 1 - Math.pow( Math.random(), 3 ) ) * 2000 - 1000;
					const z = ( 1 - Math.pow( Math.random(), 3 ) ) * 2000 - 1000;
*/
    const x = r * Math.sin(theta) * Math.cos(phi);
    const y = r * Math.sin(theta) * Math.sin(phi);
    const z = r * Math.cos(theta);

    vertices.push(x, y, z);
  }

  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3)
  );

  material = new THREE.PointsMaterial({
    size: 40,
    map: sprite,
    color: 0xffd5ed,
    blending: THREE.AdditiveBlending,
    depthTest: false,
    transparent: true,
    premultipliedAlpha: true,
  });

  const particles = new THREE.Points(geometry, material);

  particles.rotation.x = Math.random() * 6;
  particles.rotation.y = Math.random() * 6;
  particles.rotation.z = Math.random() * 6;

  scene.add(particles);

  //

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xffffff, 0);
  const canvas = renderer.domElement;
  canvas.style.position = "fixed";
  canvas.style.left = 0;
  canvas.style.top = 0;
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = 5000;

  document.body.appendChild(renderer.domElement);
  window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  render();
}

function render() {
  const time = Date.now() * 0.0001;

  for (let i = 0; i < scene.children.length; i++) {
    const object = scene.children[i];

    if (object instanceof THREE.Points) {
      object.rotation.x = time;
      object.rotation.y = time * 0.4;
    }
  }

  renderer.render(scene, camera);
}