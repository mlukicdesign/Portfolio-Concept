"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useRef } from "react";

export default function Header() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);


return (
  <main className={styles.main}>
    <Image src="/images/background.jpg" fill={true} alt="Background" />
    <div className={styles.headerContainer}>
      <div ref={slider} className={styles.slider}>
        <div ref={firstText}>Freelance Developer</div>
        <div ref={secondText}>Freelance Developer</div>
      </div>
    </div>
  </main>
);
}