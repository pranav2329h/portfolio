import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="image-box">
          <span className="image-tag">ABOUT ME</span>
        </div>
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Who I Am</h2>

        <p>
          I am a passionate frontend developer focused on building interactive,
          scalable, and visually refined web applications using React and modern
          animation libraries.
        </p>

        <p>
          I enjoy crafting smooth user experiences, working with advanced CSS,
          motion systems, and continuously learning new technologies to improve
          performance and design quality.
        </p>

        <div className="about-stats">
          <div>
            <h3>1+</h3>
            <span>Years Learning</span>
          </div>
          <div>
            <h3>10+</h3>
            <span>Projects</span>
          </div>
          <div>
            <h3>5+</h3>
            <span>Technologies</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
