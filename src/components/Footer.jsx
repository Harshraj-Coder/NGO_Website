import React from "react";
import "../styles/Home.css"; // create or reuse your CSS

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-col footer-about">
          <h2>AAREY KEY</h2>
          <p>For a resilient wildlife ecosystem and sustainable coexistence.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/ourwork">Our Work</a></li>
            <li><a href="/getinvolved">Get Involved</a></li>
            <li><a href="/donate">Donate</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div className="footer-col">
          <h3>Policies</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="/about#governance">Governance & Ethics</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>+91 09152202995</p>
          <p>aareykey@gmail.com</p>

          <div className="footer-socials">
            <a href="https://www.instagram.com/aarey_key/?hl=en" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://www.youtube.com/@aareykeyfoundation7710" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © 2026 AAREY KEY. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;