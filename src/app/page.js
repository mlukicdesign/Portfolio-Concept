"use client";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/preloader";
import Landing from "../components/landing";
import Projects from "../components/projects";
import Description from "@/components/Description";

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0,0);
  
      }, 2000 )

    }
    )();
  }, []);

  return (
    <main>

      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Projects />

    </main>
  );
}
