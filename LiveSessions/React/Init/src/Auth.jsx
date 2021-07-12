/* eslint-disable arrow-body-style */
import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

// algo
// 1/ Show login by default
// 2. show spinner fo 2 sec after login click
// 3. show logout
// 4. show login after logout click

class App extends React.Component {
  state = {
    isLoggedIn: false,
    isLogging: false,
  };

  onLogin() {
    this.setState({
      isLoggedIn: true,
    });

    // input : func, ms
    // output: undefined
    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        isLogging: false,
      });
    }, 2000);
  }

  onLogout() {
    this.setState({});
  }

  render() {
    return (
      <>
        <Login onLogin={this.onLogin} />
        <Logout onLogout={this.onLogout} />
        {/* <Spinner size={20} /> */}
      </>
    );
  }
}

export default App;
