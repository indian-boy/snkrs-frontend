/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */
import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  i18nSeeOnMapLabel: () =>
    _t(translations.components.shoppingStoreCard.seeOnMapLabel, 'Ver no mapa'),
  i18nService: () =>
    _t(translations.components.shoppingStoreCard.service, 'Atendimento'),
  i18nAvailability: () =>
    _t(
      translations.components.shoppingStoreCard.availability,
      'Disponível em {{count}} dias úteis',
    ),
};
