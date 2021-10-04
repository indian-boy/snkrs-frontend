import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { FormattedNumber, IntlProvider } from 'react-intl';
import { messages } from './messages';
import { ReactComponent as PinLocation } from 'assets/svgs/icons/pin_location.svg';
import { ShoppingStore } from 'app/entities';
import Theme from 'styles/themes/main-theme';

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
              <Information>{address.street}</Information>
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

const Wrapper = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  align-items: center;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.2rem;
  color: ${props => props.theme.palette.primary.p700};
`;

const Distance = styled.span`
  font-weight: 500;
  font-size: 1.125rem;
  color: ${props => props.theme.palette.primary.p700};
`;

const SeeOnMap = styled.button`
  background-color: transparent;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  text-decoration-line: underline;
  cursor: pointer;
  outline: none;
  text-align: center;
  user-select: none;
  display: inline-flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  border: none;
  color: ${props => props.theme.palette.primary.p700};
  margin-top: 0.5rem;
  padding: 0;

  :focus,
  :active {
    outline: none;
  }
`;

const ContentWrapper = styled.div`
  background-color: ${props => props.theme.palette.secondary.default};
  margin: 1rem 0;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem;
  gap: 0.5rem;
`;

const Information = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: ${props => props.theme.palette.secondary.s500};
`;

const Availability = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 0.75rem;
  line-height: 1.5rem;
  color: ${props => props.theme.palette.success.s300};
`;
