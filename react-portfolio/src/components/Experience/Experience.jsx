import "./Experience.css";

const data = [
  {
    type: "Experience",
    title: "Web Developer Intern",
    org: "Rukhmani Pvt. Ltd., Pune",
    duration: "Jun 2025 – Present",
    description:
      "Worked on WordPress and Shopify development, SEO optimization, client website management, and multiple e-commerce related projects.",
  },
  {
    type: "Education",
    title: "B.Tech – Artificial Intelligence",
    org: "Your College Name",
    duration: "2023 – 2026",
    description:
      "Focused on artificial intelligence fundamentals, programming, web development, and core software engineering concepts.",
  },
  {
    type: "Education",
    title: "Diploma – Computer Science",
    org: "Your Institute Name",
    duration: "2020 – 2023",
    description:
      "Completed diploma with strong computer science foundations and hands-on technical projects.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience & Education</h2>

      <div className="experience-grid">
        {data.map((item, index) => (
          <div className="experience-card" key={index}>
            <span className="card-type">{item.type}</span>

            <h3>{item.title}</h3>

            <span className="card-meta">
              {item.org} • {item.duration}
            </span>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
