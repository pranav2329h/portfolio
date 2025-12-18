import "./Experience.css";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Tech Startup",
    duration: "Jan 2024 – Apr 2024",
    description:
      "Worked on building responsive UI components using React and CSS. Collaborated with designers and backend developers to improve user experience.",
  },
  {
    role: "Web Development Trainee",
    company: "Learning Program",
    duration: "Aug 2023 – Dec 2023",
    description:
      "Learned core web technologies, built multiple mini-projects, and gained hands-on experience with frontend development workflows.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <span className="company">
                {exp.company} • {exp.duration}
              </span>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
