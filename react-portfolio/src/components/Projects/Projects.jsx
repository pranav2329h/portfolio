import "./Projects.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Portfolio Website",
    description:
      "A modern animated portfolio built with React, Framer Motion, and advanced CSS.",
    tech: ["React", "Framer Motion", "CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "E-Commerce UI",
    description:
      "Frontend for an e-commerce platform with interactive UI and smooth animations.",
    tech: ["React", "CSS", "JavaScript"],
    github: "#",
    live: "#",
  },
  {
    title: "Dashboard App",
    description:
      "A clean admin dashboard with charts, cards, and responsive layouts.",
    tech: ["React", "Charts", "UI Design"],
    github: "#",
    live: "#",
  },
];

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

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ rotateX: 6, rotateY: -6 }}
          >
            <div className="card-overlay"></div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank">GitHub</a>
              <a href={project.live} target="_blank">Live</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
