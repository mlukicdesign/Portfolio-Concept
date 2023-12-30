"use client";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import styles from "./styles.module.scss";
import { useRef, useLayoutEffect } from "react";


export default function Header() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;



  useLayoutEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5, // Adjust the scrub value to slow down the xScroll speed
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-1000px",
    })
    requestAnimationFrame(animate);
  }, [])

  

//xPercent is set at -100% and gradually icrements to 0%. When it reaches 0% it is reset to -100% and the animation starts again.

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
requestAnimationFrame(animate);
    xPercent += 0.02 * direction;
  }


  

return (
  <main className={styles.main}>
    <Image src="/images/background.jpg" 
    fill={true} 
    alt="Background" 
    background="true"
    styles={styles.backgroundImage}
    />
    <div className={styles.sliderContainer}>
      <div ref={slider} className={styles.slider}>
        <p ref={firstText}>Freelance Developer</p>
        <p ref={secondText}>Freelance Developer</p>
      </div>
    </div>
  </main>
);
}