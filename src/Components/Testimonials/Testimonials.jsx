import React from "react";
import styles from "./Testimonials.module.css";
import t1 from "../../assets/testimonial1.jpg";
import t2 from "../../assets/testimonial2.jpg";
import t3 from "../../assets/testimonial3.jpg";

const Testimonials = () => {
  const data = [
    { image: t1, name: "Jane Doe", text: "The training was practical and highly engaging." },
    { image: t2, name: "Michael Smith", text: "I’ve seen real transformation in my career." },
    { image: t3, name: "Sarah Johnson", text: "Excellent facilitators and structured content!" },
  ];

  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>Testimonials</h2>
      <div className={styles.row}>
        {data.map((item, i) => (
          <React.Fragment key={i}>
            <div className={styles.card}>
              <img src={item.image} alt={item.name} className={styles.image} />
              <p className={styles.text}>"{item.text}"</p>
              <h4 className={styles.name}>{item.name}</h4>
            </div>
            {/* Vertical divider except after the last card */}
            {i < data.length - 1 && <div className={styles.divider}></div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

