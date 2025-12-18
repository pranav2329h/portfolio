import "./Skills.css";
import { motion } from "framer-motion";

const coreSkills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
];

const learningSkills = [
  { name: "Three.js", level: 40 },
  { name: "Framer Motion", level: 60 },
  { name: "Backend Basics", level: 45 },
];

const SkillBar = ({ name, level }) => (
  <motion.div
    className="skill-bar"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="skill-info">
      <span>{name}</span>
      <span>{level}%</span>
    </div>

    <div className="bar-bg">
      <motion.div
        className="bar-fill"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
    </div>
  </motion.div>
);

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

      <div className="skills-wrapper">
        <div className="skills-group">
          <h3>Core Skills</h3>
          {coreSkills.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>

        <div className="skills-group">
          <h3>Learning</h3>
          {learningSkills.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
