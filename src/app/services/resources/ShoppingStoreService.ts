import api from 'app/services/resources/api';
import { ShoppingStore } from 'types';

const getShoppingStores = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  return api.get<ShoppingStore[]>('/shopping-stores', {
    params: {
      latitude,
      longitude,
    },
  });
};

export { getShoppingStores };
