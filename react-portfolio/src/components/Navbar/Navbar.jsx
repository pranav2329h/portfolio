import "./Navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">Pranav</div>

      <ul className="nav-links">
        {["home", "about", "skills", "projects", "contact"].map((item) => (
          <li
            key={item}
            className={active === item ? "active" : ""}
            onClick={() => setActive(item)}
          >
            <a href={`#${item}`}>{item.toUpperCase()}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
