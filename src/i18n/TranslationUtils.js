import { DEFAULT_LOCALE } from './Actions';

export const resolveBrowserLocale = (defaultLocale = DEFAULT_LOCALE) => {
  const {language, browserLanguage, userLanguage} = window.navigator;
  return (language || browserLanguage || userLanguage || defaultLocale).split('-')[0];
};
