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
        isLogging: true,
      });
    }, 2000);
  }

  onLogout() {
    this.setState({
      isLoggedIn: true,
      isLogging: false,
    });
  }

  render() {
    let page;
    if (!this.state.isLoggedIn) page = <Login onLogin={this.onLogin} />;
    else if (this.state.isLogging) page = <Logout onLogout={this.onLogout} />;
    else page = <Spinner size={20} />;

    return (
      <>
        {page}
      </>
    );
  }
}

export default App;
