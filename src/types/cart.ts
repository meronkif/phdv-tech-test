import {Price} from "./price";
import {AnyProduct} from "./products";

export type LineItem = {
  lineItemPrice: Price
  lineItemProductData: AnyProduct
}

export type Cart = {
  lineItems: LineItem[]
  cartPrice: Price
}
