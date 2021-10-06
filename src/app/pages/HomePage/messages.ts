import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  i18nTitle: () => _t(translations.homePage.pageTitle, 'Home Page'),
  i18nPageMetaContent: () =>
    _t(translations.homePage.pageMetaContent, 'Home Page - Meta Content'),
  i18nShoppingStores: () => _t(translations.homePage.shoppingStores, 'Lojas'),
  i18nSearchPlaceholder: () =>
    _t(translations.homePage.searchPlaceholder, 'Busque por endereço ou CEP'),
};
