export interface ShoppingStore {
  id: number;
  placeName: string;
  address: Address;
  availability: number;
  serviceHours: string;
}

export interface Address {
  latitude: number;
  longitude: number;
  location: string;
}
