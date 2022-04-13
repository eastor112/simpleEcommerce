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

interface SetIsActive {
  type: actionType.SET_IS_ACTIVE;
  payload: {
    id: number | string;
    isActive: boolean;
  };
}

interface SetIsFavourite {
  type: actionType.SET_IS_FAVOURITE;
  payload: {
    id: number | string;
    isFavourite: boolean;
  };
}

export type Action =
  | SetProductsAction
  | SetProductAction
  | SetIsActive
  | SetIsFavourite;
