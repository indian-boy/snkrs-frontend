import { SearchInput, ShoppingStoresList } from 'app/components';
import api from 'app/services/resources/api';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { ShoppingStore } from 'types';
import useDebouncedFunction from 'utils/helpers/use-debounce';
import { messages } from './messages';
import { Main, Title, Wrapper } from './styles';

export function HomePage() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<ShoppingStore[]>([]);

  useDebouncedFunction(
    async () => {
      if (searchTerm) {
        const result = await getShoppingStores();
        setResults(result.data);
      }
    },
    searchTerm,
    1500,
  );

  return (
    <>
      <Helmet>
        <title>{t(messages.i18nTitle())}</title>
        <meta name="description" content={t(messages.i18nPageMetaContent())} />
      </Helmet>
      <Wrapper>
        <Main>
          <Title>{t(messages.i18nShoppingStores())}</Title>
          <SearchInput
            onChange={e => setSearchTerm(e.target.value)}
            isRounded={true}
            showSearchIcon={true}
            type="search"
            placeholder={t(messages.i18nSearchPlaceholder())}
          ></SearchInput>
          {results.length > 0 && (
            <ShoppingStoresList shoppingStores={results}></ShoppingStoresList>
          )}
        </Main>
      </Wrapper>
    </>
  );
}

const getShoppingStores = () => {
  return api.get('/shopping-stores');
};
