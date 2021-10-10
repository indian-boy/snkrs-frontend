import { Dropdown, Option } from 'app/components';
import React, { Dispatch, memo, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import ThemeProviderWrapper from 'styles/themes/themeProvider';
import { ShoppingStore } from 'types';
import { ShoppingStoreCard } from '../ShoppingStoreCard';
import { messages } from './messages';
import { Filters, List, Wrapper } from './styles';

interface Props {
  setShoppingStoreSelected: Dispatch<SetStateAction<ShoppingStore | null>>;
  shoppingStores: ShoppingStore[];
  setFilterOptionSelected: React.Dispatch<React.SetStateAction<Option>>;
  filterOptions: Option[];
  filterOptionSelectedState: Option;
  role?: React.AriaRole | undefined;
}

export const ShoppingStoresList = memo(
  ({
    filterOptionSelectedState,
    filterOptions,
    setFilterOptionSelected,
    setShoppingStoreSelected,
    shoppingStores,
    ...props
  }: Props) => {
    const { t } = useTranslation();

    const onSelectShoppingStore = value => {
      setShoppingStoreSelected({ ...value });
    };

    return (
      <ThemeProviderWrapper>
        <Wrapper {...props}>
          <Filters>
            <Dropdown
              label={t(messages.i18nFilter())}
              options={filterOptions}
              optionSelectedState={filterOptionSelectedState}
              setOptionSelected={setFilterOptionSelected}
            />
          </Filters>
          <List>
            {shoppingStores &&
              shoppingStores.map((store, index) => (
                <ShoppingStoreCard
                  onClick={() => onSelectShoppingStore(store)}
                  {...store}
                  key={index}
                ></ShoppingStoreCard>
              ))}
          </List>
        </Wrapper>
      </ThemeProviderWrapper>
    );
  },
);
