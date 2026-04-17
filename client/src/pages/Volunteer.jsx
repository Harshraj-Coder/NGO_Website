import React, { useEffect, useState } from "react";
import "../styles/Volunteer.css";

function VolunteerDashboard() {
  const [date, setDate] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const [joinedEvents, setJoinedEvents] = useState([]);

  /* ===== LOAD DATA ===== */
  useEffect(() => {
    const d = new Date();
    setDate(d.toDateString());

    const storedAnnouncements =
      JSON.parse(localStorage.getItem("announcements")) || [];
    setAnnouncements(storedAnnouncements);

    const storedJoined =
      JSON.parse(localStorage.getItem("joinedEvents")) || [];
    setJoinedEvents(storedJoined);
  }, []);

  /* ===== JOIN EVENT ===== */
  const joinEvent = (index) => {
    if (joinedEvents.includes(index)) return;

    const updated = [...joinedEvents, index];
    setJoinedEvents(updated);

    localStorage.setItem("joinedEvents", JSON.stringify(updated));
  };

  return (
    <div className="volunteer-container">
      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>
          <a href="/" className="logo-link">AAREY KEY</a>
        </h2>

        <a href="#dashboard">Dashboard</a>
        <a href="#assignments">My Assignments</a>
        <a href="#rescues">My Rescue Cases</a>
        <a href="#announcements">Announcements</a>
        <a href="#profile">My Profile</a>
        <a href="/login">Logout</a>
      </div>

      {/* MAIN */}
      <div className="main">
        {/* TOP BAR */}
        <div className="top-bar">
          <div>
            <h1>Volunteer Dashboard</h1>
            <h3 className="welcome-text">
              Welcome, Anita Sharma 👋
            </h3>
          </div>
          <p>{date}</p>
        </div>

        {/* CARDS */}
        <div id="dashboard" className="cards">
          <div className="card">
            <h3>Assigned Tasks</h3>
            <p>3</p>
          </div>

          <div className="card">
            <h3>Completed Rescues</h3>
            <p>12</p>
          </div>

          <div className="card">
            <h3>Ongoing Cases</h3>
            <p>2</p>
          </div>
        </div>

        {/* EVENTS */}
        <div className="events-wrapper">
          <div className="section event-box">
            <h2>Ongoing Events</h2>
            <div className="event-item">
              <span className="event-name">Wildlife Awareness Drive</span>
              <span className="event-date">05/04/2026</span>
            </div>
          </div>

          <div className="section event-box">
            <h2>Past Events</h2>
            <div className="event-item">
              <span className="event-name">Animal Rescue Workshop</span>
              <span className="event-date">15/09/2025</span>
            </div>
          </div>
        </div>

        {/* ASSIGNMENTS */}
        <div id="assignments" className="section">
          <h2>My Assignments</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Task ID</th>
                  <th>Animal</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>101</td>
                  <td>Monkey</td>
                  <td>Aarey Colony</td>
                  <td>28-03-2026</td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ANNOUNCEMENTS */}
        <div id="announcements" className="section">
          <h2>Announcements</h2>

          <div id="volunteerAnnouncements">
            {announcements.map((a, index) => {
              const joined = joinedEvents.includes(index);

              return (
                <div key={index} className="announcement-box">

                  {a.isEmergency && (
                    <div className="emergency-alert">
                      🚨 Emergency Alert
                    </div>
                  )}

                  <h4>{a.title}</h4>
                  <p>{a.text}</p>

                  {a.image && (
                    <img src={a.image} className="announcement-img" />
                  )}

                  {a.isRescue && (
                    <div className="rescue-details">
                      <span className="rescue-tag">Rescue Operation</span>
                      <p><b>Location:</b> {a.rescueLocation}</p>
                      <p><b>Animal:</b> {a.rescueAnimal}</p>
                      <p><b>Volunteers Required:</b> {a.rescuePeople}</p>
                    </div>
                  )}

                  {a.isEvent && (
                    <div className="announcement-footer">
                      <div className="event-info">
                        <span className="event-tag">EVENT</span>
                        <span className="event-date">
                          Date: {a.eventDate}
                        </span>
                      </div>

                      <button
                        className={`join-event-btn ${joined ? "joined" : ""}`}
                        onClick={() => joinEvent(index)}
                        disabled={joined}
                      >
                        {joined ? "✓ Joined" : "Join Now"}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* PROFILE */}
        <div id="profile" className="section">
          <h2>My Profile</h2>
          <p><strong>Name:</strong> Anita Sharma</p>
          <p><strong>Email:</strong> anita@gmail.com</p>
          <p><strong>Phone:</strong> 9876543210</p>
          <p><strong>Role:</strong> Volunteer</p>
        </div>
      </div>
    </div>
  );
}

export default VolunteerDashboard;