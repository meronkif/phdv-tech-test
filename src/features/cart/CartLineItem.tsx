import React from 'react';
import { LineItem } from '../../types/cart';
import './CartLineItem.css';

type Props = {
  cartLineItem: LineItem;
};
const CartLineItem = ({ cartLineItem }: Props) => {
  return (
    <div className="CartLineItem">
      {cartLineItem.lineItemProductData.title} $
      {cartLineItem.lineItemPrice.grossPrice.toFixed(2)}
    </div>
  );
};

export default CartLineItem;
