import {
  take, // Dừng lại cho đến khi nhận được actions type ...
  fork, // Thực hiện non-blocking
  cancel, // cancel
  call, // Dùng để call 1 function, nó return về một promise, tạm dừng cho đến khi promise được giải quyết
  put, // Dispatch ra một function
  cancelled //
} from 'redux-saga/effects';

import { browserHistory } from 'react-router-dom';

import { handleApiErrors } from '../lib/api-errors';

// Our login constants
import {
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

// So that we can modify our Client piece of state
import {
  setClient,
  unsetClient,
} from '../client/actions';

import {
  CLIENT_UNSET, CLIENT_SET,
} from '../client/constants';

const loginUrl = `${process.env.REACT_APP_API_URL}/api/Clients/login`;

function loginApi(email, password) {
  return fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then(handleApiErrors)
    .then(response => response.json())
    .then(json => json)
    .catch((error) => { throw error })
}

function* logout() {
  // dispatches the CLIENT_UNSET action
  yield put(unsetClient());

  // remove our token
  localStorage.removeItem('token');

}

function* loginFollow (email, password) {
  let token;

  try {
    token = yield call(loginApi, email, password);

    yield put(setClient(token));
    yield put({ type: LOGIN_SUCCESS });

    localStorage.setItem('token', JSON.stringify(token));

  } catch (error) {
    console.log(`error ${error.toString()}`);

    yield put({ type: LOGIN_ERROR, error });
  } finally {
    if (yield cancelled()) {
      console.log('cancelled');
    }

  }
  return token;
}

function* loginWatcher() {

  while(true) {
    const { email, password } = yield take(LOGIN_REQUESTING);

    const task = yield fork(loginFollow, email, password);

    const action = yield take([CLIENT_UNSET, LOGIN_ERROR]);

    if (action.type === CLIENT_UNSET) yield cancel(task);

    yield call(logout);
  }
}

export default loginWatcher;
