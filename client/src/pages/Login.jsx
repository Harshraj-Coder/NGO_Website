import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/authApi";

import "../styles/Login.css";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // ✅ added

  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser({ email, password, role });

      console.log(res.data);

      // Save token
      localStorage.setItem("token", res.data.token);

      // Save user in context (optional)
      setUser(res.data.user);

      alert("Login successful");

      // Redirect
      navigate("/dashboard");

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="login-page">
        <div className="login-container">
          <div className="login-card">

            <div className="logo-circle">
              <img src="/images/logo.png" alt="Logo" className="logo-img" />
            </div>

            <h2>Welcome</h2>
            <p className="subtitle">
              Please enter your details to sign in.
            </p>

            {/* ROLE */}
            <div className="role-selection">
              <label className="role-option">
                <input
                  type="radio"
                  name="role"
                  value="Admin"
                  onChange={(e) => setRole(e.target.value)}
                />
                <div className="role-box">
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
                  <span>Volunteer</span>
                </div>
              </label>
            </div>

            <div className="divider">OR</div>

            {/* FORM */}
            <form onSubmit={handleLogin}>
              <label>E-Mail Address</label>
              <input
                type="email"
                placeholder="Enter your email..."
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Password</label>
              <input
                type="password"
                placeholder="Password@123"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="options">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
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