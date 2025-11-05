import React from "react";
import styles from "./TransformationHub.module.css";
import hub from "../../assets/hub.jpg";

const TransformationHub = () => {
  return (
    <section className={styles.hubSection}>
      <div className={styles.content}>
        <h3>Learning With Our CEO:</h3>
        <h2>Transformation Hub With Jite Newton</h2>
        <p>
          Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you're seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.
        </p>

        <div className={styles.skillsGrid}>
          <div>⚡ Strategic Career Guidance</div>
          <div>⚡ Leadership Development</div>
          <div>⚡ CV Development</div>
          <div>⚡ Sustainability Leadership</div>
          <div>⚡ Communication Skills</div>
          <div>⚡ Business Model</div>
        </div>

        <button className={styles.learnBtn}>Learn More ↗</button>
      </div>

      <div className={styles.imageContainer}>
        <img src={hub} alt="Transformation Hub" />
      </div>
    </section>
  );
};

export default TransformationHub;
