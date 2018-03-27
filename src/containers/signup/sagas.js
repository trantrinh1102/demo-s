import { takeLatest, call, put } from 'redux-saga/effects';

import { UnauthenticatedRequest } from 'services/api';
import {
  SIGNUP_REQUESTING,
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
} from './constants';

function signupApi (email, password) {
  // call to the "fetch".  this is a "native" function for browsers
  // that's conveniently polyfilled in create-react-app if not available

  return UnauthenticatedRequest().post({
    url: '/api/Clients',
    data: {
      email,
      password,
    }
  })
    .then(
      (response) => {
        return response.data;
      })
    .catch((error) => {
      throw error
    })
}

// This will be run when the SIGNUP_REQUESTING
// Action is found by the watcher
function* signupFlow (action) {
  try {
    const { email, password } = action;
    const respone = yield call(signupApi, email, password)

    yield put({ type: SIGNUP_SUCCESS, email: respone.email })
  } catch (error) {
    yield put({ type: SIGNUP_ERROR, error })
  }
}

function* signupWatcher () {
  // Chúng ta sẽ thực thi một loạt actions, nó chỉ thực thi và trả về kết quả của actions cuối cùng
  yield takeLatest(SIGNUP_REQUESTING, signupFlow)
}

export default signupWatcher;
