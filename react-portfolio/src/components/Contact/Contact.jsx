import "./Contact.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.error(error);
        }
      );
  };

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
          ref={formRef}
          onSubmit={sendEmail}
          className="contact-form"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <input name="name" type="text" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

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
            I’m open to internships, freelance work, and collaborations.
            Let’s connect.
          </p>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/pranav-hydrabade-10952a255/" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://github.com/pranav2329h" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/mr.pranav_h/?hl=en" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
