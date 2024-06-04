import React from 'react';
import './Contact.css'; // Make sure to create and link the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Get In Touch</h1>
      <div className="contact-details">
        <div className="contact-item">
          <img src="./public/address_icon.png" alt="Address" className="contact-icon" />
          <div className="contact-info">
            <h3>Address</h3>
            <p>123 Main Street, City, Country</p>
          </div>
        </div>
        <div className="contact-item">
          <img src="./public/phone_icon.png" alt="Phone" className="contact-icon" />
          <div className="contact-info">
            <h3>Phone</h3>
            <p>+123 456 789</p>
          </div>
        </div>
        <div className="contact-item">
          <img src="./public/email_icon.png" alt="Email" className="contact-icon" />
          <div className="contact-info">
            <h3>Email</h3>
            <p>example@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
