import "./Skills.css";
import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaJava,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaWordpress,
  FaShopify,
  FaLinux,
} from "react-icons/fa";
import { SiJavascript, SiFigma, SiFlask, SiMysql, SiMongodb } from "react-icons/si";

/* =========================
   SKILLS DATA (FROM RESUME)
========================= */

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "PHP", icon: FaPhp },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
    ],
  },
  {
    category: "Frameworks & Tools",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Flask", icon: SiFlask },
      { name: "GitHub", icon: FaGithub },
      { name: "Figma", icon: SiFigma },
      { name: "WordPress", icon: FaWordpress },
      { name: "Shopify", icon: FaShopify },
    ],
  },
  {
    category: "Databases & Systems",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Linux / Ubuntu", icon: FaLinux },
    ],
  },
];

/* =========================
   ANIMATION VARIANTS
========================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h2>

      {skillsData.map((group) => (
        <div key={group.category} className="skills-group">
          <h3>{group.category}</h3>

          <motion.div
            className="skills-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {group.skills.map(({ name, icon: Icon }) => (
              <motion.div
                key={name}
                className="skill-card"
                variants={item}
                whileHover={{
                  y: -6,
                  boxShadow: "0 14px 40px rgba(108,99,255,0.25)",
                }}
                whileFocus={{
                  y: -6,
                }}
                tabIndex={0}
              >
                <motion.div
                  className="skill-icon"
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon />
                </motion.div>
                <span>{name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
