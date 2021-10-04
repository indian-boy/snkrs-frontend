import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  i18nPageTitle: () =>
    _t(translations.notFoundPage.pageTitle, 'Not Found Page'),
  i18nPageMetaContent: () =>
    _t(
      translations.notFoundPage.pageMetaContent,
      'Not Found Page - Meta Content',
    ),
  i18nMessage: () => _t(translations.notFoundPage.message, 'Page not found.'),
};
