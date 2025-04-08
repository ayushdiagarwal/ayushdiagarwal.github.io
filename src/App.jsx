import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import SideProjects from "./components/SideProjects";
import Contact from "./components/Contact";

function App() {

  return (
    <>
      <Navbar />
      <div className="px-4 md:px-8 lg:px-16 py-8">
        <Home /> 
        <About />
        <SideProjects />
        <Contact />
      </div>
    </>
  );
}

export default App;
