/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */
import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  i18nFilter: () =>
    _t(translations.components.shoppingStoresList.filter, 'Filtrar'),
  i18nMinorDistance: () =>
    _t(
      translations.components.shoppingStoresList.minorDistance,
      'Menor distância',
    ),
  i18nGreaterDistance: () =>
    _t(
      translations.components.shoppingStoresList.greaterDistance,
      'Maior distância',
    ),
};
