import React from 'react';
import { NavLink } from 'react-router-dom';
import Profile from './Profile';
import Quizsets from './Quizsets';

class Home extends React.Component {
  render() {
    return (
      <div className="home-section">
        <div className="home-wrapper">
          <Profile />
          <Quizsets />
        </div>
      </div>
    );
  }
}

export default Home;
