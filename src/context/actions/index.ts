import { IProduct } from '../../interfaces/productsInterface';

interface SetProductsAction {
  type: string;
  payload: IProduct[];
}

export type Action = SetProductsAction;
