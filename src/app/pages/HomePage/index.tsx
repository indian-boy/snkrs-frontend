import { SearchInput } from 'app/components';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import useDebouncedFunction from 'utils/helpers/use-debounce';
import { messages } from './messages';
import { Main, Title, Wrapper } from './styles';

export function HomePage() {
  const { t } = useTranslation();

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<any>([]);

  const debouncedSearchTerm = useDebouncedFunction(
    () => {
      console.log('x', searchTerm);
    },
    searchTerm,
    2000,
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
        </Main>
      </Wrapper>
    </>
  );
}
