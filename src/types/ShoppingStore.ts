import { Address } from './Address';

export interface ShoppingStore {
  id: number;
  placeName: string;
  address: Address;
  availability: number;
  serviceHours: string;
}
