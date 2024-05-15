import "./App.css";
import Navbar from "./components/navbar.jsx";
import Contact from "./components/contact";
import Home from "./components/home.jsx";
import About from "./components/about.jsx";
import Projects from "./components/projects.jsx";
import Skills from "./components/skills.jsx";
import Particles from "react-tsparticles";
import { useEffect } from "react";
import { loadFull } from "tsparticles";

function App() {
  

  return (
    <>
     
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
