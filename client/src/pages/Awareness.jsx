import React from "react";
import "../styles/Awareness.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function EducationAwareness() {
  return (
    <>
      <Navbar />
      {/* Slider */}
      <section className="slider">
        <div className="slides">
          <a href="#school-awareness" className="slide slide1 active">
            <div className="overlay">
              <h1>School Awareness Programs</h1>
            </div>
          </a>

          <a href="#college-lectures" className="slide slide2">
            <div className="overlay">
              <h1>College Lectures & Workshops</h1>
            </div>
          </a>

          <a href="#public-awareness" className="slide slide3">
            <div className="overlay">
              <h1>Public Awareness Campaigns</h1>
            </div>
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="education-intro">
        <h2>Education & Environmental Awareness</h2>

        <p>
          At Aarey Key, education plays a critical role in protecting wildlife
          and preserving ecosystems. Through school programs, college workshops,
          and public awareness campaigns, we empower communities with knowledge
          to safeguard biodiversity and promote sustainable coexistence with nature.
        </p>
      </section>

      {/* Main Content */}
      <div className="education-container">

        {/* School Programs */}
        <div className="category" id="school-awareness">
          <h2>School Awareness Programs</h2>

          <div className="gallery">
            <div className="education-card">
              <img src="../images/school-session.jpg" alt="" />
              <div className="education-info">
                <h3>School Lecture</h3>
                <p>Educating students about wildlife and environmental protection.</p>
              </div>
            </div>

            <div className="education-card">
              <img src="/images/school-poster.jpg" alt="" />
              <div className="education-info">
                <h3>Poster Awareness</h3>
                <p>Visual learning through aesthetic environmental posters.</p>
              </div>
            </div>

            <div className="education-card">
              <img src="/images/student-interaction.jpg" alt="" />
              <div className="education-info">
                <h3>Student Interaction</h3>
                <p>Interactive sessions to inspire young conservationists.</p>
              </div>
            </div>
          </div>
        </div>

        {/* College Programs */}
        <div className="category" id="college-lectures">
          <h2>College Lectures & Workshops</h2>

          <div className="gallery">
            <div className="education-card">
              <img src="/images/college-lecture.jpg" alt="" />
              <div className="education-info">
                <h3>Guest Lectures</h3>
                <p>Delivering lectures on conservation and wildlife protection.</p>
              </div>
            </div>

            <div className="education-card">
              <img src="/images/workshop.jpg" alt="" />
              <div className="education-info">
                <h3>Workshops</h3>
                <p>Training students in environmental conservation practices.</p>
              </div>
            </div>

            <div className="education-card">
              <img src="/images/student-volunteers.jpg" alt="" />
              <div className="education-info">
                <h3>Volunteer Programs</h3>
                <p>Encouraging students to join conservation initiatives.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Public Campaigns */}
        <div className="category" id="public-awareness">
          <h2>Public Awareness Campaigns</h2>

          <div className="gallery">
            <div className="education-card">
              <img src="/images/public-campaign.jpg" alt="" />
              <div className="education-info">
                <h3>Awareness Drives</h3>
                <p>Spreading awareness through public outreach campaigns.</p>
              </div>
            </div>

            <div className="education-card">
              <img src="/images/poster-campaign.jpg" alt="" />
              <div className="education-info">
                <h3>Aesthetic Posters</h3>
                <p>Creative posters promoting environmental responsibility.</p>
              </div>
            </div>

            <div className="education-card">
              <img src="/images/community-session.jpg" alt="" />
              <div className="education-info">
                <h3>Community Education</h3>
                <p>Engaging communities in environmental conservation.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Impact */}
      <section className="education-impact">
        <h2>Our Educational Impact</h2>

        <div className="impact-grid">
          <div className="impact-box">
            <h3>5000+</h3>
            <p>Students Reached</p>
          </div>

          <div className="impact-box">
            <h3>120+</h3>
            <p>Workshops Conducted</p>
          </div>

          <div className="impact-box">
            <h3>40+</h3>
            <p>Schools Engaged</p>
          </div>

          <div className="impact-box">
            <h3>3000+</h3>
            <p>Community Members</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default EducationAwareness;