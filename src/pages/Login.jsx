import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Login.css";
import Navbar from "../components/Navbar";

function Login() {
  const navigate = useNavigate();

  // const [role, setRole] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!role) {
  //     alert("Please select a role");
  //     return;
  //   }

  //   alert(`Login as ${role}`);
  // };

  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!role) {
      alert("Please select a role");
      return;
    }

    if (role === "Admin") {
      navigate("/admin");
    } else if (role === "Volunteer"){
      navigate("/volunteer");
    } else {
      navigate("/");
    }
  }

  return (
    <>
      <Navbar />

      <div className="login-page">
        <div className="login-container">
          <div className="login-card">

            {/* LOGO */}
            <div className="logo-circle">
              <img src="/images/logo.png" alt="Logo" className="logo-img" />
            </div>

            <h2>Welcome</h2>
            <p className="subtitle">
              Please enter your details to sign in.
            </p>
  
            <div className="role-selection">

              <label className="role-option">
                <input
                  type="radio"
                  name="role"
                  value="Admin"
                  onChange={(e) => setRole(e.target.value)}
                />
                <div className="role-box">
                  <i className="fa-solid fa-user-shield"></i>
                  <span>Admin</span>
                </div>
              </label>

              <label className="role-option">
                <input
                  type="radio"
                  name="role"
                  value="Volunteer"
                  onChange={(e) => setRole(e.target.value)}
                />
                <div className="role-box">
                  <i className="fa-solid fa-hand-holding-heart"></i>
                  <span>Volunteer</span>
                </div>
              </label>

            </div>

            <div className="divider">OR</div>

            {/* FORM */}
            <form onSubmit={handleSubmit}>
              <label>E-Mail Address</label>
              <input
                type="email"
                placeholder="Enter your email..."
                required
              />

              <label>Password</label>
              <div className="password-wrapper">
                <input
                  type="password"
                  placeholder="Password@123"
                  required
                />
              </div>

              <div className="options">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#">Forgot password?</a>
              </div>

              <button type="submit" className="signin-btn">
                Sign in
              </button>

              <p className="signup-text">
                Don't have an account yet?
                <a href="/signup"> Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;