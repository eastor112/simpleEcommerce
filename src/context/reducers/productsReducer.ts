import { IProductState } from '../../interfaces/productsInterface';
import { Action } from '../actions/index';
import actionType from '../action-types/index';

const initialState: IProductState = {
  products: [],
  activeProduct: null,
};

const productsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionType.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case actionType.SET_PRODUCT:
      return {
        ...state,
        activeProduct: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
