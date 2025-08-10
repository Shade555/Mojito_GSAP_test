"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  useEffect(() => {
    // GSAP code can go here if needed
  }, []);
  return (
    <div className="flex-center h-[100vh]">
      <h1 className="text-violet-400 text-3xl">App</h1>
    </div>
  );
};

export default App;
