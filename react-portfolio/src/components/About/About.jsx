import "./About.css";
import { motion } from "framer-motion";
import profileImg from "../../assets/hero/hero-1.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      {/* IMAGE SECTION */}
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="image-box">
          <img src={profileImg} alt="Pranav" />
          <span className="image-tag">ABOUT ME</span>
        </div>
      </motion.div>

      {/* CONTENT SECTION */}
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="shine-text heading-shine">
          Who I Am
        </h2>

        <p className="shine-text paragraph-shine">
          I am an innovative and results-driven software developer with a strong
          foundation in artificial intelligence, frontend web development, and
          database management.
        </p>

        <p className="shine-text paragraph-shine">
          I have hands-on experience working with technologies such as React,
          Python, Java, PHP, and Flask, and I enjoy building interactive,
          user-focused web interfaces with clean UI and efficient data handling.
        </p>

        <p className="shine-text paragraph-shine">
          My work includes AI chatbots, sentiment analysis tools, dashboards, and
          full-stack applications. I focus on writing clean code, solving
          real-world problems, and continuously improving my technical and
          design skills.
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
