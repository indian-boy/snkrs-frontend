import api from 'app/services/resources/api';
import { ShoppingStore } from 'types';

const getShoppingStores = (search?: string) => {
  return api.get<ShoppingStore[]>('/shopping-stores', {
    params: {
      search,
    },
  });
};

export { getShoppingStores };
