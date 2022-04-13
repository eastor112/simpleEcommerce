import { IProduct } from '../../interfaces/productsInterface';
import { Action } from '../actions/index';
import actionType from '../action-types/index';

interface IProductState {
  products: IProduct[];
}

const initialState = {
  products: [],
};

const productsReducer = (
  state: IProductState = initialState,
  action: Action,
) => {
  switch (action.type) {
    case actionType.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
