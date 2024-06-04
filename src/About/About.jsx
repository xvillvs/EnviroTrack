import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="team-container">
        <div className="team-member">
          <img src="./public/logo.png" alt="Team Member 1" className="team-photo" />
          <h2>Envirotrack</h2>
          <p>weeeeeeeeeeee</p>
        </div>
        <div className="team-member">
          <img src="./public/logo.png" alt="Team Member 2" className="team-photo" />
          <h2>Envirotrack</h2>
          <p>weeeeeeeeeeeeee</p>
        </div>
        <div className="team-member">
          <img src="./public/logo.png" alt="Team Member 3" className="team-photo" />
          <h2>Envirotrack</h2>
          <p>weeeeeeeeeeeeee</p>
        </div>
        
      </div>
      <div className="team-description">
        <h2>Our Team</h2>
        <p>
          abcdefghjkllmniupqweasdasdadadadazxcczczcz
        </p>
      </div>
    </div>
  );
}

export default About;

