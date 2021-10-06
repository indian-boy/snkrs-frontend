import { ReactComponent as PinLocation } from 'assets/svgs/icons/pin_location.svg';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FormattedNumber, IntlProvider } from 'react-intl';
import Theme from 'styles/themes/main-theme';
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

interface Props extends ShoppingStore {}

export const ShoppingStoreCard = memo(
  ({ placeName, address, availability, serviceHours }: Props) => {
    const { t } = useTranslation();

    const pythagoreanDistanceBetweenPoints = ({
      userLatitude,
      userLongitude,
      shoppingStoreLatitude,
      shoppingStoreLongitude,
    }: {
      userLatitude: number;
      userLongitude: number;
      shoppingStoreLatitude: number;
      shoppingStoreLongitude: number;
    }) => {
      const R = 6371e3;
      const x =
        (shoppingStoreLongitude - userLongitude) *
        Math.cos((userLatitude + shoppingStoreLatitude) / 2);
      const y = shoppingStoreLatitude - userLatitude;
      const d = Math.sqrt(x * x + y * y) * R;
      return d;
    };

    const convertInchInApproximatelyKilometers = (distance: number): number => {
      const differenceBetweenInchAndKilometer = 39588;

      return distance / differenceBetweenInchAndKilometer;
    };

    const pythagoreanDistante = pythagoreanDistanceBetweenPoints({
      userLatitude: -22.853095,
      userLongitude: -47.183919,
      shoppingStoreLatitude: -22.7392463,
      shoppingStoreLongitude: -47.3306032,
    });

    const distanceInKilometers = Math.floor(
      convertInchInApproximatelyKilometers(pythagoreanDistante),
    );

    return (
      <IntlProvider locale={navigator.language}>
        <Theme>
          <Wrapper>
            <Header>
              <Title>{placeName}</Title>
              <Distance>
                <FormattedNumber
                  style={`unit`}
                  unitDisplay="narrow"
                  unit="kilometer"
                  value={distanceInKilometers}
                />
              </Distance>
            </Header>
            <SeeOnMap type="button">
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
        </Theme>
      </IntlProvider>
    );
  },
);
