import { SearchInput, ShoppingStoresList } from 'app/components';
import { ModalContext } from 'app/components/commons/Modal/context';
import { MapsIframeModal } from 'app/components/MapsIframeModal';
import { getShoppingStores } from 'app/services/resources';
import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { ShoppingStore } from 'types';
import { debounce } from 'utils/helpers/debounce';
import { messages } from './messages';
import { Main, Title, Wrapper } from './styles';

export function HomePage() {
  const { t } = useTranslation();
  const modalContext = useContext(ModalContext);

  const [showState, setModalData] = useState<{
    showState: boolean;
    data: any;
  }>({
    showState: false,
    data: {},
  });

  const setModalDataIntoContext = (showState: boolean, data: ShoppingStore) => {
    setModalData({ showState, data });
  };

  const [shoppingStoresListState, setShoppingStoresList] = useState<
    ShoppingStore[]
  >([]);

  const getDebouncedShoppingStores = debounce(async (searchTerm: string) => {
    const result = await getShoppingStores(searchTerm);
    setShoppingStoresList(result.data);
  }, 1000);

  const onSearchInputChangeHandler = (searchTerm: string) => {
    if (searchTerm.length >= 3) {
      getDebouncedShoppingStores(searchTerm);
    }
  };

  const [shoppingStoreSelectedState, setShoppingStoreSelected] =
    useState<ShoppingStore | null>(null);

  useEffect(() => {
    if (shoppingStoreSelectedState) {
      setModalData({ showState: true, data: shoppingStoreSelectedState });
    }
  }, [shoppingStoreSelectedState, modalContext]);

  return (
    <>
      <Helmet>
        <title>{t(messages.i18nTitle())}</title>
        <meta name="description" content={t(messages.i18nPageMetaContent())} />
      </Helmet>
      <ModalContext.Provider
        value={{ state: showState, setModalDataIntoContext }}
      >
        <Wrapper>
          <Main>
            <Title>{t(messages.i18nShoppingStores())}</Title>
            <SearchInput
              onChange={e => onSearchInputChangeHandler(e.target.value)}
              isRounded={true}
              showSearchIcon={true}
              type="search"
              placeholder={t(messages.i18nSearchPlaceholder())}
            />
            {shoppingStoresListState.length > 0 && (
              <ShoppingStoresList
                setShoppingStoreSelected={setShoppingStoreSelected}
                shoppingStores={shoppingStoresListState}
              />
            )}
          </Main>
          <MapsIframeModal></MapsIframeModal>
        </Wrapper>
      </ModalContext.Provider>
    </>
  );
}
