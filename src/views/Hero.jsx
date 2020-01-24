import React from 'react';
import { NavLink } from 'react-router-dom';

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="hero-section">
          <center className="hero-wrapper">
            <p className="hero-text">Appear for quiz and test your IQ</p>
            <NavLink className="hero-btn nav-item-btn" to="/signin">
              Get Started
            </NavLink>
          </center>
        </div>
        <div className="footer-section">
          <div className="footer-wrapper">
            <div>
              <NavLink className="footer-items" to="/">
                ABOUT ME
              </NavLink>
              <NavLink className="footer-items" to="/">
                HELP
              </NavLink>
            </div>
            <small className="footer-copy">
              © 2020 Quiz from Chaduvula Prasanth
            </small>
          </div>
        </div>
      </>
    );
  }
}

export default Hero;
