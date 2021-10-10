import { environment } from 'environment';
import { rest } from 'msw';
import { ShoppingStore } from 'types';

export const shoppingStoresHandler = [
  rest.get(`${environment.backendURL}/shopping-stores`, (req, res, ctx) => {
    ctx.delay(2000);

    return res(
      ctx.json<Omit<ShoppingStore, 'distance'>[]>([
        {
          id: 1,
          placeName: 'Nike Store Oscar Freire',
          address: {
            latitude: -23.562692,
            longitude: -46.6695949,
            location:
              'R. Oscar Freire, 969 - Jardim Paulista, São Paulo - SP, 01426-001',
          },
          availability: 4,
          serviceHours: 'Segunda a Sábado 10h às 22h | Domingo 11h às 20h',
        },
        {
          id: 2,
          placeName: 'Shopping Light',
          address: {
            latitude: -23.54669465,
            longitude: -46.638584442469444,
            location:
              'R. Cel. Xavier de Toledo, 23 - Centro Histórico de São Paulo, São Paulo - SP, 01048-000',
          },
          availability: 6,
          serviceHours: 'Segunda a Sábado 10h às 22h | Domingo 11h às 20h',
        },
        {
          id: 2,
          placeName: 'Nike Store Shopping Higienópolis',
          address: {
            latitude: -23.542123699999998,
            longitude: -46.657392921521144,
            location:
              'Avenida Higienópolis, 618 - 127 a 129 - Higienópolis, São Paulo - SP, 01238-000',
          },
          availability: 2,
          serviceHours: 'Segunda a Sábado 10h às 22h | Domingo 11h às 20h',
        },
      ]),
    );
  }),
];
