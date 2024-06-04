import React from 'react';
import './Profile.css'; 

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <h1>Profile</h1>
        <div className="profile-details">
          <div className="profile-row">
            <div className="profile-item">
              <label>Name:</label>
              <span>Geo Abarintos</span>
            </div>
            <div className="profile-item">
              <label>Address:</label>
              <span>Alangilan Bats</span>
            </div>
          </div>
          <div className="profile-row">
            <div className="profile-item">
              <label>User ID:</label>
              <span>T00001</span>
            </div>
            <div className="profile-item">
              <label>Email:</label>
              <span>geoabarintos@gmail.com</span>
            </div>
          </div>
          <div className="profile-row">
            <div className="profile-item">
              <label>ContactNumber:</label>
              <span>012345678910</span>
            </div>
            <div className="profile-item">
              <label>Birthdate:</label>
              <span>Feb 14, 1956</span>
            </div>
          </div>
          <div className="profile-row">
          </div>
          <div className="profile-actions">
            <button>Edit</button>
            <button>Reset Password</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
