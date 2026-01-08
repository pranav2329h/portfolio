import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import ElectricBorder from "./ElectricBorder";

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
  {
    title: "Retrieval-Augmented Generation (RAG) system",
    description:
      " I've successfully built and deployed a Retrieval-Augmented Generation (RAG) system using LangFlow, integrating cutting-edge components",
    tech: [" HuggingFace", "OpenAI GPT-4", "Astra DB and LangFlow "],
    github: "https://www.linkedin.com/posts/pranav-hydrabade-10952a255_langflow-huggingface-openai-activity-7355169089973055488-GEuq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7nchkB8N17CflnZNOygkRL0GvoJadSGYw",
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="projects">
      <motion.h2>Projects</motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className={`project-card ${hovered === index ? "hovered" : ""}`}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ y: -10 }}
          >
            <ElectricBorder active={hovered === index} />

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
              <a href={project.github} target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
