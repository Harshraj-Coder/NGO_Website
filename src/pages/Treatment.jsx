import React from "react";
import "../styles/Treatment.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MedicalTreatment() {
  return (
    <>
      <Navbar />
      {/* Slider */}
      <section className="slider">
        <div className="slides">
          <a href="#animal-treatment" className="slide slide1 active">
            <div className="overlay">
              <h1>Animal Medical Care</h1>
            </div>
          </a>

          <a href="#plant-treatment" className="slide slide2">
            <div className="overlay">
              <h1>Plant & Tree Treatment</h1>
            </div>
          </a>

          <a href="#forest-restoration" className="slide slide3">
            <div className="overlay">
              <h1>Forest Ecosystem Restoration</h1>
            </div>
          </a>
        </div>

        <div className="dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </section>

      {/* Habitat */}
      <section className="habitat-section">
        <h2>Habitat Restoration Initiatives</h2>

        <div className="habitat-grid">
          <div className="habitat-card">
            <img src="/images/forest.jpg" alt="" />
            <div className="habitat-content">
              <h3>Tree Plantation</h3>
              <p>
                Native tree plantation programs help rebuild forest
                ecosystems and provide shelter for wildlife.
              </p>
            </div>
          </div>

          <div className="habitat-card">
            <img src="/images/wetlands.jpeg" alt="" />
            <div className="habitat-content">
              <h3>Wetland Restoration</h3>
              <p>
                Reviving wetlands ensures healthy ecosystems for birds,
                reptiles, and aquatic life.
              </p>
            </div>
          </div>

          <div className="habitat-card">
            <img src="/images/soil.jpg" alt="" />
            <div className="habitat-content">
              <h3>Soil & Ecosystem Recovery</h3>
              <p>
                Restoring soil health and biodiversity in degraded
                ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="habitat-impact">
        <h2>Our Restoration Impact</h2>

        <div className="impact-grid">
          <div className="impact-box">
            <h3>10,000+</h3>
            <p>Trees Planted</p>
          </div>

          <div className="impact-box">
            <h3>50+</h3>
            <p>Restoration Sites</p>
          </div>

          <div className="impact-box">
            <h3>500+</h3>
            <p>Volunteers</p>
          </div>

          <div className="impact-box">
            <h3>25+</h3>
            <p>Community Projects</p>
          </div>
        </div>
      </section>

      {/* Ecosystem Threats */}
      <section className="ecosystem-threats">
        <div className="threats-container">
          <div className="threats-left">
            <h2>Ecosystem Threats</h2>
            <img
              src="/images/ecosystemthreat.jpeg"
              className="threats-image"
              alt=""
            />
            <p className="threats-intro">
              Rapid environmental degradation is placing immense pressure
              on natural ecosystems...
            </p>
          </div>

          <div class="threats-right">

            <div class="threat-row">
              <div class="threat-line"></div>
              <div class="threat-text">
                <h3>Deforestation</h3>
                <p>
                  Large-scale tree removal destroys natural habitats and disrupts the
                  delicate ecological balance necessary for wildlife survival.
                </p>
              </div>
            </div>

            <div class="threat-row">
              <div class="threat-line"></div>
              <div class="threat-text">
                <h3>Forest Fires</h3>
                <p>
                  Wildfires devastate forest ecosystems, leaving soil infertile and
                  destroying biodiversity that took decades to develop.
                </p>
              </div>
            </div>


            <div class="threat-row">
              <div class="threat-line"></div>
              <div class="threat-text">
                <h3>Urban Expansion</h3>
                <p>
                  Infrastructure development fragments wildlife habitats and
                  increases human-animal conflict in surrounding areas.
                </p>
              </div>
            </div>


            <div class="threat-row">
              <div class="threat-line"></div>
              <div class="threat-text">
                <h3>Pollution</h3>
                <p>
                  Industrial waste and plastic pollution contaminate water bodies,
                  soil systems, and the food chain of wildlife.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Process */}
      <section className="restoration-process">
        <h2 className="process-title">Restoration Process</h2>

        <div className="process-flow">
          {["Environmental Assessment", "Habitat Recovery", "Native Plantation", "Wildlife Monitoring"].map((step, i) => (
            <div className="process-step" key={i}>
              <div className="process-number">0{i + 1}</div>
              <h3>{step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Before After */}
      <section className="before-after">
        <h2 className="section-title">Before & After Restoration</h2>

        <div className="before-grid">
          <div className="before-card">
            <img src="/images/before.png" alt="" />
            <h3>Before Restoration</h3>
          </div>

          <div className="before-card">
            <img src="/images/after.png" alt="" />
            <h3>After Restoration</h3>
          </div>
        </div>
      </section>

      {/* Volunteer  */}
      <section className="volunteer-restoration">
        <h2>Become a Restoration Volunteer</h2>

        <p>
          Join our volunteers in planting trees, restoring wetlands,
          and protecting biodiversity.
        </p>

        <a
          href="/getinvolved#volunteer-card"
          className="volunteer-btn"
        >
          Join Restoration Program
        </a>
      </section>

      {/* Map */}
      <section className="restoration-map">
        <h2 className="section-title">Restoration Sites Map</h2>

        <p className="section-subtitle">
          Explore locations where habitat restoration projects are underway.
        </p>

        <div className="map-container">
          <iframe
            src="https://maps.google.com/maps?q=aarey%20forest&t=&z=13&ie=UTF8&iwloc=&output=embed"
            title="map"
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default MedicalTreatment;