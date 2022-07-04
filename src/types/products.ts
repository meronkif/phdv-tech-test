import { Price } from './price';

export enum ProductType {
  SIDE = 'side',
  PIZZA = 'pizza',
  DESSERT = 'dessert',
}

export type BaseProduct = {
  title: string;
  type: ProductType;
  price: Price;
  image: string;
  id?: string;
};

export type Pizza = BaseProduct & {
  type: ProductType.PIZZA;
  sizes: string[];
};

export type Side = BaseProduct & {
  type: ProductType.SIDE;
};

export type Dessert = BaseProduct & {
  type: ProductType.DESSERT;
};

export type AnyProduct = Dessert | Pizza | Side;
