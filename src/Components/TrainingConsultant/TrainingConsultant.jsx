import React from "react";
import styles from "./TrainingConsultant.module.css";

const TrainingConsultant = () => {
  return (
    <section className={styles.consultantSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Training The Consultant</h2>
        <p className={styles.subtitle}>
          Maximise Your Potential as a Certified Trainer:
        </p>

        <p className={styles.description}>
          With the help of our Training Consultants program, take a revolutionary
          step toward becoming a distinguished certified training consultant.
          Learn from professionals in the field, immerse yourself in a thorough
          curriculum, and hone your training methods through interactive
          workshops. Participating in our program will enable you to gain
          expertise in diverse courses while also developing the abilities to
          mentor and encourage others in their career advancement.
        </p>

        {/* Single maroon box containing all details */}
        <div className={styles.infoBox}>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <h4>Expert-Led Learning</h4>
              <p>
                Gain insight from seasoned professionals in the field as they
                mentor you through the subtleties of business analysis.
              </p>
            </div>

            <div className={styles.infoItem}>
              <h4>Interactive Workshops</h4>
              <p>
                Engage in hands-on workshops designed to enhance your training
                capabilities and provide practical insights.
              </p>
            </div>

            <div className={styles.infoItem}>
              <h4>Comprehensive Curriculum</h4>
              <p>
                Access a robust curriculum that covers fundamental principles and
                advanced methodologies, ensuring a well-rounded understanding.
              </p>
            </div>

            <div className={styles.infoItem}>
              <h4>Global Recognition</h4>
              <p>
                You will attain a globally recognized certification, opening doors
                to new career opportunities and industry recognition.
              </p>
            </div>
          </div>
        </div>

        <button className={styles.learnMore}>Learn More ↗</button>
      </div>
    </section>
  );
};

export default TrainingConsultant;


