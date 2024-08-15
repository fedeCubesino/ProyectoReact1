import React, { useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from '../context/cartContext';
import { useContext } from 'react';
import Cart from './Cart'; 

function CartWidget() {
  const { cartItems } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  const totalItems = Array.isArray(cartItems) 
    ? cartItems.reduce((total, item) => total + (item.quantity || 1), 0) 
    : 0;

  return (
    <div className="carrito">
      <FaCartShopping size="35px" onClick={() => {
        setShowCart(!showCart); 
      }} />
      <span className="contador">{totalItems}</span>
      {showCart && <Cart onClose={() => setShowCart(false)} />}
    </div>
  );
}

export default CartWidget;
