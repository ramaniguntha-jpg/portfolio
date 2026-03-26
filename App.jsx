import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Qualification from "./components/qualification";
import Skills from "./components/skills";  
import Projects from "./components/projects";
import Contact from "./components/contact";
import "./App.css";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Qualification />
      <Skills />
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;