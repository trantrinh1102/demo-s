import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import client from 'client/reducer';
import signup from 'containers/signup/reducer';
import login from 'containers/login/reducer';

const IndexReducer = combineReducers({
  form,
  client,
  signup,
  login,
});

export default IndexReducer;
