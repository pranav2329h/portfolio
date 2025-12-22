import Navbar from "./components/Navbar/Navbar";
//import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Achievements from "./components/Achievements/Achievements";
//import ScrollHero from "./components/Hero/ScrollHero";
//import CinematicHero from "./components/Hero/CinematicHero";
import WebGLRingHero from "./components/Hero/WebGLRingHero";
function App() {
  return (
    <>
      <Navbar />
      <WebGLRingHero/>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
    </>
  );
}

export default App;
