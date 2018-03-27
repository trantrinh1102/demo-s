import {
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants'


const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUESTING:
      return Object.assign({}, state,
        { requesting: true,
          messages: [{ body: 'Logging in ....', time: new Date() }]
        });
    case LOGIN_SUCCESS: {
      return Object.assign({}, state, { requesting: false, successful: true, messages: [], errors: [] });
    }
    case LOGIN_ERROR: {
      return Object.assign({}, state, { requesting: false, successful: false, messages: [],
        errors: [{ body: action.error.toString(), time: new Date() }] });
    }
    default:
      return state;
  }
}
