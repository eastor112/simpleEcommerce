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

    case actionType.SET_IS_ACTIVE:
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === Number(action.payload.id)) {
            return {
              ...item,
              isActive: action.payload.isActive,
            };
          }

          return item;
        }),
      };

    case actionType.SET_IS_FAVOURITE:
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === Number(action.payload.id)) {
            return {
              ...item,
              isFavourite: action.payload.isFavourite,
            };
          }

          return item;
        }),
        activeProduct: state.activeProduct
          ? {
              ...state.activeProduct,
              isFavourite: action.payload.isFavourite,
            }
          : null,
      };
    default:
      return state;
  }
};

export default productsReducer;
