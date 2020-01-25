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
      <>
        <NavLink className="logo" to={`/users/${localStorage.quizuserName}`}>
          Quiz
        </NavLink>
        <div>
          <NavLink
            className="nav-item"
            to={`/users/${localStorage.quizuserName}/marks`}
          >
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
      </>
    );
  };

  PublicNav = () => {
    return (
      <>
        <NavLink className="logo" to="/users">
          Quiz
        </NavLink>
        <div>
          <NavLink className="nav-item" to="/users/signin">
            SIGN IN
          </NavLink>
          <NavLink className="nav-item nav-item-btn" to="/users/signup">
            SIGN UP
          </NavLink>
        </div>
      </>
    );
  };
  render() {
    return (
      <>
        <div className="header-wrapper">
          <nav className="header-nav">
            {localStorage.quizuserToken ? this.PrivateNav() : this.PublicNav()}
          </nav>
        </div>
      </>
    );
  }
}

export default Header;
