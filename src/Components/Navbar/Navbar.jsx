import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import logo from "../../Logosrc/logo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbarContainer}>
      {/* --- Top Bar --- */}
      <div className={styles.topBar}>
        <div className={styles.logo}>
          <RouterLink to="/">
            <img src={logo} alt="Tobams Group Logo" />
          </RouterLink>
        </div>

        <div className={styles.topRight}>
          <div className={styles.accountDropdown}>
            <button className={styles.accountBtn}>
              <i className="fas fa-user-circle"></i> Account ▼
            </button>
            <ul className={styles.dropdownMenu}>
              <li><RouterLink to="/login">Login</RouterLink></li>
              <li><RouterLink to="/register">Register</RouterLink></li>
              <li><RouterLink to="/profile">Profile</RouterLink></li>
            </ul>
          </div>

          <RouterLink to="/assessment" className={styles.assessmentBtn}>
            Take Assessment
          </RouterLink>
        </div>
      </div>

      {/* --- Bottom Navbar --- */}
      <nav className={styles.bottomNav}>
        <ul className={styles.navLinks}>
          <li><ScrollLink to="about" smooth duration={600} offset={-70}>About</ScrollLink></li>
          <li><ScrollLink to="whatwedo" smooth duration={600} offset={-70}>What We Do</ScrollLink></li>
          <li><ScrollLink to="jobs" smooth duration={600} offset={-70}>Jobs</ScrollLink></li>
          <li><ScrollLink to="projects" smooth duration={600} offset={-70}>Projects</ScrollLink></li>
          <li><RouterLink to="/academy">TG Academy</RouterLink></li>
          <li><RouterLink to="/partnership">Strategic Partnership</RouterLink></li>
          <li><RouterLink to="/pricing">Pricing</RouterLink></li>
          <li><RouterLink to="/consultation">Book a Consultation</RouterLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
