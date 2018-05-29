import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import client from 'client/reducer';
import signup from 'containers/signup/reducer';
import login from 'containers/login/reducer';
import { resolveBrowserLocale as langBrowser }  from 'i18n/TranslationUtils';
import localeReducer from 'i18n/Reducers';

let locale = (langBrowser === 'en' || langBrowser === 'jp') ? langBrowser : 'jp'

const IndexReducer = combineReducers({
  locale: localeReducer(locale),
  form,
  client,
  signup,
  login,
});

export default IndexReducer;
