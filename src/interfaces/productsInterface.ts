export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
}

export interface IRating {
  rate: number;
  count: number;
}

export interface IProductExtended extends IProduct {
  isFavourite: boolean;
  finishOffer: Date;
  isActive: boolean;
  isAddedToCart: boolean;
}

export interface IProductState {
  products: IProductExtended[];
  activeProduct: IProductExtended | null;
}
