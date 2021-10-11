import { environment } from 'environment';
import { rest } from 'msw';
import { ShoppingStore } from 'types';
import { ShoppingStoresMockData } from './mockData';

export const shoppingStoresHandler = [
  rest.get(`${environment.backendURL}/shopping-stores`, (req, res, ctx) => {
    ctx.delay(2000);

    return res(ctx.json<ShoppingStore[]>(ShoppingStoresMockData));
  }),
];
