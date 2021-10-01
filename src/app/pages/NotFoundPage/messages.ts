/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */

import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  i18nPageTitle: () =>
    _t(translations['notFoundPage.pageTitle'], 'Not Found Page'),
  i18nPageMetaContent: () =>
    _t(
      translations['notFoundPage.pageMetaContent'],
      'Not Found Page - Meta Content',
    ),
  i18nMessage: () =>
    _t(translations['notFoundPage.message'], 'Page not found.'),
};
