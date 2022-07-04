import React, { useEffect, useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProductsService from '../../services/products-service';
import { AnyProduct, ProductType } from '../../types/products';
import Dessert from './products/Dessert';
import Side from './products/Side';
import Pizza from './products/Pizza';
import './ProductPage.css';

const componentMap = {
  [ProductType.DESSERT]: Dessert,
  [ProductType.SIDE]: Side,
  [ProductType.PIZZA]: Pizza,
};

const ProductPage = () => {
  const [products, setProducts] = useState<AnyProduct[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const productData = await ProductsService.getProducts();
      setProducts(productData);
    };
    try {
      fetchProducts();
    } catch (err) {
      console.error({ err });
    }
  }, [setProducts]);
  return (
    <>
      <h1>Products</h1>
      <div className="ProductPage-products">
        {products.map((product) => {
          const productWithId = { ...product, id: uuidv4() };
          const ProductComponent = componentMap[productWithId.type];
          return ProductComponent ? (
            <ProductComponent product={productWithId} key={productWithId.id} />
          ) : null;
        })}
      </div>
    </>
  );
};

export default ProductPage;
