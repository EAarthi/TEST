import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css folder/Popup.css';

const Popup = ({ onClose }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

// Popup.jsx
const handleSubmit = (e) => {
  e.preventDefault();
  onClose(); // Close the popup after submission
  navigate('/drop'); // Redirect to SpeechToSign
};

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <div className="page-title">
          <h1 className="main-title">{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
        </div>
        <form onSubmit={handleSubmit} className="signin-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          {!isSignIn && (
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          {!isSignIn && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" required />
            </div>
          )}
          <button type="submit">{isSignIn ? 'Submit' : 'Sign Up'}</button>
        </form>
        <div className="signup-link">
          {isSignIn ? (
            <>
              <p>Don't have an account?</p>
              <button onClick={toggleForm} className="link-button">Sign Up</button>
            </>
          ) : (
            <>
              <p>Already have an account?</p>
              <button onClick={toggleForm} className="link-button">Sign In</button>
            </>
          )}
        </div>
        <div className="close-btn" onClick={onClose}>
          ❌ {/* Cross emoji */}
        </div>
      </div>
    </div>
  );
};

export default Popup;
