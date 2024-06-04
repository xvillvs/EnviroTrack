import React from 'react';
import './Home.css'; // Create a separate CSS file for styling


const Home = () => {
  return (
    <div className="envirotrack-container">
      <div className="envirotrack-content">
        <h1>ENVIROTRACK</h1>
        <p>
EnviroTrack is an application which is designed to address the challenges of managing tourism sustainability in Batangas. With an increasing tourist industry, EnviroTrack seeks to advance responsible tourism practices, empower local communities, and increase transparency.</p>
        <button className="view-more-button">View More</button>
      </div>
      <div className="envirotrack-image">
        <img src='./public/SanJuan.jpg' alt="Envirotrack" />
      </div>
    </div>
  );
}

export default Home;
