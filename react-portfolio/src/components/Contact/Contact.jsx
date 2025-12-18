import "./Contact.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <div className="contact-wrapper">
        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea rows="5" placeholder="Your Message"></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
          >
            Send Message
          </motion.button>
        </motion.form>

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p>
            I’m open to internship opportunities, freelance work, and
            collaborations. Let’s connect.
          </p>

          <div className="social-links">
            <a href="#" target="_blank"><FaGithub /></a>
            <a href="#" target="_blank"><FaLinkedin /></a>
            <a href="#" target="_blank"><FaTwitter /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
