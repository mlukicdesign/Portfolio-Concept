"use client";
import { useEffect } from "react";
import Landing from "../components/landing";
import Projects from "../components/projects";
import Description from "@/components/Description";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main>
      <Landing />
      <Description />
      <Projects />
      {/* <AnimatePresence mode='wait'>

        {isLoading && <Preloader />}

      </AnimatePresence>


      <Description />

      <Projects />

      <SlidingImages />

      <Contact /> */}
    </main>
  );
}
