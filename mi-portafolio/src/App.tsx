import { useEffect } from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import AnimatedGlobalBackground from "./components/AnimatedGlobalBackground";

function App() {
  useEffect(() => {
    document.title = "Paul Rojas | Portafolio";
  }, []);

  return (
<main className="relative text-white scroll-smooth">
  <AnimatedGlobalBackground />

  <Hero />
  <About />
  <Projects />
  <Skills />
  <Contact />
</main>

  );
}

export default App;
