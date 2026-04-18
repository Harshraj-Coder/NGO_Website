import React, { useEffect, useState } from "react";
import "../styles/Admin.css";
import Navbar from "../components/Navbar";

function AdminDashboard() {
  const [date, setDate] = useState("");
  const [user, setUser] = useState(null);

  const [announcements, setAnnouncements] = useState([]);

  const [form, setForm] = useState({
    title: "",
    text: "",
    isEvent: false,
    eventDate: "",
    isEmergency: false,
    isRescue: false,
    rescueLocation: "",
    rescueAnimal: "",
    rescuePeople: "",
    image: null,
  });

  /* ===== LOAD DATA ===== */
  useEffect(() => {
    const d = new Date();
    setDate(d.toDateString());

    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);

    const storedAnnouncements =
      JSON.parse(localStorage.getItem("announcements")) || [];
    setAnnouncements(storedAnnouncements);
  }, []);

  /* ===== HANDLE INPUT ===== */
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;

    setForm({
      ...form,
      [id]:
        type === "checkbox"
          ? checked
          : type === "file"
          ? e.target.files[0]
          : value,
    });
  };

  /* ===== POST ANNOUNCEMENT ===== */
  const postAnnouncement = () => {
    if (!form.title || !form.text) {
      alert("Please enter announcement details");
      return;
    }

    const saveData = (imageData) => {
      const newAnnouncement = { ...form, image: imageData };

      const updated = [newAnnouncement, ...announcements];

      setAnnouncements(updated);
      localStorage.setItem("announcements", JSON.stringify(updated));

      /* RESET */
      setForm({
        title: "",
        text: "",
        isEvent: false,
        eventDate: "",
        isEmergency: false,
        isRescue: false,
        rescueLocation: "",
        rescueAnimal: "",
        rescuePeople: "",
        image: null,
      });
    };

    if (form.image) {
      const reader = new FileReader();
      reader.onload = (e) => saveData(e.target.result);
      reader.readAsDataURL(form.image);
    } else {
      saveData(null);
    }
  };

  /* ===== DELETE ===== */
  const deleteAnnouncement = (index) => {
    const updated = [...announcements];
    updated.splice(index, 1);

    setAnnouncements(updated);
    localStorage.setItem("announcements", JSON.stringify(updated));
  };

  return (
    <>
      <Navbar />
      <div className="admin-container">
        {/* SIDEBAR */}
        <div className="sidebar">
          <a href="#dashboard">Dashboard</a>
          <a href="#announcements">Announcements</a>
          <a href="#assignments">Work Assignments</a>
          <a href="#rescue">Rescue Management</a>
          <a href="#volunteers">Volunteer Management</a>
          <a href="#">Reports</a>
          <a href="/login">Logout</a>
        </div>

        {/* MAIN */}
        <div className="main">
          {/* TOP BAR */}
          <div className="top-bar">
            <h1>Admin Dashboard</h1>
            <p>{date}</p>
          </div>

          <h2>{user ? `Hello ${user.username}` : "Hello Admin"}</h2>

          {/* CARDS */}
          <div id="dashboard" className="cards">
            <div className="card"><h3>Total Rescues</h3><p>126</p></div>
            <div className="card"><h3>Active Volunteers</h3><p>42</p></div>
            <div className="card"><h3>Ongoing Cases</h3><p>15</p></div>
            <div className="card"><h3>Pending Tasks</h3><p>8</p></div>
          </div>

          {/* ANNOUNCEMENTS */}
          <div id="announcements" className="section">
            <h2>Add Announcement</h2>

            <label className="event-checkbox">
              <input type="checkbox" id="isEmergency" checked={form.isEmergency} onChange={handleChange} />
              Emergency Alert 🚨
            </label>

            <label className="event-checkbox">
              <input type="checkbox" id="isRescue" checked={form.isRescue} onChange={handleChange} />
              Rescue Operation
            </label>

            {form.isRescue && (
              <div className="rescue-box">
                <div className="rescue-grid">
                  <input id="rescueLocation" value={form.rescueLocation} onChange={handleChange} placeholder="Rescue Location" />
                  <input id="rescueAnimal" value={form.rescueAnimal} onChange={handleChange} placeholder="Rescue Animal" />
                  <input id="rescuePeople" value={form.rescuePeople} onChange={handleChange} placeholder="People Required" />
                </div>
              </div>
            )}

            <input id="title" value={form.title} onChange={handleChange} placeholder="Announcement Title" />
            <textarea id="text" value={form.text} onChange={handleChange} placeholder="Write announcement..." />

            <label className="event-checkbox">
              <input type="checkbox" id="isEvent" checked={form.isEvent} onChange={handleChange} />
              Select The Date of Event
            </label>

            {form.isEvent && (
              <input type="date" id="eventDate" value={form.eventDate} onChange={handleChange} />
            )}

            <input type="file" id="image" accept="image/*" onChange={handleChange} />

            <button className="btn-primary" onClick={postAnnouncement}>
              Post Announcement
            </button>

            {/* LIST */}
            <div className="announcement-list">
              {announcements.map((a, index) => (
                <div key={index} className="announcement-item">
                  <div className="announcement-header">
                    <h4>{a.title}</h4>
                    <button className="delete-btn" onClick={() => deleteAnnouncement(index)}>🗑</button>
                  </div>

                  <p>{a.text}</p>

                  {a.image && <img src={a.image} className="announcement-img" />}

                  {a.isEvent && <small>Date: {a.eventDate}</small>}

                  {a.isEmergency && <span className="emergency-tag">🚨 EMERGENCY</span>}

                  {a.isRescue && (
                    <div>
                      <span className="rescue-tag">Rescue Operation</span>
                      <p><b>Location:</b> {a.rescueLocation}</p>
                      <p><b>Animal:</b> {a.rescueAnimal}</p>
                      <p><b>People:</b> {a.rescuePeople}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;