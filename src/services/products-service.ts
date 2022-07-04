import {products} from "../data/product-data";
import {AnyProduct} from "../types/products";
// mock up API client for fetching data from "backend"
export default class ProductsService {
  static getProducts = async(): Promise<AnyProduct[]> => {
    return new Promise<AnyProduct[]>((resolve => {
      setTimeout(() => resolve(products), Math.random() * 1000)
    }));
  }
}
