import "./Achievements.css";
import { motion } from "framer-motion";
import { FaTrophy, FaCertificate, FaFileAlt, FaExternalLinkAlt } from "react-icons/fa";

const data = [
  {
    key: "hackathons",
    title: "Hackathons",
    icon: <FaTrophy />,
    items: [
      {
        title: "Smart India Hackathon (Eurethon 2K24)",
        subtitle: "Team CopyCraft – AI Content Solution",
        year: "2024",
        description:
          "Built an AI-based content solution using NLP and automation tools under time constraints.",
        link: "",
      },
      {
        title: "NVIDIA Hackathon",
        subtitle: "Team Avengers – AI Content Generator",
        year: "2024",
        description:
          "Designed an AI-driven content generation model using Python and Transformer-based frameworks.",
        link: "",
      },
    ],
  },
  {
    key: "certifications",
    title: "Certifications",
    icon: <FaCertificate />,
    items: [
      {
        title: "Frontend Development with React",
        subtitle: "Coursera",
        year: "2023",
        description: "",
        link: "",
      },
      {
        title: "JavaScript Algorithms & Data Structures",
        subtitle: "freeCodeCamp",
        year: "2023",
        description: "",
        link: "",
      },
    ],
  },
  {
    key: "publications",
    title: "Publications",
    icon: <FaFileAlt />,
    items: [
      {
        title: "AI-Based Recommendation System",
        subtitle: "International Journal of Computer Science",
        year: "2024",
        description: "",
        link: "",
      },
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const Achievements = () => {
  return (
    <section id="achievements" className="achievements">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Achievements
      </motion.h2>

      <div className="achievements-grid">
        {data.map((group) => (
          <div key={group.key} className="achievements-group">
            <div className="group-header">
              <span className="group-icon">{group.icon}</span>
              <h3>{group.title}</h3>
            </div>

            <motion.div
              className="group-list"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {group.items.map((it, idx) => (
                <motion.article
                  key={`${it.title}-${idx}`}
                  className="achievement-card"
                  variants={item}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 16px 44px rgba(108,99,255,0.22)",
                  }}
                >
                  <div className="card-top">
                    <h4>{it.title}</h4>
                    <span className="year-badge">{it.year}</span>
                  </div>

                  {it.subtitle && <span className="subtitle">{it.subtitle}</span>}
                  {it.description && <p>{it.description}</p>}

                  {it.link && (
                    <a className="view-link" href={it.link} target="_blank" rel="noreferrer">
                      View <FaExternalLinkAlt />
                    </a>
                  )}
                </motion.article>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
