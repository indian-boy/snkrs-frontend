import { ReactComponent as PinLocation } from 'assets/svgs/icons/pin_location.svg';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FormattedNumber, IntlProvider } from 'react-intl';
import ThemeProviderWrapper from 'styles/themes/themeProvider';
import { ShoppingStore } from 'types';
import { messages } from './messages';
import {
  Availability,
  ContentWrapper,
  Distance,
  Header,
  Information,
  SeeOnMap,
  Title,
  Wrapper,
} from './styles';

interface Props extends ShoppingStore {
  onClick?: () => void;
}

export const ShoppingStoreCard = memo(
  ({
    distance,
    onClick,
    placeName,
    address,
    availability,
    serviceHours,
  }: Props) => {
    const { t } = useTranslation();

    const distanceInKilometersApproximately = (distance / 1000).toFixed(1);

    return (
      <IntlProvider locale={navigator.language}>
        <ThemeProviderWrapper>
          <Wrapper>
            <Header>
              <Title>{placeName}</Title>
              <Distance>
                <FormattedNumber
                  style={`unit`}
                  unitDisplay="narrow"
                  unit="kilometer"
                  value={Number(distanceInKilometersApproximately)}
                />
              </Distance>
            </Header>
            <SeeOnMap
              role="showShoppingStoreOnMap"
              type="button"
              onClick={onClick}
            >
              <PinLocation />
              {t(messages.i18nSeeOnMapLabel())}
            </SeeOnMap>
            <ContentWrapper>
              <Information>{address.location}</Information>
              <Information>
                {t(messages.i18nService())}:
                <br />
                {serviceHours}
              </Information>
              <Availability>
                {t(messages.i18nAvailability(), { count: availability })}
              </Availability>
            </ContentWrapper>
          </Wrapper>
        </ThemeProviderWrapper>
      </IntlProvider>
    );
  },
);
