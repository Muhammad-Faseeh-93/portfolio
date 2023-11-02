import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sociallinks from "./components/Sociallinks";
import About from "./components/About";
import Screen from "./components/Screen";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Screen />
      <Navbar />
      <Home />
      <About />
      <Sociallinks />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
