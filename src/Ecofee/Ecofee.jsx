import React from 'react';
import './Ecofee.css';

const App = () => {
  return (
    <div className="container">
      <div className="card">
        <h1>San Juan, Batangas</h1>
        <img src='./public/SanJuan.jpg' alt="san juan" className="img" />
        <div className="details">
          <p><span className="label"><strong>Location:</strong></span>Batangas Province</p>
          <p><span className="label"><strong>Environmental Fee per Person: ₱ 30.00</strong></span></p>
          <p className="description">
          San Juan, Batangas is a picturesque coastal municipality located in the province of Batangas, Philippines. Renowned for its stunning beaches, tranquil ambiance, and rich cultural heritage, San Juan offers a blend of natural beauty and historical significance.
          </p>
          <button className="book-button" onClick={() => location.href = "/touristpass"} >Book</button>
        </div>
      </div>
    </div>
  );
};

export default App;
