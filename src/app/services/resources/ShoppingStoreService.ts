import api from 'app/services/resources/api';
import { ShoppingStoresMockData } from 'mocks/shoppingStores/mockData';
import { ShoppingStore } from 'types';

const getShoppingStores = async ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  if (process.env.NODE_ENV === 'production') {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      data: ShoppingStoresMockData,
    };
  }

  return api.get<ShoppingStore[]>('/shopping-stores', {
    params: {
      latitude,
      longitude,
    },
  });
};

export { getShoppingStores };
