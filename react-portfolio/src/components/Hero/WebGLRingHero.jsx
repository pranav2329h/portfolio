import { useEffect, useRef } from "react";
import * as THREE from "three";
import "./WebGLRingHero.css";

/* Vite-safe image imports */
const images = import.meta.glob(
  "../../assets/tech/*.{png,jpg,jpeg}",
  { eager: true }
);
const IMAGE_URLS = Object.values(images).map((m) => m.default);

const WebGLRingHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || IMAGE_URLS.length === 0) return;

    let scene, camera, renderer;
    let ringGroup;
    let animationId;

    /* SCENE */
    scene = new THREE.Scene();

    /* CAMERA — pulled back for safety */
    camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 14);

    /* RENDERER */
    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    containerRef.current.appendChild(renderer.domElement);

    /* RING GROUP — CENTERED */
    ringGroup = new THREE.Group();
    ringGroup.position.set(0, 0, 0);
    scene.add(ringGroup);

    /* CREATE IMAGE RING */
    const loader = new THREE.TextureLoader();
    const radius = 6; // stable radius
    const count = IMAGE_URLS.length;

    IMAGE_URLS.forEach((src, i) => {
      const texture = loader.load(src);
      texture.colorSpace = THREE.SRGBColorSpace;

      const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
      });

      const geometry = new THREE.PlaneGeometry(2.2, 2.2);
      const mesh = new THREE.Mesh(geometry, material);

      const angle = (i / count) * Math.PI * 2;

      mesh.position.set(
        Math.cos(angle) * radius,
        0,
        Math.sin(angle) * radius
      );

      mesh.lookAt(0, 0, 0);

      ringGroup.add(mesh);
    });

    /* ANIMATION — ROTATE IN DEPTH (Y AXIS) */
    const animate = () => {
      ringGroup.rotation.y += 0.002;
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    /* RESIZE */
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    /* CLEANUP */
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="webgl-hero">
      <div ref={containerRef} className="webgl-canvas" />

      {/* HERO CONTENT */}
      <div className="hero-overlay">
        <h1>Pranav Hydrabade</h1>
        <h2>Software Developer • AI & Frontend</h2>
      </div>
    </section>
  );
};

export default WebGLRingHero;
