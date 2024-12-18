import React from 'react';
import { SlBasket } from 'react-icons/sl'

import style from '../Css/cartPage.module.css'; // Importing CSS module
function CartPage() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <div className={style.zagolovokCart}>Cart  <SlBasket class='basket-icon'/></div>
      <div className={style.products}>
        {cart.length === 0 ? (
          <p className={style.emptyCart}>Your cart is empty!</p>
        ) : (
          <div className={style.cartItems}>
            {cart.map((item) => (
              <div key={item.id} className={style.cartItem}>
                <img src={item.image} alt={item.title} className={style.cartItemImage} />
                <div className={style.cartItemDetails}>
                  <h2>{item.title}</h2>
                  <p>Quantity: {item.quantity}</p>
                  <p><span>${item.price.toFixed(2)} each</span></p>
                  <button className={style.removeButton} onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default CartPage;
