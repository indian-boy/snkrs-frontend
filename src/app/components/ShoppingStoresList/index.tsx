import { Dropdown, Option } from 'app/components/commons/Dropdown';
import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import Theme from 'styles/themes/main-theme';
import { ShoppingStoreCard } from '../ShoppingStoreCard';

interface Props {}

export const ShoppingStoresList = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const [optionSelectedState, setOptionSelected] = useState<Option>();

  const options = [
    { key: 1, selected: false, title: 'Option #1' },
    { key: 2, selected: false, title: 'Option #2' },
  ];

  const stores = [
    {
      id: 1,
      placeName: 'Avenida paulista',
      address: {
        latitude: 0,
        longitude: 0,
        street: 'Avenida Paulista, 1227 - Bela Vista São Paulo - SP, 01311-200',
      },
      availability: 4,
      serviceHours: 'Segunda a Sábado 10h às 22h | Domingo 11h às 20h',
    },
    {
      id: 2,
      placeName: 'Avenida paulista',
      address: {
        latitude: 0,
        longitude: 0,
        street: 'Avenida Paulista, 1227 - Bela Vista São Paulo - SP, 01311-200',
      },
      availability: 4,
      serviceHours: 'Segunda a Sábado 10h às 22h | Domingo 11h às 20h',
    },
  ];

  return (
    <Theme>
      <Wrapper>
        <Filters>
          <Dropdown
            label="Drop"
            options={options}
            optionSelectedState={optionSelectedState}
            setOptionSelected={setOptionSelected}
          />
        </Filters>
        <List>
          {stores &&
            stores.map((store, index) => (
              <ShoppingStoreCard {...store} key={index}></ShoppingStoreCard>
            ))}
        </List>
      </Wrapper>
    </Theme>
  );
});

const Wrapper = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.palette.secondary.s200};
`;

const Filters = styled.div`
  display: flex;
  justify-content: end;
`;

const List = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;
