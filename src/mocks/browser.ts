import { setupWorker } from 'msw';
import { shoppingStoresHandler } from './shoppingStores/shoppingStoresHandler';

export const worker = setupWorker(...shoppingStoresHandler);
