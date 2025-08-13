"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  useEffect(() => {
    // GSAP code can go here if needed
  }, []);
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
    </main>
  );
};

export default App;
