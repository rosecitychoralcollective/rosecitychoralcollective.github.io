import locale from '../resources/locales/en-US.json';

const translateString = (key) => {
  if (key in locale) return locale[key];
  return key;
};

export default translateString;
