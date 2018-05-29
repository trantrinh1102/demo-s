import { CHANGE_LOCALE, DEFAULT_LOCALE } from './Actions';

export default (initialLocale = DEFAULT_LOCALE) => (
  (previousLocale = initialLocale, {type, payload}) => {
    switch (type) {
      case CHANGE_LOCALE:
        return payload;
      default:
        return previousLocale;
    }
  }
);
