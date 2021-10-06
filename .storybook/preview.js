import { i18n } from './i18next.js';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  i18n,
  locale: 'pt-BR',
  locales: {
    'pt-BR': 'Português (BR)',
  },
}
