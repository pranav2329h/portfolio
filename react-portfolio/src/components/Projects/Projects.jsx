import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Home Automation Using Arduino UNO",
    description:
      "IoT-based home automation system using Arduino UNO to control electrical appliances remotely with sensors and automation logic.",
    tech: ["Arduino", "IoT", "Embedded C"],
    github: "https://github.com/pranav2329h/Home_AUTOMATION_USING_ARDINO_UNO",
  },
  {
    title: "MindMeta xAI",
    description:
      "AI-powered application focused on intelligent interaction and cognitive analysis using modern AI concepts and APIs.",
    tech: ["Python", "AI", "NLP"],
    github: "https://github.com/pranav2329h/Mindmeta-xAI",
  },
  {
    title: "SalesPulse – AI Retail Analytics & Recommendations",
    description:
      "AI-driven retail analytics platform for sales insights, customer behavior analysis, and smart product recommendations.",
    tech: ["React", "AI", "Analytics"],
    github:
      "https://github.com/pranav2329h/SalesPulse-AI-Retail-analytics-recommendations",
  },
  {
    title: "Prime Tune",
    description:
      "Music-based application focused on content handling, media interaction, and user-friendly UI design.",
    tech: ["JavaScript", "Frontend", "UI"],
    github: "https://github.com/pranav2329h/Prime_Tune",
  },
  {
    title: "Voice Assistant Using Python",
    description:
      "Voice-controlled AI assistant built using Python to perform tasks via speech recognition and text-to-speech.",
    tech: ["Python", "AI", "Speech Recognition"],
    github: "https://github.com/pranav2329h/Voice-Assistant-using-Python",
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
            whileTap={{ scale: 0.97 }}
          >
            <span className="project-rim" />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>

            <div className="project-actions">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label="View GitHub Repository"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
