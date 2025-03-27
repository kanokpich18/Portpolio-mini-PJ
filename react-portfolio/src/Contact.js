import React from "react";
import { FaFacebook, FaEnvelope, FaLine } from "react-icons/fa"; // นำเข้าไอคอน
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="section-title" style={{ textAlign: "center" }}>Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>

      <div className="social-links">
        <a href="https://www.facebook.com/profile.php?id=100011545186437" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="social-icon" />
        </a>
        <a href="https://mail.google.com/mail/u/0/#inbox">
          <FaEnvelope className="social-icon" />
        </a>
        
      </div>
    </div>
  );
};

export default Contact;
