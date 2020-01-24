import React from 'react';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      user: ''
    };
  }
  componentDidMount() {
    fetch('http://localhost:3001/api/v1/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.quizuserToken
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({ user: data.user });
        }
        console.log(this.state.user);
      });
  }
  render() {
    let { user } = this.state;
    return (
      <div className="profile-section">
        <center>
          <img className="profile-pic" src={user.userPicture} alt="" />
          <p className="profile-name">{user.userName}</p>
        </center>
      </div>
    );
  }
}

export default Profile;
