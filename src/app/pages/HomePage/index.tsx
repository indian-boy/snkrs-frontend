import { Button, Option, ShoppingStoresList } from 'app/components';
import { ModalContext } from 'app/components/commons/Modal/context';
import { MapsIframeModal } from 'app/components/MapsIframeModal';
import { getShoppingStores } from 'app/services/resources';
import { environment } from 'environment';
import { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { ShoppingStore } from 'types';
import { useCheckIsMediumScreen } from 'utils/helpers';
import { debounce } from 'utils/helpers/debounce';
import { messages } from './messages';
import {
  ContentWrapperMediumScreen,
  ContentWrapperMobileScreen,
  HomeSearchInput,
  Iframe,
  Main,
  SearchWrapper,
  Title,
  Wrapper,
} from './styles';

export function HomePage() {
  const { t } = useTranslation();
  const isMediumScreen = useCheckIsMediumScreen();
  const [searchTermState, setSearchTerm] = useState<string>('');
  const [shoppingStoresState, setShoppingStores] = useState<ShoppingStore[]>(
    [],
  );

  const onSearchInputChangeHandler = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const [shoppingStoreSelectedState, setShoppingStoreSelected] =
    useState<ShoppingStore | null>(null);

  const filterOptions = [
    { key: 1, title: t(messages.i18nMinorDistance()) },
    { key: 2, title: t(messages.i18nGreaterDistance()) },
  ];

  const [filterOptionSelectedState, setFilterOptionSelected] = useState<Option>(
    filterOptions[0],
  );

  useEffect(() => {
    if (filterOptionSelectedState.key === 1) {
    }
  }, [filterOptionSelectedState]);

  const getLatitudeLongitudeFromText = (text: string) => {
    const [latitudeFromSearchTerm, longitudeFromSearchTerm] = text.split(',');
    const latitude = parseFloat(latitudeFromSearchTerm);
    const longitude = parseFloat(longitudeFromSearchTerm);

    return {
      latitude,
      longitude,
    };
  };

  const fetchShoppingStores = async ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => {
    const { data } = await getShoppingStores({ latitude, longitude });

    const dataWithDistance = data.map(shoppingStore => {
      shoppingStore.distance = pythagoreanKilometersBetweenPoints({
        latitudeA: latitude,
        longitudeA: longitude,
        latitudeB: shoppingStore.address.latitude,
        longitudeB: shoppingStore.address.longitude,
      });

      return shoppingStore;
    });

    return dataWithDistance;
  };

  const getDataBasedOnUserLocation = async () => {
    const { latitude, longitude } =
      getLatitudeLongitudeFromText(searchTermState);

    if (!latitude || !longitude) {
      return;
    }

    const data = await fetchShoppingStores({ latitude, longitude });

    setShoppingStores(data);
  };

  const getDataBasedOnUserLocationCallback = useCallback(() => {
    const debounceFetchShoppingStores = async () => {
      const { latitude, longitude } =
        getLatitudeLongitudeFromText(searchTermState);

      if (!latitude || !longitude) {
        return;
      }

      const data = await fetchShoppingStores({ latitude, longitude });

      setShoppingStores(data);
    };

    if (!isMediumScreen && searchTermState.length >= 3) {
      const updateShoppingStoresDebounced = debounce(
        debounceFetchShoppingStores,
        1500,
      );

      updateShoppingStoresDebounced();
    }
  }, [isMediumScreen, searchTermState]);

  useEffect(() => {
    getDataBasedOnUserLocationCallback();
  }, [getDataBasedOnUserLocationCallback]);

  return (
    <>
      <Helmet>
        <title>{t(messages.i18nTitle())}</title>
        <meta name="description" content={t(messages.i18nPageMetaContent())} />
      </Helmet>
      <ModalContext.Consumer>
        {() => (
          <Wrapper>
            <Main>
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
                    onClick={() => getDataBasedOnUserLocation()}
                    label={t(messages.i18nSearchButtonLabel())}
                  ></Button>
                )}
              </SearchWrapper>
              {!isMediumScreen && shoppingStoresState.length > 0 && (
                <ContentWrapperMobileScreen>
                  <ShoppingStoresList
                    setFilterOptionSelected={setFilterOptionSelected}
                    filterOptions={filterOptions}
                    filterOptionSelectedState={filterOptionSelectedState}
                    setShoppingStoreSelected={setShoppingStoreSelected}
                    shoppingStores={shoppingStoresState}
                  />
                </ContentWrapperMobileScreen>
              )}
              {isMediumScreen && shoppingStoresState.length > 0 && (
                <ContentWrapperMediumScreen>
                  <ShoppingStoresList
                    setFilterOptionSelected={setFilterOptionSelected}
                    filterOptions={filterOptions}
                    filterOptionSelectedState={filterOptionSelectedState}
                    setShoppingStoreSelected={setShoppingStoreSelected}
                    shoppingStores={shoppingStoresState}
                  />

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
        )}
      </ModalContext.Consumer>
    </>
  );
}

const pythagoreanKilometersBetweenPoints = ({
  latitudeA,
  longitudeA,
  latitudeB,
  longitudeB,
}: {
  latitudeA: number;
  longitudeA: number;
  latitudeB: number;
  longitudeB: number;
}) => {
  const R = 6371e3;
  const φ1 = (latitudeA * Math.PI) / 180;
  const φ2 = (latitudeB * Math.PI) / 180;
  const Δφ = ((latitudeB - latitudeA) * Math.PI) / 180;
  let Δλ = ((longitudeB - longitudeA) * Math.PI) / 180;

  const Δψ = Math.log(
    Math.tan(Math.PI / 4 + φ2 / 2) / Math.tan(Math.PI / 4 + φ1 / 2),
  );

  const q = Math.abs(Δψ) > 10e-12 ? Δφ / Δψ : Math.cos(φ1);

  // if dLon over 180° take shorter rhumb line across the anti-meridian:
  if (Math.abs(Δλ) > Math.PI) {
    Δλ = Δλ > 0 ? -(2 * Math.PI - Δλ) : 2 * Math.PI + Δλ;
  }

  return Math.sqrt(Δφ * Δφ + q * q * Δλ * Δλ) * R;
};
