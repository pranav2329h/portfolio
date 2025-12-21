import "./Navbar.css";
import { useEffect, useState } from "react";

const SECTIONS = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "achievements",
  "contact",
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);

      // Progress bar
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      setProgress(total > 0 ? (y / total) * 100 : 0);

      // Active section detection
      let current = "home";
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop - 120; // offset for navbar
        if (y >= top) current = id;
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // init
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress (optional, subtle) */}
      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
        aria-hidden
      />

      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">Pranav</div>

        <ul className="nav-links">
          {SECTIONS.map((item) => (
            <li key={item} className={active === item ? "active" : ""}>
              <a href={`#${item}`}>{item.toUpperCase()}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
