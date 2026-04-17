import React from "react";
import "../styles/getinvolved.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useEffect } from "react";

function GetInvolved() {

  // popup functions (converted from JS)
  const openVolunteer = () => {
    document.getElementById("volunteerPopup").style.display = "flex";
  };

  const openCSR = () => {
    document.getElementById("csrPopup").style.display = "flex";
  };

  const closePopup = (id) => {
    document.getElementById(id).style.display = "none";
  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="get-hero">
        <div className="get-hero-overlay">
          <h1>Get Involved with Wildlife Conservation</h1>
          <p>
            Your support powers every rescue,
            every treatment,
            and every life saved.
          </p>
        </div>
      </section>

      {/* DONATION SUPPORT */}
      <section id="support" className="donation-support">
        <div className="donation-container">

          {/* LEFT */}
          <div className="donation-left">
            <h5>SUPPORT OUR MISSION</h5>
            <h2>Your Donation Saves Lives</h2>

            <p>
              Every contribution directly supports wildlife rescue operations,
              habitat restoration, and community conservation programs.
              Your generosity makes the difference between life and death
              for countless animals.
            </p>

            <a href="/donate" className="donate-big-btn">
              Donate Now
            </a>
          </div>

          {/* RIGHT */}
          <div className="donation-right">
            <img src="/images/animal.jpg" alt="animal" />
          </div>

        </div>
      </section>

      {/* WAYS TO ENGAGE */}
      <section id="engage" className="engage-section">

        <div className="section-header">
          <h4>Aarey Key</h4>
          <h2>Ways You Can Help</h2>

          <div className="divider">
            <span></span>
            🐾
            <span></span>
          </div>
        </div>

        <div className="engage-container">

          {/* DONATE */}
          <div id="donate-card" className="engage-card">
            <i className="fa-solid fa-hand-holding-heart"></i>

            <h3>Donate</h3>

            <p>
              Support wildlife rescue,
              treatment, and habitat restoration
              through your financial contribution.
            </p>

            <a href="/donate" className="engage-btn">
              Donate Now
            </a>
          </div>

          {/* VOLUNTEER */}
          <div id="volunteer-card" className="engage-card">
            <i className="fa-solid fa-user-group"></i>

            <h3>Volunteer & Intern</h3>

            <p>
              Join rescue missions,
              awareness programs,
              and conservation activities.
            </p>

            <button onClick={openVolunteer} className="engage-btn">
              Join Now
            </button>
          </div>

          {/* CSR */}
          <div id="csr" className="engage-card">
            <i className="fa-solid fa-building"></i>

            <h3>Corporate & CSR</h3>

            <p>
              Partner with us to create meaningful
              environmental and social impact.
            </p>

            <button onClick={openCSR} className="engage-btn">
              Partner With Us
            </button>
          </div>

        </div>
      </section>

      {/* VOLUNTEER POPUP */}
      <div className="popup" id="volunteerPopup">
        <div className="popup-box">
          <span
            className="close"
            onClick={() => closePopup("volunteerPopup")}
          >
            X
          </span>

          <h2>Volunteer with Aarey Key</h2>

          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="City" />

            <textarea placeholder="Why do you want to volunteer?"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* CSR POPUP */}
      <div className="popup" id="csrPopup">
        <div className="popup-box">
          <span
            className="close"
            onClick={() => closePopup("csrPopup")}
          >
            X
          </span>

          <h2>Corporate Partnership</h2>

          <form>
            <input type="text" placeholder="Company Name" required />
            <input type="email" placeholder="Official Email" required />

            <textarea placeholder="Partnership proposal"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default GetInvolved;