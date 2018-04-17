import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loading from './my-loading-component';
import 'styles/App.css';
import Header from 'components/Header';
import PrivateRoute from 'helpers/route/PrivateRoute';
import ShowCheckbox from 'containers/showCheckbox';

const LoadableLogin = Loadable({
  loader: () => import('containers/login'),
  loading: Loading,
});

const LoadableSignup = Loadable({
  loader: () => import('containers/signup'),
  loading: Loading,
});

const LoadableWidgets = Loadable({
  loader: () => import('containers/widgets'),
  loading: Loading,
});

const LoadableTop = Loadable({
  loader: () => import('components/Top'),
  loading: Loading,
});

const App = props => (
  <div className="App">
    <Header />
    <section className="App-body">
      <Routing />
    </section>
  </div>
);

const Routing = () => (
  <Switch>
    <Route exact={true} path='/' component={LoadableTop} />
    <Route path="/login" component={LoadableLogin} />
    <Route path="/signup" component={LoadableSignup} />
    <Route path="/show-checkbox" component={ShowCheckbox} />
    <PrivateRoute path="/widgets" components={LoadableWidgets} />
    <Redirect to="/" />
  </Switch>
);

App.propTypes = {
}
export default App;
