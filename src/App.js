import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sociallinks from "./components/Sociallinks";
import About from "./components/About";
import Screen from "./components/Screen";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Screen/>
      <Navbar />
      <Home />
      <About/>
      <Sociallinks />
      <Portfolio/>

    </div>
  );
}

export default App;
