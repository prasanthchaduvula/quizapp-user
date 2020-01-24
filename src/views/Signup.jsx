import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userEmail: '',
      userPassword: '',
      userPicture: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:3001/api/v1/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName: this.state.userName,
        userEmail: this.state.userEmail,
        userPassword: this.state.userPassword,
        userPicture: this.state.userPicture
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          console.log(data);
          alert('successfully registered');
          this.props.history.push('/signin');
        } else {
          alert('enter valid details');
        }
      });
  };

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-wrapper">
        <div className="sign-section">
          <form className="sign-form">
            <label className="sign-label" htmlFor="">
              Choose a user name
            </label>
            <input
              className="sign-input"
              type="text"
              name="userName"
              placeholder="e.g: prasanth"
              value={this.state.userName}
              onChange={this.handleChange}
            />
            <label className="sign-label" htmlFor="">
              Enter a valid email address
            </label>
            <input
              className="sign-input"
              type="email"
              name="userEmail"
              placeholder="example@gmail.com"
              value={this.state.userEmail}
              onChange={this.handleChange}
            />
            <label className="sign-label" htmlFor="">
              Password
            </label>
            <input
              className="sign-input"
              type="password"
              name="userPassword"
              placeholder="e.g: 123@qwerty"
              value={this.state.userPassword}
              onChange={this.handleChange}
            />
            <label className="sign-label" htmlFor="">
              Add online url of profile picture
            </label>
            <input
              className="sign-input"
              type="text"
              name="userPicture"
              placeholder="e.g: www.myprofilepic.com/picprasanth"
              value={this.state.userPicture}
              onChange={this.handleChange}
            />

            <input
              className="sign-btn nav-item-btn"
              type="submit"
              value="SIGN UP"
              onClick={this.handleSubmit}
            />
            <div className="sign-footer">
              <p className="sign-footer-text">Already have an account?</p>
              <NavLink className="sign-footer-link" to="/signin">
                Sign in
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
