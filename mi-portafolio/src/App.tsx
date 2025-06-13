import { useEffect } from "react";

import Projects from "./components/projects";


function App() {
  useEffect(() => {
    document.title = "Paul Rojas | Portafolio";
  }, []);

  return (
<main className="relative text-white scroll-smooth">

  <Projects />

</main>

  );
}

export default App;
