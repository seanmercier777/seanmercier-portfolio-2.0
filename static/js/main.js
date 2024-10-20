import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  antialias: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Light setup
const light = new THREE.DirectionalLight(0xffffff, 10);
light.position.set(10, 10, 10).normalize();
scene.add(light);

// Load GLB file
const loader = new GLTFLoader();

loader.load(
  "/static/assets/screen.glb",
  function (gltf) {
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error("An error happened", error);
  }
);

// Camera position
camera.position.set(5, 1, 3);

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Optional: smooth the movement
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.maxPolarAngle = Math.PI / 2; // Limits vertical rotation angle

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
