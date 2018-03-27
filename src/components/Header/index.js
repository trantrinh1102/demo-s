import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';

import logo from 'images/logo.svg';
import Top from 'components/Top';

const Header = () => (
  <header className="App-header">
    <Link to='/'>
      <img src={logo} className="App-logo" alt="logo" />
    </Link>
    <h1 className="App-title">Welcome to React</h1>
  </header>
)

const Routing = () => (
  <Switch>
    <Route exact path='/' component={Top} />
  </Switch>
)

export default Header;
