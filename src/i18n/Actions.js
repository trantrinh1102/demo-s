export const DEFAULT_LOCALE = 'en';
export const CHANGE_LOCALE = 'CHANGE_LOCALE';

export const changeLocale = locale => ({
  type: CHANGE_LOCALE,
  payload: locale,
})
