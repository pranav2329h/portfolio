import "./Experience.css";
import ScrollStack, { ScrollStackItem } from "../ScrollStack/ScrollStack";

const stackItems = [
  {
    label: "Experience",
    title: "WebDeveloper Intern",
    org: "Tech Startup",
    duration: "Jan 2025 – 6 months",
    description:
      "Rukhmani Pvt. Ltd., Pune (Jun 2025 – Present)WordPress &Shopify development, Web Development, SEO optimization, and client site management and Other E-comrelated projects",
  },
  {
    label: "Education",
    title: "B.Tech – Artificial Intelligence",
    org: "Your College Name",
    duration: "2023 – 2026",
    description:
      "Focused on AI fundamentals, programming, web development, and software engineering.",
  },
  {
    label: "Education",
    title: "Diploma – Computer Science",
    org: "Your Institute Name",
    duration: "2020 – 2023",
    description:
      "Completed diploma with hands-on technical projects and strong CS foundations.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience & Education</h2>

      <ScrollStack
        itemDistance={60}       
        itemStackDistance={24}  
        itemScale={0.035}
        baseScale={0.9}
        blurAmount={0.4}
      >
        {stackItems.map((item, index) => (
          <ScrollStackItem key={index} itemClassName="stack-card">
            <span className="stack-label">{item.label}</span>

            <h3>{item.title}</h3>
            <span className="meta">
              {item.org} • {item.duration}
            </span>

            <p>{item.description}</p>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
};

export default Experience;
