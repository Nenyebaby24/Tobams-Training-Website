import React from "react";
import styles from "./Capacity.module.css";
import capacity from "../../assets/capacity.jpg";

const Capacity = () => {
  return (
    <section className={styles.capacitySection}>
      <div className={styles.content}>
        <h2>Capacity Development</h2>
        <p>
          At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success.
        </p>
        <ul>
          <li>Tailored Training Programs</li>
          <li>Expert-Led Workshops</li>
          <li>Personalized Mentorship</li>
          <li>Technical Skills Enhancement</li>
          <li>Collaborative Learning Environment</li>
          <li>Ongoing Support and Resources</li>
        </ul>
      </div>

      <div className={styles.imageContainer}>
        <img src={capacity} alt="Capacity Development" />
      </div>
    </section>
  );
};

export default Capacity;
