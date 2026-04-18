import React, { useState, useContext } from "react";
import { setUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";

import "../styles/Login.css";
import Navbar from "../components/Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const navigate = useNavigate();

  // ✅ LOGIN
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("LOGIN RESPONSE:", data);

      if (!data.user) {
        alert(data.message);
        return;
      }

      // ✅ FIX: attach role properly
      const userWithRole = {
        ...data.user,
        role: data.role,
      };

      setUser(userWithRole);

      // ✅ FIX: use correct role source
      if (data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/volunteer");
      }

      window.location.reload(); // needed since no context

    } catch (err) {
      console.error(err);
    }
  };

  // ✅ REGISTER
  const handleRegister = async () => {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        username,
        phoneNo,
        role,
      }),
    });

    const data = await res.json();
    if (data.user) {
      setUser(data.user);   // optional auto-login
      alert("Registered successfully");
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
                  value="admin"
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
                  value="volunteer"
                  onChange={(e) => setRole(e.target.value)}
                />
                <div className="role-box">
                  <span>Volunteer</span>
                </div>
              </label>
            </div>


            {/* FORM */}
            <form onSubmit={handleSubmit}>
              <label>Username</label>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <label>E-Mail Address</label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Password</label>
              <input
                type="password"
                placeholder="Password@123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <label>Phone No</label>
              <input
                type="text"
                placeholder="1234567890"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />

              <button type="submit" className="signin-btn">
                Sign in
              </button>

              {/* 🔥 REGISTER OUTSIDE FORM LOGIC */}
            </form>

            <button
              type="button"
              onClick={handleRegister}
              className="reg-btn"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;