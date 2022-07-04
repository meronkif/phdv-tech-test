import React, { useState, createContext, useContext } from 'react';
import './App.css';
import ProductPage from '../features/product-page/ProductPage';
import Cart from '../features/cart/Cart';
import { BaseProduct } from '../types/products';
// import {cartContext} from '../context/context'

let initialCartData: any = [];
export const cartContext = createContext(initialCartData);

function App() {
  const [cart, setCart] = useState(initialCartData);

  const addToCart = (product: BaseProduct) => {
    setCart([...cart, product]);
  };
  return (
    <cartContext.Provider value={{ cart, addToCart }}>
      <div className="App">
        <div className="App-header">
          <img src="logo.png" alt="Pizza Hut" className="App-logo" />
        </div>
        <div className="App-page-layout">
          <div className="App-products">
            <ProductPage />
          </div>
          <div className="App-cart">
            <Cart />
          </div>
        </div>
      </div>
    </cartContext.Provider>
  );
}

export default App;
