import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styles from "./Hero.module.css";
import heroBg from "../../assets/hero.jpg"; // Replace with your actual hero image

const Hero = () => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        {/* Top Tag */}
        <span className={styles.tag}>WHAT WE DO</span>

        {/* Title */}
        <h1 className={styles.title}>Training and Development</h1>

        {/* Description */}
        <p className={styles.text}>
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today’s ever-evolving landscape.
        </p>

        {/* Main Button */}
        <RouterLink to="/consultation" className={styles.solidBtn}>
          Book a Consultation
        </RouterLink>
      </div>
    </section>
  );
};

export default Hero;
