import { combineReducers } from 'redux';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  store: productsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
