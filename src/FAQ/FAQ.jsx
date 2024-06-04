import React from 'react';
import './FAQ.css'; 

const FAQ = () => {
  return (
    <div className="faq-container">
      <h1>FAQs</h1>
      <p className="intro-text">You got questions? We got you!</p>
      <div className="faq-boxes">
        <div className="faq-box">
          <img src="./public/logo.png" alt="FAQ 1" className="faq-photo" />
          <h2>How to sign up as a tourist?</h2>
          <p>abc</p>
        </div>
        <div className="faq-box">
          <img src="./public/logo.png" alt="FAQ 2" className="faq-photo" />
          <h2>How to register?</h2>
          <p>efg</p>
        </div>
        <div className="faq-box">
          <img src="./public/logo.png" alt="FAQ 3" className="faq-photo" />
          <h2>How to recover forgotten password?</h2>
          <p>hij</p>
        </div>
        <div className="faq-box">
          <img src="./public/logo.png" alt="FAQ 4" className="faq-photo" />
          <h2>How to recover?</h2>
          <p>klmn</p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
