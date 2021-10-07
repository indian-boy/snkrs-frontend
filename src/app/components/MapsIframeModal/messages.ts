import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  i18nSearchPlaceholder: () =>
    _t(translations.homePage.searchPlaceholder, 'Busque por endereço ou CEP'),
};
