import "./ScrollHero.css";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "../../assets/hero/hero-1.jpg";

const ScrollHero = () => {
  const { scrollYProgress } = useScroll();

  /* Scroll-based transforms */
  const imageScale = useTransform(scrollYProgress, [0, 0.35], [1, 0.85]);
  const imageY = useTransform(scrollYProgress, [0, 0.35], [0, -60]);
  const textY = useTransform(scrollYProgress, [0, 0.35], [0, -40]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.6]);

  return (
    <section id="home" className="scroll-hero">
      <div className="scroll-hero-inner">
        {/* PHOTO */}
        <motion.div
          className="hero-image-wrapper"
          style={{ scale: imageScale, y: imageY }}
        >
          <img src={heroImage} alt="Pranav Hydrabade" />
        </motion.div>

        {/* TEXT */}
        <motion.div
          className="hero-text"
          style={{ y: textY, opacity: textOpacity }}
        >
          <h1>
            Hi, I’m <span>Pranav</span>
          </h1>

          <h2>Software Developer • AI & Frontend</h2>

          <p>
            I build modern, scalable applications focused on clean UI,
            intelligent systems, and real-world problem solving using
            React, Python, and AI technologies.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="cta primary">
              View Projects
            </a>
            <a href="#contact" className="cta secondary">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollHero;
