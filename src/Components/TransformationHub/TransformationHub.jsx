
     import React from "react";
import styles from "./TransformationHub.module.css";
import hub from "../../assets/hub.jpg";

export default function TransformationHub() {
  return (
    <section className={styles.transformationSection} id="transformation-hub">
      <div className={styles.container}>
        <div className={styles.headerText}>
          <p className={styles.subheading}>Learning With Our CEO:</p>
          <h2 className={styles.title}>Transformation Hub With Jite Newton</h2>
          <p className={styles.description}>
            Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, 
            Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, 
            this exclusive event offers invaluable insights and strategies for personal and professional 
            growth. Whether you're seeking to advance your career or enhance your leadership skills, 
            the Transformation Hub provides a transformative learning experience to unlock your full 
            potential and drive success in your endeavours.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.imageBox}>
            <img src={hub} alt="Transformation Hub" className={styles.image} />
          </div>

          <div className={styles.infoBox}>
            <div className={styles.infoItems}>
              <span>⚡︎  Strategic Career Guidance</span>
              <span>⚡︎  Leadership Development</span>
              <span>⚡︎  CV Development</span>
              <span>⚡︎  Sustainability Leadership</span>
              <span>⚡︎  Communication Skills</span>
              <span>⚡︎  Business Model</span>
            </div>
            <button className={styles.learnMore}>Learn More →</button>
          </div>
        </div>
      </div>
    </section>
  );
}
     
          
       
