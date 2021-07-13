/* eslint-disable import/no-unresolved */
// // https://gromcode.com/users/6702/solutions/179911

// /* eslint-disable arrow-body-style */
// import React from 'react';
// import Login from './Login.jsx';
// import Logout from './Logout.jsx';
// import Spinner from './Spinner.jsx';

// // algo
// // 1/ Show login by default
// // 2. show spinner fo 2 sec after login click
// // 3. show logout
// // 4. show login after logout click

// class App extends React.Component {
//   state = {
//     isLoggedIn: false,
//     isLogging: false,
//   };

//   onLogin = () => {
//     console.log(this);
//     this.setState({
//       isLoggedIn: true,
//     });

//     // input : func, ms
//     // output: undefined
//     setTimeout(() => {
//       this.setState({
//         isLoggedIn: true,
//         isLogging: true,
//       });
//     }, 2000);
//   }

//   onLogout = () => {
//     this.setState({
//       isLoggedIn: false,
//       isLogging: false,
//     });
//   }

//   render() {
//     if (!this.state.isLoggedIn) return <Login onLogin={this.onLogin} />;
//     if (this.state.isLogging) return <Logout onLogout={this.onLogout} />;
//     return <Spinner size={20} />;

//   }
// }

// export default App;

// option 2

// import React from 'react';
// import Login from './Login.jsx';
// import Logout from './Logout.jsx';
// import Spinner from './Spinner.jsx';
// // 1.Show login by default
// // 2.Show spinner for 2 sec
// // 3.show logout
// // 4.show login after logout click
// class Auth extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: true,
//       isSpinner: false,
//     };
//   }

//   handleLogin = () => {
//     this.setState({
//       isLoggedIn: true,
//       isSpinner: true,
//     });
//     setTimeout(() => {
//       this.setState({
//         isLoggedIn: false,
//         isSpinner: false,
//       });
//     }, 2000);
//   };

//   handleLogout = () => {
//     this.setState({
//       isLoggedIn: true,
//       isSpinner: false,
//     });
//   };

  // render() {
  //   // if (this.state.isLogging) {
  //   //   return <Spinner size={20} />;
  //   // }
  //   return this.state.isLoggedIn ? (
  //     this.state.isLogging ? (
  //       <Spinner size={20} />
  //     ) : (
  //       <Login onLogin={this.onLogin} />
  //     )
  //   ) : (
  //     <Logout onLogout={this.onLogout} />
  //   );
  // };

  // render() {
  //   if (!this.state.isLogging && !this.state.isLoggedIn) {
  //     return <Login onLogin={this.onLogin} />;
  //   }
  //   if (this.state.isLogging) {
  //     return <Spinner size={32} />;
  //   }
  //   if (this.state.isLoggedIn && !this.state.isLogging) {
  //     return <Logout onLogout={this.onLogout} />;
  //   }
  //   return null;
  // }

// export default Auth;

import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';
// algo
// 1. show login by default +++++
// 2. show spinner for 2 sec after login click
// 3. show logout
// 4. show login after logout click
class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    isLogging: false,
  };

  onLogin = () => {
    console.log('step 1');
    // debugger;
    this.setState({
      isLogging: true,
    });

    console.log('setState({})')

    // input: func, ms
    // output: undefined

    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        isLogging: false,
      });
    }, 2000);
    console.log('last step');
  };

  

  onLogout() {
    this.setState({
      isLoggedIn: false,
    });
  }

  render() {
    // debugger;
    const { isLogging, isLoggedIn } = this.state;
    if (isLogging) {
      return <Spinner size={50} />;
    }
    if (isLoggedIn) {
      return <Logout onLogout={this.onLogout} />;
    }
    return <Login onLogin={this.onLogin} />;
  }
}
export default Auth;
