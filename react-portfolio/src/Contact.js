import React from "react";
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="section-title">Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;