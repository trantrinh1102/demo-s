import SignupSaga from 'containers/signup/sagas';
import LoginSaga from 'containers/login/sagas';

export default function* IndexSaga() {
  yield [
    SignupSaga(),
    LoginSaga(),
  ]
};
