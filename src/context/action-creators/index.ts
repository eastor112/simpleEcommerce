import { IProduct } from '../../interfaces/productsInterface';
import actionType from '../action-types/index';

const setAllProducts = (products: IProduct[]) => {
  return {
    type: actionType.SET_PRODUCTS,
    payload: products,
  };
};

export default setAllProducts;
