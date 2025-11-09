import React from "react";
import styles from "./Management.module.css";
import management from "../../assets/management.jpg";

const Management = () => {
  const features = [
    "Enhanced Leadership Skills",
    "Improved Employee Engagement",
    "Stronger Organisational Culture",
    "Sustainable Growth",
  ];

  return (
    <section className={styles.managementSection}>
      <div className={styles.purpleBox}>
        {/* Left: image inside white card */}
        <div className={styles.imageWrap}>
          <div className={styles.imageCard}>
            <img src={management} alt="Management Development Program" />
          </div>
        </div>

        {/* Right: text + features */}
        <div className={styles.content}>
          <h2 className={styles.title}>Management Development Program</h2>

          <p className={styles.lead}>
            Tobams Group offers a comprehensive Management Development Program
            designed to equip corporate organisations with the high-performing
            leaders they need to thrive.
          </p>

          <p className={styles.desc}>
            Our program includes workshops, seminars, coaching sessions, online
            courses, and experiential learning opportunities designed to improve
            leadership performance and strategic decision-making for corporate
            organisations.
          </p>

          <div className={styles.features}>
            {features.map((f, i) => (
           <div className={styles.featureRow} key={i}>
                 <span className={styles.bullet}>⚡︎</span>
                <span className={styles.featureText}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

              
export default Management;







