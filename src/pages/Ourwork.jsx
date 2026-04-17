import React, { useEffect, useState } from "react";
import "../styles/Ourwork.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function OurWork() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  /* LOAD FROM LOCALSTORAGE */
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("comments")) || [];
    setComments(data);
  }, []);

  /* SAVE TO LOCALSTORAGE */
  const save = (data) => {
    localStorage.setItem("comments", JSON.stringify(data));
    setComments(data);
  };

  /* ADD COMMENT */
  const addComment = () => {
    if (!name || !text) return alert("Fill all fields");

    const newComment = {
      name,
      text,
      date: new Date().toLocaleString(),
      likes: 0,
      dislikes: 0,
      hearted: false,
      replies: [],
    };

    save([newComment, ...comments]);

    setName("");
    setText("");
  };

  /* COMMENT ACTIONS */
  const likeComment = (i) => {
    let c = [...comments];
    c[i].likes++;
    save(c);
  };

  const dislikeComment = (i) => {
    let c = [...comments];
    c[i].dislikes++;
    save(c);
  };

  const deleteComment = (i) => {
    if (!window.confirm("Delete?")) return;
    let c = [...comments];
    c.splice(i, 1);
    save(c);
  };

  const editComment = (i) => {
    let txt = prompt("Edit:", comments[i].text);
    if (txt) {
      let c = [...comments];
      c[i].text = txt;
      save(c);
    }
  };

  const heartComment = (i) => {
    let c = [...comments];
    c[i].hearted = !c[i].hearted;
    save(c);
  };

  /* REPLY */
  const addReply = (i, replyText) => {
    if (!replyText) return;

    let c = [...comments];
    c[i].replies.push({
      name: "User",
      text: replyText,
      likes: 0,
      dislikes: 0,
      hearted: false,
    });

    save(c);
  };

  const likeReply = (i, j) => {
    let c = [...comments];
    c[i].replies[j].likes++;
    save(c);
  };

  const dislikeReply = (i, j) => {
    let c = [...comments];
    c[i].replies[j].dislikes++;
    save(c);
  };

  const deleteReply = (i, j) => {
    let c = [...comments];
    c[i].replies.splice(j, 1);
    save(c);
  };

  const editReply = (i, j) => {
    let txt = prompt("Edit reply:", comments[i].replies[j].text);
    if (txt) {
      let c = [...comments];
      c[i].replies[j].text = txt;
      save(c);
    }
  };

  const heartReply = (i, j) => {
    let c = [...comments];
    c[i].replies[j].hearted = !c[i].replies[j].hearted;
    save(c);
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
        <section className="hero">
        <div className="hero-bg"></div>

        <div className="hero-overlay">
            <h1>Our Work</h1>
            <p>
            Protecting wildlife, restoring forests and empowering
            communities around Aarey Forest.
            </p>
        </div>
        </section>

      {/* INTRO */}
      <section className="intro" id="thematic">
        <h2>Protecting Aarey Forest</h2>
        <p>
          AAREY KEY works alongside the Waghoba Habitat Foundation to preserve
          biodiversity within Mumbai's Aarey Forest.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="key-initiatives">
        <h2>Key Initiatives</h2>

        <div className="project-grid">
          <div className="card">
            <img src="/images/tree plant.webp" alt="" />
            <div className="card-content">
              <h3>Habitat Restoration</h3>
              <p>Tree plantation and ecosystem restoration drives.</p>
            </div>
          </div>

          <div className="card">
            <img src="/images/tree.jpg" alt="" />
            <div className="card-content">
              <h3>Indigenous Knowledge</h3>
              <p>Preserving traditional ecological practices.</p>
            </div>
          </div>

          <div className="card">
            <img src="/images/treehero.webp" alt="" />
            <div className="card-content">
              <h3>Wildlife Protection</h3>
              <p>Responding to wildlife emergencies and threats.</p>
            </div>
          </div>

          <div className="card">
            <img src="/images/tree1.webp" alt="" />
            <div className="card-content">
              <h3>Environmental Education</h3>
              <p>Workshops and awareness programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENTS */}
      <section className="comments-section">
        <h2>Share Your Thoughts 💬</h2>

        <div className="comment-box">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
          />
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your opinion..."
          />
          <button onClick={addComment}>Post Comment</button>
        </div>

        <div className="comment-list">
          {comments.map((c, i) => (
            <div className="comment" key={i}>
              <div className="comment-top">
                <div>
                  <h4>{c.name}</h4>
                  <small>{c.date}</small>
                </div>

                <div className="comment-menu">
                  <span onClick={() => editComment(i)}>✏️</span>
                  <span onClick={() => deleteComment(i)}>🗑</span>
                </div>
              </div>

              <p>{c.text}</p>

              <div className="comment-actions">
                <span onClick={() => likeComment(i)}>👍 {c.likes}</span>
                <span onClick={() => dislikeComment(i)}>👎 {c.dislikes}</span>
                <span onClick={() => heartComment(i)}>
                  {c.hearted ? "❤️" : "🤍"}
                </span>
              </div>

              {/* REPLIES */}
              {c.replies.map((r, j) => (
                <div className="reply" key={j}>
                  <strong>{r.name}</strong>
                  <p>{r.text}</p>

                  <div className="comment-actions">
                    <span onClick={() => likeReply(i, j)}>
                      👍 {r.likes}
                    </span>
                    <span onClick={() => dislikeReply(i, j)}>
                      👎 {r.dislikes}
                    </span>
                    <span onClick={() => heartReply(i, j)}>
                      {r.hearted ? "❤️" : "🤍"}
                    </span>
                    <span onClick={() => editReply(i, j)}>✏️</span>
                    <span onClick={() => deleteReply(i, j)}>🗑</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default OurWork;