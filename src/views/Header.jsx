import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  handleLogout = () => {
    localStorage.removeItem('quizuserToken');
    localStorage.removeItem('quizuserName');
    this.props.handleIslogged(false);
  };

  PrivateNav = () => {
    return (
      <div>
        <NavLink className="nav-item" to="/marks">
          Marks
        </NavLink>
        <NavLink
          onClick={this.handleLogout}
          className="nav-item nav-item-btn"
          to="/"
        >
          LOGOUT
        </NavLink>
      </div>
    );
  };

  PublicNav = () => {
    return (
      <div>
        <NavLink className="nav-item" to="/signin">
          SIGN IN
        </NavLink>
        <NavLink className="nav-item nav-item-btn" to="/signup">
          SIGN UP
        </NavLink>
      </div>
    );
  };
  render() {
    return (
      <>
        <div className="header-wrapper">
          <nav className="header-nav">
            <NavLink className="logo" to="">
              Quiz
            </NavLink>
            {localStorage.quizuserToken ? this.PrivateNav() : this.PublicNav()}
          </nav>
        </div>
      </>
    );
  }
}

export default Header;
