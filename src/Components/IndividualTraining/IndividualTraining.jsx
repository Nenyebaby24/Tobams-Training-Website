import React from "react";
import styles from "./IndividualTraining.module.css";
import individual from "../../assets/individual.jpg";

const IndividualTraining = () => {
  return (
    <section className={styles.trainingSection}>
      <div className={styles.imageContainer}>
        <img src={individual} alt="Individual Training" />
      </div>

      <div className={styles.content}>
        <h2>Personalised Individual Training</h2>
        <p>
          Begin a journey of lifelong learning and professional development with Tobams Group’s diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today’s professionals.
        </p>
        <ul>
          <li>Leadership Development</li>
          <li>Soft Skills Development</li>
          <li>Industry Specific Knowledge</li>
          <li>Technical Skills Enhancement</li>
          <li>Time Management and Productivity</li>
          <li>Career Development</li>
        </ul>
      </div>
    </section>
  );
};

export default IndividualTraining;
