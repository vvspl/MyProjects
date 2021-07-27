/* eslint-disable arrow-body-style */
import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Users from './Users.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div className="page">
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users">Users</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
