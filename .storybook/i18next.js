import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const ns = ['translation'];
const supportedLngs = ['ptBr'];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    //debug: true,
    lng: 'ptBr',
    fallbackLng: 'ptBr',
    interpolation: {
      escapeValue: false,
    },
    defaultNS: 'translation',
    ns,
    supportedLngs,
  });

supportedLngs.forEach(lang => {
  ns.forEach(n => {
    const languageJson = require(`../src/locales/${lang}/${n}.json`);

    const translationIntellisenseHelper = require('../src/locales/translations');
    translationIntellisenseHelper.convertLanguageJsonToObject(languageJson)

    i18n.addResources(lang, n, languageJson);
  });
});

export { i18n };
