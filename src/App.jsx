import React from "react";
import { Element } from "react-scroll";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";

import ConsultationCTA from "./Components/ConsultationCTA/ConsultationCTA";
import LearningSection from "./Components/LearningSection/LearningSection";
import CorporateTraining from "./Components/CorporateTraining/CorporateTraining";
import IndividualTraining from "./Components/IndividualTraining/IndividualTraining";
import Capacity from "./Components/Capacity/Capacity";
import Management from "./Components/Management/Management";
import TransformationHub from "./Components/TransformationHub/TransformationHub";
import TrainingConsultant from "./Components/TrainingConsultant/TrainingConsultant";

import corporate from "./assets/corporate.jpg";
import individual from "./assets/individual.jpg";
import capacity from "./assets/capacity.jpg";
import management from "./assets/management.jpg";
import hub from "./assets/hub.jpg";

function App() {
  return (
    <>
      {/* BACK TO PORTFOLIO BUTTON */}
      <a
        href="https://your-portfolio-url.com" // <-- replace with your actual portfolio URL
        style={{
          display: "inline-block",
          margin: "20px",
          fontSize: "18px",
          fontWeight: "bold",
          textDecoration: "none",
          color: "#333",
        }}
      >
        ← Back to Portfolio
      </a>

      <Navbar />

      {/* Hero Section */}
      <Element name="about">
        <Hero />
      </Element>

      {/* What We Do Section */}
      <Element name="whatwedo">
        <LearningSection />
      </Element>

      {/* Jobs Section */}
      <Element name="jobs">
        <CorporateTraining image={corporate} />
        <IndividualTraining image={individual} />
      </Element>

      {/* Projects Section */}
      <Element name="projects">
        <Capacity image={capacity} />
        <Management image={management} />
        <TransformationHub image={hub} />
        <TrainingConsultant />
      </Element>

      {/* Consultation Call to Action */}
      <ConsultationCTA />

      {/* Testimonials */}
      <Element name="testimonials">
        <Testimonials />
      </Element>

      <Footer />
    </>
  );
}

export default App;

