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
  FaNodeJs,
} from "react-icons/fa";
import {
  SiJavascript,
  SiFigma,
  SiFlask,
  SiMysql,
  SiMongodb,
  SiC,
  SiCplusplus,
  SiR,
  SiShopify,
  SiAngular,
  SiGooglecloud,
  SiTensorflow,
  SiOpenai,
} from "react-icons/si";

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "Java", icon: FaJava },
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "R", icon: SiR },
      { name: "PHP", icon: FaPhp },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Liquid", icon: SiShopify },
    ],
  },
  {
    category: "Frameworks & Tools",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Flask", icon: SiFlask },
      { name: "LangFlow", icon: SiOpenai },
      { name: "GitHub", icon: FaGithub },
      { name: "Figma", icon: SiFigma },
      { name: "WordPress", icon: FaWordpress },
      { name: "Shopify", icon: FaShopify },
    ],
  },
  {
    category: "Databases & Systems",
    skills: [
      { name: "MySQL / SQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Linux / Ubuntu", icon: FaLinux },
    ],
  },
  {
    category: "Core Competencies",
    skills: [
      { name: "Machine Learning", icon: SiTensorflow },
      { name: "API Integration", icon: SiOpenai },
      { name: "REST APIs", icon: SiOpenai },
      { name: "OOP Concepts", icon: SiOpenai },
      { name: "Database Management", icon: SiMysql },
    ],
  },
  {
    category: "Currently Learning",
    highlight: true,
    skills: [
      { name: "Machine Learning", icon: SiTensorflow },
      { name: "Generative AI", icon: SiOpenai },
      { name: "Cloud Computing", icon: SiGooglecloud },
      { name: "Angular", icon: SiAngular },
      { name: "Node.js", icon: FaNodeJs },
      { name: "App Development", icon: FaReact },
    ],
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
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
        <div
          key={group.category}
          className={`skills-group ${
            group.highlight ? "highlight-group" : ""
          }`}
        >
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
                  scale: 1.04,
                  boxShadow: "0 14px 40px rgba(108,99,255,0.25)",
                }}
                whileTap={{ scale: 0.97 }}
                tabIndex={0}
              >
                <div className="card-glow-layer" />
                <div className="skill-icon">
                  <Icon />
                </div>
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
