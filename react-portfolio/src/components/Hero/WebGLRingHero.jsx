import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import "./WebGLRingHero.css";

/* Load tech images */
const images = import.meta.glob(
  "../../assets/tech/*.{png,jpg,jpeg}",
  { eager: true }
);
const IMAGE_URLS = Object.values(images).map((m) => m.default);

const TARGET_ANGLES = [
  0,
  Math.PI / 2,
  Math.PI,
  (Math.PI * 3) / 2,
];

/* Typing roles */
const ROLES = [
  "Software Engineer",
  "AI Engineer",
  "UI Designer",
  "Web Developer",
  "SQL Expert",
];

const WebGLRingHero = () => {
  const mountRef = useRef(null);

  /* =========================
     TYPING EFFECT STATE
     ========================= */
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = isDeleting ? 45 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        if (text === current) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(current.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  /* =========================
     THREE.JS RING
     ========================= */
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || IMAGE_URLS.length === 0) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 14;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const loader = new THREE.TextureLoader();
    const count = IMAGE_URLS.length;
    const radius = 6.5;
    const baseSize = 1.9;

    const meshes = [];

    IMAGE_URLS.forEach((src, i) => {
      const texture = loader.load(src);
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.55,
        side: THREE.DoubleSide,
      });

      const geometry = new THREE.PlaneGeometry(baseSize, baseSize);
      const mesh = new THREE.Mesh(geometry, material);

      const angle = (i / count) * Math.PI * 2;
      mesh.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        0
      );

      mesh.userData.angle = angle;
      meshes.push(mesh);
      group.add(mesh);
    });

    let scrollVelocity = 0;
    const baseSpeed = 0.003;

    const onScroll = () => {
      scrollVelocity += 0.002;
    };
    window.addEventListener("scroll", onScroll);

    let frameId;
    const animate = () => {
      group.rotation.z += baseSpeed + scrollVelocity;
      scrollVelocity *= 0.9;

      meshes.forEach((mesh) => {
        const worldAngle =
          (mesh.userData.angle + group.rotation.z) % (Math.PI * 2);

        let minDist = Math.PI * 2;
        TARGET_ANGLES.forEach((target) => {
          const d = Math.abs(
            ((worldAngle - target + Math.PI * 3) % (Math.PI * 2)) - Math.PI
          );
          minDist = Math.min(minDist, d);
        });

        const t = THREE.MathUtils.clamp(minDist / 0.6, 0, 1);
        const scale = THREE.MathUtils.lerp(1.25, 0.85, t);
        const opacity = THREE.MathUtils.lerp(1, 0.35, t);

        mesh.scale.set(scale, scale, 1);
        mesh.material.opacity = opacity;
      });

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section className="webgl-hero">
      <div ref={mountRef} className="webgl-canvas" />

      <div className="hero-overlay">
        <h1>Pranav Hydrabade</h1>

        <p className="typing-text">
          {text}
          <span className="cursor">|</span>
        </p>

        <div className="hero-actions">
          <a href="#projects" className="hero-btn primary">
            View Projects
          </a>
          <a href="#contact" className="hero-btn secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default WebGLRingHero;
