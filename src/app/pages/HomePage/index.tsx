import { SearchInput, ShoppingStoresList } from 'app/components';
import { getShoppingStores } from 'app/services/resources';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { ShoppingStore } from 'types';
import { debounce } from 'utils/helpers/debounce';
import { messages } from './messages';
import { Main, Title, Wrapper } from './styles';

export function HomePage() {
  const { t } = useTranslation();
  const [results, setResults] = useState<ShoppingStore[]>([]);

  const getDebouncedShoppingStores = debounce(async (searchTerm: string) => {
    const result = await getShoppingStores(searchTerm);
    setResults(result.data);
  }, 1000);

  const onSearchInputChangeHandler = (searchTerm: string) => {
    if (searchTerm.length >= 3) {
      getDebouncedShoppingStores(searchTerm);
    }
  };

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
            onChange={e => onSearchInputChangeHandler(e.target.value)}
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
