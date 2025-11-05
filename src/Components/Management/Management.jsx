import React from "react";
import styles from "./Management.module.css";
import management from "../../assets/management.jpg";

const Management = () => {
  return (
    <section className={styles.managementSection}>
      <div className={styles.imageContainer}>
        <img src={management} alt="Management Development Program" />
      </div>

      <div className={styles.content}>
        <h2>Management Development Program</h2>
        <p>
          Tobams Group offers a comprehensive Management Development Program
          designed to equip corporate organisations with the high-level
          management skills they need to thrive.
        </p>
        <p>
          Our program includes workshops, seminars, coaching sessions, online
          courses, and experiential learning opportunities designed to improve
          leadership performance and strategic decision-making.
        </p>
      </div>
    </section>
  );
};

export default Management;
