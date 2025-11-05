import React from "react";
import styles from "./LearningSection.module.css";
import ims from "../../assets/ims.jpg";

const LearningSection = () => {
  return (
    <section className={styles.learningSection}>
      <div className={styles.container}>
        {/* Image on the left */}
        <div className={styles.imageContainer}>
          <img src={ims} alt="Learning Management System" />
        </div>

        {/* Text Content */}
        <div className={styles.textContainer}>
          <h2>Learning Management System</h2>
          <p>
            TG Academy is a hub of knowledge and skill-building resources designed
            to empower tech talents on their learning journey. From technical courses
            covering the latest programming languages and development frameworks to
            soft skills training in leadership, effective communication, and project
            management, TG Academy offers a wide range of courses to cater to diverse
            learning needs.
          </p>
          <p>
            With accessible and interactive learning methods, learners can enhance
            their skills and stay ahead in today’s competitive tech landscape.
          </p>

          <div className={styles.courseList}>
            <ul>
              <li>Business Analysis</li>
              <li>Design Thinking</li>
              <li>Effective Communication</li>
              <li>Entrepreneurship</li>
              <li>Career Development</li>
              <li>Business Model</li>
            </ul>
          </div>

          <button className={styles.learnMore}>Learn More →</button>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;

