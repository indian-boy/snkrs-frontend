/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */
import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  i18nFindShoppingStore: () =>
    _t(
      translations.components.footer.findShoppingStore,
      'Encontre Uma Loja Nike',
    ),
  i18nRegisterForNews: () =>
    _t(
      translations.components.footer.registerForNews,
      'Cadastre-se para receber novidades',
    ),
  i18nSiteMap: () => _t(translations.components.footer.siteMap, 'Mapa do site'),
  i18nHelpLinks: {
    i18nSummary: () => _t(translations.components.footer.help.summary, 'Ajuda'),
  },
  i18nAboutNikeLinks: {
    i18nSummary: () =>
      _t(translations.components.footer.aboutNike.summary, 'Sobre a Nike'),
    links: {
      i18nGeneralQuestions: () =>
        _t(
          translations.components.footer.aboutNike.generalQuestions,
          'Dúvidas Gerais',
        ),
      i18FindYourSize: () =>
        _t(
          translations.components.footer.aboutNike.findYourSize,
          'Encontre seu Tamanho',
        ),
      i18nOrders: () =>
        _t(translations.components.footer.aboutNike.orders, 'Pedidos'),
      i18nExchangesAndReturns: () =>
        _t(
          translations.components.footer.aboutNike.exchangesAndReturns,
          'Trocas e Devoluções',
        ),
      i18nEditConsent: () =>
        _t(
          translations.components.footer.aboutNike.editConsent,
          'Editar consentimento',
        ),
      i18nPayments: () =>
        _t(translations.components.footer.aboutNike.payments, 'Pagamentos'),
      i18nCookiePreferences: () =>
        _t(
          translations.components.footer.aboutNike.cookiePreferences,
          'Preferências de Cookie',
        ),
      i18nProducts: () =>
        _t(translations.components.footer.aboutNike.products, 'Produtos'),
      i18nCorporate: () =>
        _t(translations.components.footer.aboutNike.corporate, 'Corporativo'),
      i18nContactUs: () =>
        _t(translations.components.footer.aboutNike.contactUs, 'Fale Conosco'),
    },
  },
  i18nSocialMedias: () =>
    _t(translations.components.footer.socialMedias, 'Redes Sociais'),
  i18nPaymentMethods: () =>
    _t(translations.components.footer.paymentMethods, 'Formas de pagamento'),
  i18nPrivacyPolicy: () =>
    _t(
      translations.components.footer.paymentMethods,
      'Política de Privacidade',
    ),
  i18nUserTerms: () =>
    _t(translations.components.footer.userTerms, 'Termos de Uso'),
  i18nCompanyInfos: () =>
    _t(
      translations.components.footer.companyInfos,
      '© 2021 Nike. Todos os direitos reservados. Fisia Comércio de Produtos Esportivos Ltda - CNPJ: 59.546.515/0016-10 Rua José Semião Rodrigues Agostinho, 1370 - Galpão Unidade 17 - Nível 0, 1 e 2 - CEP 06833-300 - Embu das Artes/SP.',
    ),
};
