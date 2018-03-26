import { SIGNUP_REQUESTING, SIGNUP_SUCCESS, SIGNUP_ERROR } from './constants';

const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUESTING:
      return Object.assign({}, state,
        { requesting: true,
          messages: [{ body: 'Signing up...', time: new Date() }],
          errors: [],
        });
    case SIGNUP_SUCCESS: {
      return Object.assign({}, state, {
        messages: [{
          body: `Successfully created account for ${action.respone.email}`,
          time: new Date(),
        }],
        requesting: false,
        successful: true,
      });
    }
    case SIGNUP_ERROR:
      return Object.assign({}, state, {
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date(),
        }]),
        messages: [],
        requesting: false,
        successful: false,
      })
    default:
      return state;
  }
};
