import "./Achievements.css";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaCertificate,
  FaFileAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

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
      {
        title: "MSBTE State Level Project Competition",
        subtitle: "VAPM Student",
        year: "2023",
        description:
          "State-level project competition organized at Guru Gobind Singh Polytechnic, Nashik. Project titled Automatic Plant Watering System using IoT.",
        link: "",
      },
      {
        title: "National Level Hackathon – RSM Hackathon 2023",
        subtitle: "VAPM Student",
        year: "2023",
        description:
          "Participated in RSM-HACKATHON-S-23 organized by the Department of Information Technology. Project: Home Automation using NodeMCU.",
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
        title: "Python Essentials 2",
        subtitle: "Cisco Networking Academy · OpenEDG Python Institute",
        year: "2023",
        description:
          "Completed advanced Python programming training covering OOP, multi-module application design, debugging, and refactoring using Python 3.",
        link: "",
      },
      {
        title: "Data Structures and Algorithms using C++",
        subtitle: "Developer Student Clubs (GDSC) · DevTown",
        year: "2023",
        description:
          "Successfully completed a 7-day intensive bootcamp focused on data structures, algorithms, and C++ implementation.",
        link: "",
      },
      {
        title: "Data Structures and Algorithms using C++",
        subtitle: "AWS Community Builders · DevTown",
        year: "2023",
        description:
          "Hands-on training on algorithmic problem solving and competitive programming using C++.",
        link: "",
      },
      {
        title: "Getting Started with Enterprise Data Science",
        subtitle: "IBM",
        year: "2024",
        description:
          "Learned foundational enterprise data science workflows and data-driven decision-making concepts.",
        link: "",
      },
      {
        title: "Getting Started with Enterprise-grade AI",
        subtitle: "IBM",
        year: "2024",
        description:
          "Covered enterprise-grade AI fundamentals, AI lifecycle concepts, and business use cases.",
        link: "",
      },
      {
        title: "Industrial Visit & One-Day Workshop",
        subtitle:
          "Radio Terna 90.4 FM · Terna Krushi Drone Centre · Cisco Centre",
        year: "2022",
        description:
          "Participated in an industrial visit and workshop focused on radio systems, drone technology, and industry exposure.",
        link: "",
      },
      {
        title: "Workshop on Computer Programming (Java & Python Basics)",
        subtitle: "CDSP Aurangabad",
        year: "2022",
        description:
          "Hands-on workshop covering Java and Python fundamentals with emphasis on logic building.",
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
        title: "Home Automation Using NodeMCU",
        subtitle: "International Journal for Science and Advance Research in Technology (IJSART)",
        year: "2023",
        description:
          "Published a research paper on IoT-based home automation using NodeMCU, focusing on embedded systems and remote control automation.",
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

                  {it.subtitle && (
                    <span className="subtitle">{it.subtitle}</span>
                  )}
                  {it.description && <p>{it.description}</p>}

                  {it.link && (
                    <a
                      className="view-link"
                      href={it.link}
                      target="_blank"
                      rel="noreferrer"
                    >
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
