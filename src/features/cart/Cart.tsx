import React, { useContext } from 'react';
import { Cart as CartType } from '../../types/cart';
import CartLineItem from './CartLineItem';
import './Cart.css';
import { cartContext } from '../../layout/App';

const Cart = () => {
  const cartData = useContext(cartContext);

  let cart: CartType = {
    lineItems: [],
    cartPrice: {
      netPrice: 0,
      grossPrice: 0,
    },
  };

  cartData.cart.length &&
    cartData.cart.map((cartItem: any) => {
      cart.lineItems.push({
        lineItemPrice: {
          netPrice: cartItem.price.grossPrice,
          grossPrice: cartItem.price.grossPrice,
        },
        lineItemProductData: {
          title: cartItem.title,
          type: cartItem.type,
          price: {
            netPrice: cartItem.price.netPrice,
            grossPrice: cartItem.price.grossPrice,
          },
          image: cartItem.image,
          id: cartItem.id,
        },
      });
      cart.cartPrice = {
        netPrice: cart.cartPrice.netPrice + cartItem.price.netPrice,
        grossPrice: cart.cartPrice.grossPrice + cartItem.price.grossPrice,
      };
    });
  return (
    <div className="Cart">
      <h2>Cart</h2>
      {cartData.cart.length ? (
        <>
          {cart.lineItems.map((cartLineItem) => {
            return (
              <>
                <CartLineItem
                  cartLineItem={cartLineItem}
                  key={cartLineItem.lineItemProductData.id}
                />
              </>
            );
          })}
          <button className="Cart-checkout">
            Checkout ${cart.cartPrice.grossPrice.toFixed(2)}
          </button>
        </>
      ) : (
        <div>Cart is Empty!</div>
      )}
    </div>
  );
};

export default Cart;
