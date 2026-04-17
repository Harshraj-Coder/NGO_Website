import React from "react";
import { Link } from "react-router-dom";

import "../styles/Home.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      {/* HERO */}
      <section className="hero">
        <div className="hero-slide active">
          <div className="hero-bg" style={{ backgroundImage: "url('/images/hero1.jpg')" }}></div>
          <div className="hero-content">
            <div className="hero-box">CONSERVE</div>
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="welcome">
        <div className="welcome-container">
          <div className="welcome-text">
            <h4 className="welcome-small">Welcome to <span>Aarey Key</span></h4>
            <h1 className="welcome-title">Rescue, Conserve, Coexist</h1>
            <div className="divider">
              <span></span>
              <i>🐾</i>
              <span></span>
            </div>

            <p className="welcome-desc">
              Aarey Key is a wildlife conservation initiative dedicated to rescuing injured animals,
              protecting natural habitats, and promoting peaceful coexistence between humans and wildlife. 
              Founded by passionate volunteers, our mission is to safeguard biodiversity and create a 
              sustainable ecological future through rescue operations, treatment, conservation, and public awareness.
            </p>

            <div className="welcome-buttons">
              <a href="/about" className="btn-primary">About Us</a>
              <a href="/getinvolved" className="btn-secondary">Volunteer</a>
            </div>
          </div>

          <div className="welcome-image">
            <img src="/images/welcome.png" alt="Wildlife Rescue" />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="overview-simple">
        <div className="overview-simple-container">
          <h1 className="overview-simple-title">
            Our Mission to Protect and Coexist with Wildlife
          </h1>

          <p className="overview-simple-desc">
            At Aarey Key Foundation, we follow a holistic and compassionate approach to wildlife conservation.
            Our work begins with rescuing injured and vulnerable animals, providing professional medical treatment, 
            and supporting their recovery and rehabilitation. Beyond rescue, we focus on habitat conservation, 
            ecological restoration, and community education to ensure long-term sustainability. 
            Through awareness programs, student engagement, and scientific conservation efforts, 
            we strive to create a future where humans and wildlife coexist safely and sustainably.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="impact-highlights" className="services">

        <div className="services-header">
          <h4>Our Services</h4>
          <h2>What We Do ?</h2>

          <div className="divider">
            <span></span>
            <i>🐾</i>
            <span></span>
          </div>
        </div>

        {/* IMPORTANT: container wrapper */}
        <div className="services-container">

          {/* CARD 1 */}
          <Link to="/rescue" className="service-link">
            <div className="service-card">
              <div className="image-wrapper">
                <img src="/images/rescue.jpeg" alt="rescue" />

                <div className="icon-circle">🐾</div>

                <div className="read-more-overlay">
                  <span>Read More →</span>
                </div>
              </div>
              <div className="card-content">
                <h3>Wildlife Rescue & Fostering</h3>
                <p>
                  Emergency rescue, treatment, and temporary fostering of injured or distressed wildlife.
                </p>
              </div>
            </div>
          </Link>

          {/* CARD 2 */}
          <Link to="/treatment" className="service-link">
            <div className="service-card">
              <div className="image-wrapper">
                <img src="/images/tree plant.webp" alt="tree" />
                <div className="icon-circle">🐾</div>

                <div className="read-more-overlay">
                  <span>Read More →</span>
                </div>
              </div>
              <div className="card-content">
                <h3>Habitat Restoration & Tree Plantation</h3>
                <p>
                  Restoring ecosystems through plantation drives and conservation initiatives.
                </p>
              </div>
            </div>
          </Link>

          {/* CARD 3 */}
          <Link to="/awareness" className="service-link">
            <div className="service-card">
              <div className="image-wrapper">
                <img src="/images/awareness.jpg" alt="awareness" />
                <div className="icon-circle"></div>

                <div className="read-more-overlay">
                  <span>Read More →</span>
                </div>
              </div>

              <div className="card-content">
                <h3>Education & Awareness</h3>
                <p>
                  Educating communities and students about wildlife conservation.
                </p>
              </div>
            </div>
          </Link>

        </div>
      </section>

      <section id="latest-updates">
        <div className="section-header">
          <h4>Aarey Key</h4>
          <h2>Latest Updates</h2>

          <div className="divider">
            <span></span>
            🐾
            <span></span>
          </div>
        </div>

        {/* LATEST UPDATES */}
        <div className="updates-container">
          <div className="update-card">

            <a href="https://youtu.be/gm-6QX12N0k?si=eC35lbpdBbzVs7SF"
              target="_blank" className="image-link">
              <img src="images/rescue1.jpeg"/>
              <div className="youtube-icon">
              <i className="fa-brands fa-youtube"></i>
              </div>
            </a>

            <div className="card-content">
              <h3>RESCUE - Giant Python and Three Venomous Snakes Released</h3>

              <p>
              Our rescue team successfully treated and released an injured giant python and three venomous snakes
              found in Aarey Forest. Watch the full rescue story.
              </p>
            </div>
          </div>
          <div className="update-card">

            <a href="https://youtu.be/mfNvBn7Dm8Q?si=D4Eay0zGkRz5ow2M"
              target="_blank" className="image-link">
              <img src="images/vine.jpg"/>
              <div className="youtube-icon">
              <i className="fa-brands fa-youtube"></i>
              </div>
            </a>


            <div className="card-content">
              <h3>TREATMENT - Indian Vine Snake Rescue</h3>

              <p>
              Emergency medical treatment provided to an injured vine snake.
              Click to see how our team saved its life.
              </p>
            </div>

          </div>
          <div className="update-card">

            <a href="https://youtu.be/3sVPxsYsb1c?si=5lvtF26qygoWYmwK"
              target="_blank" className="image-link">
              <img src="images/ndtv.jpg"/>
              <div className="youtube-icon">
              <i className="fa-brands fa-youtube"></i>
              </div>
            </a>

            <div className="card-content">
              <h3>VOLUNTEERS - NDTV interview's Aarey Key Foundation, Illegal trimmings in Aarey forest.</h3>

              <p>
              Volunteers helping rescue stranded wildlife.
              Click to see their real field work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="support-section">

        <div className="support-wave">
          <svg viewBox="0 0 1440 180" preserveAspectRatio="none">
            <path d="M0,80 C360,20 1080,20 1440,80 L1440,0 L0,0 Z"></path>
          </svg>
        </div>
        <div className="support-container">

          <h1 className="support-heading">
            Your Support, Their Second Chance <br/>
            at a Healthier, Safer Life
          </h1>

          <p className="support-text">
            At Aarey Key, every rescue, treatment, and conservation effort is powered by compassionate
            individuals like you. Your contribution helps protect wildlife, restore habitats, and build a sustainable
            future where humans and nature coexist peacefully.
          </p>

          <div className="support-buttons">
            <a href="donate.html" className="support-donate-btn">Donate Now</a>
            <span className="support-or">or</span>
            <a href="getinvolved.html" className="support-volunteer-btn">Be a Volunteer</a>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;

