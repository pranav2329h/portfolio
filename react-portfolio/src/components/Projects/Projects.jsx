import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "SalesPulse – Sales Dashboard",
    description:
      "Interactive sales dashboard built with React to visualize KPIs, team performance, and trends.",
    tech: ["React", "JavaScript", "UI"],
    github: "#",
    live: "#",
  },
  {
    title: "Finance Chatbot",
    description:
      "AI-powered chatbot providing real-time stock, currency, and investment updates.",
    tech: ["Python", "LangFlow", "AI"],
    github: "#",
    live: "#",
  },
  {
    title: "Sentiment Chat App",
    description:
      "Real-time chat application with sentiment analysis using React and Flask.",
    tech: ["React", "Flask", "NLP"],
    github: "#",
    live: "#",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="projects-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            className="project-card"
            variants={item}
            whileHover={{
              y: -10,
              boxShadow: "0 28px 80px rgba(0,0,0,0.35)",
            }}
          >
            {/* Rim light */}
            <span className="project-rim" />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <motion.div
                className="project-tech"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="project-actions"
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >
              <a href={project.github} target="_blank" rel="noreferrer">
                <FaGithub /> Code
              </a>
              <a href={project.live} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt /> Live
              </a>
            </motion.div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
