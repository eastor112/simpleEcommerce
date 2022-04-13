import { IProduct } from '../../interfaces/productsInterface';
import actionType from '../action-types/index';

interface SetProductsAction {
  type: actionType.SET_PRODUCTS;
  payload: IProduct[];
}

interface SetProductAction {
  type: actionType.SET_PRODUCT;
  payload: IProduct;
}

export type Action = SetProductsAction | SetProductAction;
