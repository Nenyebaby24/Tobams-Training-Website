import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import styles from "./Footer.module.css";
import logo from "../../Logosrc/logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>

      {/* TOP CTA */}
      <div className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h3>
            Ready to be part of something extraordinary?
            <span> Let’s work together to create a difference</span>
          </h3>
        </div>
        <RouterLink to="/contact" className={styles.ctaButton}>
          Get in Touch
        </RouterLink>
      </div>

      {/* MAIN FOOTER ROW:
          logo+socials on left, three columns on the right (What We Do / Company / Solutions)
      */}
      <div className={styles.mainRow}>
        <div className={styles.brandCol}>
          <img src={logo} alt="Logo" className={styles.footerLogo} />
          <p className={styles.brandText}>
            Tobams Group is an innovative consultancy driving digital transformation, social impact and growth.
          </p>

          <div className={styles.socials}>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className={styles.linksRow}>
          <div className={styles.linkCol}>
            <h4>What We Do</h4>
            <ul>
              <li> Sustainability Services </li>
              <li> Startup Funding & Strategy </li>
              <li> Training & Development </li>
              <li> Digital Marketing </li>
              <li> Social Impact </li>
              <li> Talent Recruitment </li>
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h4>Company</h4>
            <ul>
              <li> About Us </li>
              <li> Blog </li>
              <li> The Team </li>
              <li> Testimonials </li>
              <li> FAQs </li>
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h4>Solutions</h4>
            <ul>
              <li> Tobams Academy </li>
              <li> Slack Community </li>
              <li> Pricing </li>
              <li> Book a Consultation </li>
              <li> Help & Support </li>
            </ul>
          </div>
        </div>
      </div>

      {/* TRANSPARENT INFO SECTION WITH VERTICAL DIVIDERS (UK | Nigeria | Contact) */}
      <div className={styles.infoSection}>
        <div className={styles.infoItem}>
          <h5>United Kingdom</h5>
          <p>
            07541968 Registered by Company House<br />
            Kemp House, 152–160 City Road<br />
            London EC1V 2NX
          </p>
        </div>

        <div className={styles.verticalDivider} />

        <div className={`${styles.infoItem} ${styles.nigeria}`}>
          <h5>Nigeria</h5>
          <p>
            RC 1818222 Registered by CAC<br />
            4 Musa Close, Awoyaya, Lagos
          </p>
        </div>

        <div className={styles.verticalDivider} />

        <div className={`${styles.infoItem} ${styles.contact}`}>
          <h5>Contact Information</h5>
          <p>
            <a href="mailto:theteams@tobamsgroup.com">theteams@tobamsgroup.com</a><br />
            <a href="tel:+447886600748">+44 7886 600748</a>
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className={styles.bottomBar}>
        <p>© Tobams Group, {new Date().getFullYear()}. All rights reserved.</p>
        <div className={styles.policyLinks}>
          <RouterLink to="/terms">Terms</RouterLink>
          <RouterLink to="/privacy">Privacy</RouterLink>
          <RouterLink to="/cookies">Cookies</RouterLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;









