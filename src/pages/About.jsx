import React from "react";
import "../styles/About.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <section className="about-hero">
        <div className="overlay">
          <h1>About AAREY KEY</h1>
        </div>
      </section>

      <section className="about-container">
        {/* ABOUT */}
        <section className="about-section" id="about">
          <div className="about-row">
            <div className="about-image">
              <img src="/images/tree1.webp" alt="tree" />
            </div>

            <div className="about-text">
              <h2>About AAREY KEY</h2>

              <p>
                AAREY KEY is a youth-driven environmental initiative dedicated
                to protecting the biodiversity and ecological balance of Aarey
                Forest.
              </p>

              <p>
                Our focus is on bridging the gap between development and nature
                through awareness programs and grassroots action.
              </p>
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section className="about-section" id="mission">
          <div className="about-row reverse">
            <div className="about-image">
              <img src="/images/tree.jpg" alt="tree" />
            </div>

            <div className="about-text">
              <h2>Mission & Vision</h2>

              <p>
                To safeguard Aarey's ecosystem through awareness campaigns and
                conservation.
              </p>

              <h3>Vision</h3>

              <p>A future where urban development coexists with nature.</p>
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="about-section" id="journey">
          <div className="about-row">
            <div className="about-image">
              <img src="/images/treehero.webp" alt="tree" />
            </div>

            <div className="about-text">
              <h2>Our Journey</h2>

              <p>
                AAREY KEY began as a student-led movement preserving green
                spaces.
              </p>

              <p>Through campaigns and advocacy, we amplify nature’s voice.</p>
            </div>
          </div>
        </section>

        {/* GOVERNANCE */}
        <section className="about-section" id="governance">
          <div className="about-row reverse">
            <div className="about-image">
              <img src="/images/tree plant.webp" alt="planting" />
            </div>

            <div className="about-text">
              <h2>Governance & Ethics</h2>

              <ul>
                <li>Transparent decision-making</li>
                <li>Community engagement</li>
                <li>Data-driven advocacy</li>
                <li>Responsible resource management</li>
              </ul>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </>
  );
}

export default About;
