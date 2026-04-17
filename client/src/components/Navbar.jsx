import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
      <div className="utility-bar">
        <div className="utility-left">
          <span><i className="fa-solid fa-phone"></i> +91 09152202995</span>
          <span>
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:aareykey@gmail.com">aareykey@gmail.com</a>
          </span>
          <span>
            <i className="fa-brands fa-instagram"></i>
            <a href="https://www.instagram.com/aarey_key/?hl=en" target="_blank" rel="noreferrer">
              @aarey_key
            </a>
          </span>
        </div>
      </div>
      <header className="navbar">

        {/* Logo */}
        <div className="logo">
          <Link to="/">AAREY KEY</Link>
        </div>

        {/* Nav Links */}
        <nav className="nav-links">

          {/* Home */}
          <div
            className="nav-item"
            onMouseEnter={() => toggleDropdown("home")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <Link to="/">Home</Link>

            {openDropdown === "home" && (
              <div className="dropdown">
                <a href="#overview">Overview</a>
                <a href="#impact-highlights">Impact Highlights</a>
                <a href="#latest-updates">Latest Updates</a>
              </div>
            )}
          </div>

          {/* About */}
          <div
            className="nav-item"
            onMouseEnter={() => toggleDropdown("about")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <Link to="/about">About Us</Link>

            {openDropdown === "about" && (
              <div className="dropdown">
                <Link to="/about#about">About Aarey Key</Link>
                <Link to="/about#mission">Mission & Vision</Link>
                <Link to="/about#journey">Our Journey</Link>
                <Link to="/about#governance">Governance</Link>
              </div>
            )}
          </div>

          {/* Our Work */}
          <div
            className="nav-item"
            onMouseEnter={() => toggleDropdown("work")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <Link to="/ourwork">Our Work</Link>

            {openDropdown === "work" && (
              <div className="dropdown">
                <Link to="/ourwork#thematic">Thematic Areas</Link>
                <Link to="/ourwork#key-initiatives">Key Initiatives</Link>
                <Link to="/ourwork#community">Community</Link>
              </div>
            )}
          </div>

          {/* Get Involved */}
          <div
            className="nav-item"
            onMouseEnter={() => toggleDropdown("involved")}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <Link to="/getinvolved">Get Involved</Link>

            {openDropdown === "involved" && (
              <div className="dropdown">
                <Link to="/getinvolved#support">Ways to Engage</Link>
                <Link to="/getinvolved#donate-card">Donate</Link>
                <Link to="/getinvolved#volunteer-card">Volunteer</Link>
                <Link to="/getinvolved#csr">CSR</Link>
              </div>
            )}
          </div>

          {/* Contact */}
          <div className="nav-item">
            <Link to="/contact">Contact</Link>
          </div>

        </nav>

        {/* Buttons */}
        <div className="nav-buttons">
          <Link to="/login" className="btn login-btn">Login</Link>
          <Link to="/donate" className="btn donate-btn">Donate</Link>
        </div>

      </header>
    </>
  );
}

export default Navbar;