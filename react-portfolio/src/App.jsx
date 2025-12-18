import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <section id="home">
        <h1>Home</h1>
      </section>

      <section id="about">
        <h1>About</h1>
      </section>

      <section id="skills">
        <h1>Skills</h1>
      </section>

      <section id="projects">
        <h1>Projects</h1>
      </section>

      <section id="contact">
        <h1>Contact</h1>
      </section>
    </>
  );
}

export default App;
