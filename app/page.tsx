"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  useEffect(() => {
    // GSAP code can go here if needed
  }, []);
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
};

export default App;
