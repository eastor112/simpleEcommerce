import { IProduct, IProductExtended } from '../interfaces/productsInterface';
import { randomOfferTime } from '../helpers/timeHelper';

const BASE_URL: string | undefined = process.env.REACT_APP_API_URL;

export const getAllProductsApi = async () => {
  const results = await fetch(`${BASE_URL}/products`);
  const data: IProduct[] = await results.json();

  const fullProducts: IProductExtended[] = data.map((product: IProduct) => {
    const finishOffer = randomOfferTime();
    return {
      ...product,
      isFavourite: false,
      finishOffer,
      isActive: true,
      isAddedToCart: false,
    };
  });

  return fullProducts;
};

export const getProductApi = async (id: number | string) => {
  const results = await fetch(`${BASE_URL}/products/${id}`);
  const data: IProduct = await results.json();

  const finishOffer = randomOfferTime();

  const fullProduct: IProductExtended = {
    ...data,
    isFavourite: false,
    finishOffer,
    isActive: true,
    isAddedToCart: false,
  };

  return fullProduct;
};
