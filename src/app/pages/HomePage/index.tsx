import { Button, Option, ShoppingStoresList } from 'app/components';
import { ModalContext } from 'app/components/commons/Modal/context';
import { MapsIframeModal } from 'app/components/MapsIframeModal';
import { getShoppingStores } from 'app/services/resources';
import { environment } from 'environment';
import isDeepEqual from 'fast-deep-equal/react';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { ShoppingStore } from 'types';
import { useCheckIsMediumScreen } from 'utils/helpers';
import { debounce } from 'utils/helpers/debounce';
import { messages } from './messages';
import { ShoppingStoreSortOptions } from './shoppingStoreSortOptions';
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
  const modalContext = useRef(useContext(ModalContext));
  const isMediumScreen = useCheckIsMediumScreen();
  const [searchTermState, setSearchTerm] = useState<string>('');
  const [shoppingStoresState, setShoppingStores] = useState<ShoppingStore[]>(
    [],
  );

  const [shoppingStoreSelectedState, setShoppingStoreSelected] =
    useState<ShoppingStore | null>(null);

  const filterOptions = [
    {
      key: ShoppingStoreSortOptions.Asc,
      title: t(messages.i18nMinorDistance()),
    },
    {
      key: ShoppingStoreSortOptions.Desc,
      title: t(messages.i18nGreaterDistance()),
    },
  ];

  const [filterOptionSelectedState, setFilterOptionSelected] = useState<Option>(
    filterOptions[0],
  );

  const filterOptionSelectedStateRef = useRef(filterOptionSelectedState);

  if (
    !isDeepEqual(
      filterOptionSelectedStateRef.current,
      filterOptionSelectedState,
    )
  ) {
    filterOptionSelectedStateRef.current = filterOptionSelectedState;
  }

  const searchTermRef = useRef(searchTermState);

  if (!isDeepEqual(searchTermRef.current, searchTermState)) {
    searchTermRef.current = searchTermState;
  }

  const shoppingStoresStateRef = useRef(shoppingStoresState);

  if (!isDeepEqual(searchTermRef.current, shoppingStoresState)) {
    shoppingStoresStateRef.current = shoppingStoresState;
  }

  const onSearchInputChangeHandler = (searchTerm: string) => {
    if (searchTerm.length >= 3) {
      setSearchTerm(searchTerm);
    }
  };

  const getDataBasedOnUserLocation = async () => {
    const { latitude, longitude } =
      getLatitudeLongitudeFromText(searchTermState);

    if (!latitude || !longitude) {
      return;
    }

    const data = await fetchShoppingStores(
      { latitude, longitude },
      filterOptionSelectedState,
    );

    setShoppingStores(data);
  };

  const getShoppingStoresBasedOnUserLocation = useCallback(() => {
    const debounceFetchShoppingStores = async () => {
      const { latitude, longitude } =
        getLatitudeLongitudeFromText(searchTermState);

      if (!latitude || !longitude) {
        return;
      }

      const data = await fetchShoppingStores(
        { latitude, longitude },
        filterOptionSelectedStateRef.current,
      );

      setShoppingStores(data);
    };

    if (!isMediumScreen) {
      const updateShoppingStoresDebounced = debounce(
        debounceFetchShoppingStores,
        1500,
      );

      updateShoppingStoresDebounced();
    }
  }, [searchTermState, isMediumScreen]);

  useEffect(() => {
    getShoppingStoresBasedOnUserLocation();
    return () => {};
  }, [getShoppingStoresBasedOnUserLocation]);

  const setShoppingStoreToModalAndDisplays = useCallback(() => {
    if (shoppingStoreSelectedState) {
      if (!isMediumScreen) {
        modalContext.current.setModalDataIntoContext(
          true,
          shoppingStoreSelectedState,
        );
      }
    }
  }, [shoppingStoreSelectedState, modalContext, isMediumScreen]);

  useEffect(() => {
    setShoppingStoreToModalAndDisplays();
  }, [setShoppingStoreToModalAndDisplays]);

  const getDataSortedOnSelectedFilterOption = useCallback(() => {
    const { latitude, longitude } = getLatitudeLongitudeFromText(
      searchTermRef.current,
    );

    const shoppingStoresfiltered =
      mapShoppingStoresWithDistanceApplyingSortingOption(
        shoppingStoresStateRef.current,
        {
          latitude,
          longitude,
        },
        filterOptionSelectedState,
      );

    setShoppingStores(shoppingStoresfiltered);
  }, [filterOptionSelectedState]);

  useEffect(() => {
    getDataSortedOnSelectedFilterOption();
    return () => {};
  }, [getDataSortedOnSelectedFilterOption]);

  return (
    <>
      <Helmet>
        <title>{t(messages.i18nTitle())}</title>
        <meta name="description" content={t(messages.i18nPageMetaContent())} />
      </Helmet>

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

const getLatitudeLongitudeFromText = (text: string) => {
  const [latitudeFromSearchTerm, longitudeFromSearchTerm] = text.split(',');
  const latitude = parseFloat(latitudeFromSearchTerm);
  const longitude = parseFloat(longitudeFromSearchTerm);

  return {
    latitude,
    longitude,
  };
};

const sortByFilterSelectedOption = (
  prev: ShoppingStore,
  next: ShoppingStore,
  filterOptionSelectedState: Option,
) => {
  if (filterOptionSelectedState.key === ShoppingStoreSortOptions.Asc) {
    return prev.distance > next.distance ? 1 : -1;
  }

  if (filterOptionSelectedState.key === ShoppingStoreSortOptions.Desc) {
    return prev.distance < next.distance ? 1 : -1;
  }

  return 1;
};

const fetchShoppingStores = async (
  {
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  },
  filterOptionSelectedState: Option,
) => {
  const { data } = await getShoppingStores({ latitude, longitude });

  return mapShoppingStoresWithDistanceApplyingSortingOption(
    data,
    {
      latitude,
      longitude,
    },
    filterOptionSelectedState,
  );
};

const mapShoppingStoresWithDistanceApplyingSortingOption = (
  shoppingStores: ShoppingStore[],
  userLocation: {
    latitude: number;
    longitude: number;
  },
  filterOptionSelectedState: Option,
) => {
  return shoppingStores
    .map(shoppingStore => {
      shoppingStore.distance = pythagoreanKilometersBetweenPoints({
        latitudeA: userLocation.latitude,
        longitudeA: userLocation.longitude,
        latitudeB: shoppingStore.address.latitude,
        longitudeB: shoppingStore.address.longitude,
      });

      return shoppingStore;
    })
    .sort((prev, next) =>
      sortByFilterSelectedOption(prev, next, filterOptionSelectedState),
    );
};
