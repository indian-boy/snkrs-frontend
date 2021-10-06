import { Dropdown, Option } from 'app/components';
import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Theme from 'styles/themes/main-theme';
import { ShoppingStore } from 'types';
import { ShoppingStoreCard } from '../ShoppingStoreCard';
import { messages } from './messages';
import { Filters, List, Wrapper } from './styles';

interface Props {
  shoppingStores: ShoppingStore[];
}

export const ShoppingStoresList = memo(
  ({ shoppingStores, ...props }: Props) => {
    const { t } = useTranslation();

    const options = [
      { key: 1, title: t(messages.i18nMinorDistance()) },
      { key: 2, title: t(messages.i18nGreaterDistance()) },
    ];

    const [optionSelectedState, setOptionSelected] = useState<Option>(
      options[0],
    );

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
            {shoppingStores &&
              shoppingStores.map((store, index) => (
                <ShoppingStoreCard {...store} key={index}></ShoppingStoreCard>
              ))}
          </List>
        </Wrapper>
      </Theme>
    );
  },
);
