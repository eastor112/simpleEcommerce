import { Dispatch } from 'redux';
import actionType from '../action-types/index';
import { Action } from '../actions';
import { getAllProductsApi, getProductApi } from '../../services/storeServices';
import { IProductState } from '../../interfaces/productsInterface';
import { RootState } from '../reducers';

export const setAllProducts = () => {
  return async (dispatch: Dispatch<Action>) => {
    const products = await getAllProductsApi();

    dispatch({
      type: actionType.SET_PRODUCTS,
      payload: products,
    });
  };
};

export const getProduct = (id: number | string) => {
  return async (dispatch: Dispatch<Action>) => {
    const product = await getProductApi(id);

    dispatch({
      type: actionType.SET_PRODUCT,
      payload: product,
    });
  };
};

export const setActiveProduct = (id: number | string) => {
  return async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    const { products }: IProductState = getState().store;

    const product = products.find((item) => item.id === +id);

    if (product) {
      dispatch({
        type: actionType.SET_PRODUCT,
        payload: product,
      });
    }
  };
};

export const setIsActiveProduct = (id: number | string, isActive: boolean) => {
  return {
    type: actionType.SET_IS_ACTIVE,
    payload: {
      id,
      isActive,
    },
  };
};

export const setIsFavourite = (id: number | string, isFavourite: boolean) => {
  return {
    type: actionType.SET_IS_FAVOURITE,
    payload: {
      id,
      isFavourite,
    },
  };
};
