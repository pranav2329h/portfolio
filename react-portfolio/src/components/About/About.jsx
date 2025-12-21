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
          I am an innovative and results-driven software developer with a strong foundation in artificial intelligence, frontend web development, and database management.
        </p>

        <p>
          I have hands-on experience working with technologies such as React, Python, Java, PHP, and Flask, and I enjoy building interactive, user-focused web interfaces with clean UI and efficient data handling.
        </p>
        <p>
          My work includes AI chatbots, sentiment analysis tools, dashboards, and full-stack applications. I focus on writing clean code, solving real-world problems, and continuously improving my technical and design skills.
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
