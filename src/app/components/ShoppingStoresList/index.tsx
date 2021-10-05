import { Dropdown, Option } from 'app/components/commons/Dropdown';
import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Theme from 'styles/themes/main-theme';
import { ShoppingStoreCard } from '../ShoppingStoreCard';
import { messages } from './messages';
import { Filters, List, Wrapper } from './styles';

interface Props {}

export const ShoppingStoresList = memo((props: Props) => {
  const { t } = useTranslation();

  const [optionSelectedState, setOptionSelected] = useState<Option>();

  const options = [
    { key: 1, title: t(messages.i18nMinorDistance()) },
    { key: 2, title: t(messages.i18nGreaterDistance()) },
  ];

  const stores = [
    {
      id: 1,
      placeName: 'Avenida paulista',
      address: {
        latitude: 0,
        longitude: 0,
        location:
          'Avenida Paulista, 1227 - Bela Vista São Paulo - SP, 01311-200',
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
        location:
          'Avenida Paulista, 1227 - Bela Vista São Paulo - SP, 01311-200',
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
            label={t(messages.i18nFilter())}
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
