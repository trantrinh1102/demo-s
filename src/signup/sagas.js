import { takeLatest, call, put } from 'redux-saga/effects';

import { handleApiErrors } from '../lib/api-errors'
import {
  SIGNUP_REQUESTING,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
} from './constants';

const signupUrl = `${process.env.REACT_APP_API_URL}/api/Clients`

function signupApi (email, password) {
  // call to the "fetch".  this is a "native" function for browsers
  // that's conveniently polyfilled in create-react-app if not available
  return fetch(signupUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then(handleApiErrors) // we'll make this in a second
    .then(response => response.json())
    .then(json => json)
    .catch((error) => { throw error })
}

// This will be run when the SIGNUP_REQUESTING
// Action is found by the watcher
function* signupFlow (action) {
  try {
    const { email, password } = action;
    
    const respone = yield call(signupApi, email, password)
    yield put({ type: SIGNUP_SUCCESS, respone })
  } catch (error) {
    yield put({ type: SIGNUP_ERROR, error })
  }
}

function* signupWatcher () {
  // Chúng ta sẽ thực thi một loạt actions, nó chỉ thực thi và trả về kết quả của actions cuối cùng
  yield takeLatest(SIGNUP_REQUESTING, signupFlow)
}

export default signupWatcher;
