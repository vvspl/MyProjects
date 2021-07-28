/* eslint-disable prefer-destructuring */
/* eslint-disable no-debugger */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/* eslint-disable arrow-body-style */
import React from 'react';

class User extends React.Component {
  state = {
    userName: null,
    userLocation: null,
    userAvatar: null,
  };

  componentDidMount() {
    // debugger;
    const userId = this.props.match.params.userId;
    console.log('userId: ', userId);
    fetch(`https://api.github.com/users/${userId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then(({ avatar_url, name, location }) => {
        this.setState({ userName: name, userLocation: location, userAvatar: avatar_url 
        });
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId === prevProps.match.params.userId) return true;
    return false;
  }

  render() {
    // debugger;
    console.log('state: ', this.state);
    const { userAvatar, userName, userLocation } = this.state;
    if (!userAvatar || !userName || !userLocation) {
      return null;
    }
    return (
      <div className="user">
        <img 
        alt="User Avatar" 
        src={this.state.userAvatar} 
        className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{this.state.userName}</span>
          <span className="user__location">{this.state.userLocation}</span>
        </div>
      </div>
    );
  }
}

export default User;
