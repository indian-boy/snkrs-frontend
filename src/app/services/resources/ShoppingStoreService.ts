import api from 'app/services/resources/api';

const getShoppingStores = (search?: string) => {
  return api.get('/shopping-stores', {
    params: {
      search,
    },
  });
};

export { getShoppingStores };
