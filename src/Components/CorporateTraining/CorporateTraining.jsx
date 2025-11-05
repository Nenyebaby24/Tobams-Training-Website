import React from "react";
import styles from "./CorporateTraining.module.css";
import corporate from "../../assets/corporate.jpg";

const CorporateTraining = () => {
  return (
    <section className={styles.corporateTraining}>
      <div className={styles.content}>
        <h2>Corporate Trainings</h2>
        <p>
          Empower your team with our customised Corporate Training programs
          designed to address the unique needs and objectives of your
          organisation. Our expert facilitators work closely with your team to
          deliver tailored learning experiences that align with your company’s
          goals and values.
        </p>

        <ul>
          <li>Leadership Training</li>
          <li>Strategic Planning and Implementation</li>
          <li>Project Management</li>
          <li>Sustainability Training</li>
          <li>Customised Training</li>
        </ul>
      </div>

      <div className={styles.imageContainer}>
        <img src={corporate} alt="Corporate Training" />
      </div>
    </section>
  );
};

export default CorporateTraining;
