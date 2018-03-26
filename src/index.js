import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import history from './history';
import { Router } from 'react-router-dom';

import './index.css';
import App from './App';


// import the index reducer and sagas
import IndexReducer from './index-reducer';
import IndexSagas from './index-sagas';

import registerServiceWorker from './registerServiceWorker';

// Setup the midddleware to watch between the reducer and the actions
const sagaMiddleware = createSagaMiddleware();

/*eslint-disable*/
const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

/* eslint-enable*/
const store = createStore(
  IndexReducer,
  composeSetup(applyMiddleware(sagaMiddleware)),
);

// Begin our Index Saga
sagaMiddleware.run(IndexSagas);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
