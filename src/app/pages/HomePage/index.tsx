import { Button, ShoppingStoresList } from 'app/components';
import { ModalContext } from 'app/components/commons/Modal/context';
import { MapsIframeModal } from 'app/components/MapsIframeModal';
import { getShoppingStores } from 'app/services/resources';
import { environment } from 'environment';
import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { ShoppingStore } from 'types';
import { useCheckIsMediumScreen } from 'utils/helpers';
import { debounce } from 'utils/helpers/debounce';
import { messages } from './messages';
import {
  ContentWrapperMediumScreen,
  HomeSearchInput,
  Iframe,
  Main,
  SearchWrapper,
  Title,
  Wrapper,
} from './styles';

export function HomePage() {
  const { t } = useTranslation();
  const modalContext = useContext(ModalContext);

  const isMediumScreen = useCheckIsMediumScreen();

  const [state, setModalData] = useState<{
    showModal: boolean;
    data: any;
  }>({
    showModal: false,
    data: {},
  });

  const [searchTermState, setSearchTerm] = useState<string>('');

  const setModalDataIntoContext = (showModal: boolean, data: ShoppingStore) => {
    setModalData({ showModal, data });
  };

  const [shoppingStoresListState, setShoppingStoresList] = useState<
    ShoppingStore[]
  >([]);

  const getDebouncedShoppingStores = debounce(async () => {
    updateShoppingStoresList();
  }, 1500);

  const onSearchInputChangeHandler = (searchTerm: string) => {
    setSearchTerm(searchTerm);

    if (!isMediumScreen && searchTerm.length >= 3) {
      getDebouncedShoppingStores(searchTerm);
    }
  };

  const [shoppingStoreSelectedState, setShoppingStoreSelected] =
    useState<ShoppingStore | null>(null);

  useEffect(() => {
    if (shoppingStoreSelectedState) {
      if (!isMediumScreen) {
        setModalData({ showModal: true, data: shoppingStoreSelectedState });
      }
    }
  }, [shoppingStoreSelectedState, modalContext, isMediumScreen]);

  const updateShoppingStoresList = async () => {
    const result = await getShoppingStores(searchTermState);
    setShoppingStoresList(result.data);
  };

  return (
    <>
      <Helmet>
        <title>{t(messages.i18nTitle())}</title>
        <meta name="description" content={t(messages.i18nPageMetaContent())} />
      </Helmet>
      <ModalContext.Provider value={{ state, setModalDataIntoContext }}>
        <Wrapper>
          <Main style={state.showModal ? { pointerEvents: 'none' } : {}}>
            <Title>{t(messages.i18nShoppingStores())}</Title>
            <SearchWrapper>
              <HomeSearchInput
                onChange={e => onSearchInputChangeHandler(e.target.value)}
                isRounded={true}
                showSearchIcon={true}
                type="search"
                placeholder={t(messages.i18nSearchPlaceholder())}
              />
              {isMediumScreen && (
                <Button
                  onClick={() => updateShoppingStoresList()}
                  label={t(messages.i18nSearchButtonLabel())}
                ></Button>
              )}
            </SearchWrapper>
            {!isMediumScreen && shoppingStoresListState.length > 0 && (
              <ShoppingStoresList
                setShoppingStoreSelected={setShoppingStoreSelected}
                shoppingStores={shoppingStoresListState}
              />
            )}
            {isMediumScreen && (
              <ContentWrapperMediumScreen>
                {shoppingStoresListState.length > 0 && (
                  <ShoppingStoresList
                    setShoppingStoreSelected={setShoppingStoreSelected}
                    shoppingStores={shoppingStoresListState}
                  />
                )}

                {shoppingStoreSelectedState && (
                  <Iframe
                    src={`https://www.google.com/maps/embed/v1/place?q=${shoppingStoreSelectedState.address.location}&key=${environment.googleAPIKey}`}
                    width="100%"
                    height="100%"
                    title="googlemapsiframe"
                  ></Iframe>
                )}
              </ContentWrapperMediumScreen>
            )}
          </Main>
          <MapsIframeModal></MapsIframeModal>
        </Wrapper>
      </ModalContext.Provider>
    </>
  );
}
