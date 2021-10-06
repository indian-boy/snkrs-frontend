import { setupWorker } from 'msw';
import { shoppingStoresHandler } from './shoppingStoresHandler';

export const worker = setupWorker(...shoppingStoresHandler);
