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

interface Props extends ShoppingStore {
  onClick?: () => void;
}

export const ShoppingStoreCard = memo(
  ({ onClick, placeName, address, availability, serviceHours }: Props) => {
    const { t } = useTranslation();

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

    // HARDCODED USER LOCATION
    // MUSEU DO FUTEBOL - Endereço: Praça Charles Miler, s/n - Pacaembu, São Paulo - SP, 01234-010

    const distanceInKilometersApproximately = (
      Math.round(
        pythagoreanKilometersBetweenPoints({
          latitudeA: -23.5473784,
          longitudeA: -46.6654746,
          latitudeB: address.latitude,
          longitudeB: address.longitude,
        }),
      ) / 1000
    ).toFixed(1);

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
                  value={Number(distanceInKilometersApproximately)}
                />
              </Distance>
            </Header>
            <SeeOnMap type="button" onClick={onClick}>
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
