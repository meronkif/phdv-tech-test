import React, { useContext } from 'react';
import { BaseProduct } from '../../../types/products';
import { cartContext } from '../../../layout/App';

import './Product.css';

type Props = {
  product: BaseProduct;
};
const Pizza = ({ product }: Props) => {
  const { addToCart } = useContext(cartContext);

  return (
    <div className="Product">
      <i className={`Product-icon fa ${product.image}`}></i>
      <div className="Product-title">{product.title}</div>
      <div className="Product-add" onClick={() => addToCart(product)}>
        Add to cart ${product.price.grossPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default Pizza;
