import React from "react";
import "../styles/Rescue.css";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function WildlifeRescue() {
  return (
    <>
      <Navbar />

      {/* Slider */}
      <section className="slider">
        <div className="slides">
          <a href="#mammals" className="slide slide1 active">
            <div className="overlay">
              <h1>Animal Rescue</h1>
            </div>
          </a>

          <a href="#reptiles" className="slide slide2">
            <div className="overlay">
              <h1>Reptile Rescue</h1>
            </div>
          </a>

          <a href="#birds" className="slide slide3">
            <div className="overlay">
              <h1>Bird Rescue</h1>
            </div>
          </a>
        </div>

        {/* Dots */}
        <div className="dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </section>

      {/* Wildlife Rescue Section */}
      <section className="wildlife-rescue-section">
        <div className="rescue-container">
          <h2 className="section-title">Wildlife Rescue Operations</h2>

          <p className="section-subtitle">
            Our rescue team works tirelessly to protect and rehabilitate
            injured, trapped, or displaced wildlife. Animals are carefully
            rescued, treated, and released back into their natural habitats.
          </p>

          <div className="rescue-cards">
            <div className="rescue-card">
              <img src="/images/leopard.webp" alt="Mammals Rescue" />
              <h3>Mammals Rescued</h3>
              <p>
                Rescue operations for mammals such as leopards, monkeys,
                and deer that enter urban areas or are injured due to
                human-wildlife conflict.
              </p>
            </div>

            <div className="rescue-card">
              <img src="/images/snake.webp" alt="Reptiles Rescue" />
              <h3>Reptiles Rescued</h3>
              <p>
                Safe relocation and rehabilitation of reptiles including
                snakes, crocodiles, and monitor lizards found in residential
                or urban zones.
              </p>
            </div>

            <div className="rescue-card">
              <img src="/images/birds.jpg" alt="Bird Rescue" />
              <h3>Birds Rescued</h3>
              <p>
                Treatment and recovery support for injured birds such as
                owls, eagles, and parrots before their safe return to the
                wild.
              </p>
            </div>
          </div>

          <div className="rescue-button">
            <a
              href="/getinvolved#volunteer-card"
              className="rescue-btn"
            >
              Join Our Rescue Volunteer Team
            </a>
          </div>
        </div>
      </section>

      {/* Fostering Section */}
      <section className="fostering-section">
        <div className="foster-container">
          <h2 className="foster-title">Wildlife Fostering Program</h2>

          <p className="foster-intro">
            When injured wildlife cannot immediately return to the wild,
            temporary fostering helps them recover in a safe environment.
            Our fostering network ensures animals receive care,
            rehabilitation, and preparation for release back into nature.
          </p>

          <div className="foster-grid">
            <div className="foster-card">
              <img src="/images/parrot.webp" alt="" />
              <h3>Bird Fostering</h3>
              <p>
                Temporary care for injured or displaced birds until they
                regain strength to fly.
              </p>
            </div>

            <div className="foster-card">
              <img src="/images/monkey.jpg" alt="" />
              <h3>Orphan Mammal Care</h3>
              <p>
                Young mammals rescued from urban areas are fostered until
                they can survive independently.
              </p>
            </div>

            <div className="foster-card">
              <img src="/images/reptileslider.jpg" alt="" />
              <h3>Reptile Rehabilitation</h3>
              <p>
                Specialized handling and observation before reptiles are
                released safely.
              </p>
            </div>
          </div>

          <div className="foster-button">
            <a
              href="/getinvolved#volunteer-card"
              className="foster-btn"
            >
              Become a Wildlife Foster Volunteer
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="rescue-stats">
        <h2>Our Wildlife Rescue Impact</h2>

        <div className="stats-grid">
          <div className="stat-box">
            <h3>850+</h3>
            <p>Animals Rescued</p>
          </div>

          <div className="stat-box">
            <h3>600+</h3>
            <p>Animals Released</p>
          </div>

          <div className="stat-box">
            <h3>120+</h3>
            <p>Active Volunteers</p>
          </div>

          <div className="stat-box">
            <h3>24/7</h3>
            <p>Emergency Rescue Support</p>
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section className="rescue-report">
        <h2>Report a Wildlife Emergency</h2>

        <p>
          If you find injured wildlife or animals in distress, please
          report immediately. Our rescue team will respond as quickly as
          possible.
        </p>

        <div className="alert-button-container">
          <a href="/contact" className="alert-button">
            🚨 ALERT
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default WildlifeRescue;