import "./Hero.css";
import { motion } from "framer-motion";
import Scene from "../ThreeD/Scene";

const Hero = () => {
  return (
    <section id="home" className="hero">
  <div className="hero-3d">
    <Scene />
  </div>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          Hi, I’m <span>Pranav</span>
        </h1>

        <h2>React Developer & UI Engineer</h2>

        <p>
          I build modern, animated, high-performance web interfaces using
          React, advanced CSS, and motion libraries.
        </p>

        <div className="hero-buttons">
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="btn primary"
          >
            View Projects
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="btn secondary"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className="hero-card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        whileHover={{ rotateY: 8, rotateX: -6 }}
      >
        <div className="card-glow"></div>
        <h3>Frontend Specialist</h3>
        <p>React • Motion • UI/UX</p>
      </motion.div>
    </section>
  );
};

export default Hero;
