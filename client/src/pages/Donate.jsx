import React, { useState } from "react";
import "../styles/Donate.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Donate() {
  const [amount, setAmount] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const selectAmount = (value) => {
    setAmount(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="donate-hero">
        <div className="donate-overlay">
          <h1>Give Wildlife a Second Chance</h1>
          <p>
            Your donation directly supports rescue operations,
            medical treatment, and habitat restoration.
          </p>
        </div>
      </section>

      {/* DONATION SECTION */}
      <section className="donation-section">
        <div className="donation-container">

          {/* LEFT SIDE */}
          <div className="donation-impact">
            <h2>Your Impact</h2>

            <div className="impact-box">🐾 ₹500 – Emergency rescue support</div>
            <div className="impact-box">🩺 ₹1000 – Medical treatment</div>
            <div className="impact-box">🌿 ₹2500 – Habitat restoration</div>
            <div className="impact-box">🦉 ₹5000 – Full recovery & release</div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="donation-form">
            <h2>Make a Donation</h2>

            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />

              <div className="amount-options">
                <button type="button" onClick={() => selectAmount(500)}>₹500</button>
                <button type="button" onClick={() => selectAmount(1000)}>₹1000</button>
                <button type="button" onClick={() => selectAmount(2500)}>₹2500</button>
                <button type="button" onClick={() => selectAmount(5000)}>₹5000</button>
              </div>

              <input
                type="number"
                placeholder="Custom Amount (₹)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />

              {/* PAYMENT METHODS */}
              <div className="payment-methods">
                <label>
                  <input type="radio" name="payment" defaultChecked /> UPI
                </label>
                <label>
                  <input type="radio" name="payment" /> Credit/Debit Card
                </label>
                <label>
                  <input type="radio" name="payment" /> Net Banking
                </label>
              </div>

              <button type="submit" className="pay-btn">
                Proceed to Secure Payment
              </button>
            </form>

            <p className="secure-note">🔒 100% Secure Payment Gateway</p>
          </div>
        </div>
      </section>

      {/* THANK YOU POPUP */}
      {showPopup && (
        <div className="popup">
          <div className="popup-box">
            <h2>Thank You ❤️</h2>
            <p>
              Your contribution helps protect wildlife and restore ecosystems.
            </p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Donate;