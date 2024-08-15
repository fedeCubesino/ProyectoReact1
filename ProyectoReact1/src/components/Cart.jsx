

import React, { useContext } from 'react';
import { CartContext } from '../context/cartContext';


const Cart = ({ onClose }) => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="cart">
        <p className="cart-empty-message">El carrito está vacío.</p>
        <button className="btn-close" onClick={onClose}>Cerrar</button>
      </div>
    );
  }

  const totalPrice = cartItems.reduce((total, item) => total + item.precio * (item.quantity || 1), 0);

  return (
    <div className="cart">
      <h2 className="cart-title">Tus compras</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <img className="cart-item-image" src={item.imagen} alt={item.nombre} />
          <div className="cart-item-details">
            <h4 className="cart-item-name">{item.nombre}</h4>
            <p className="cart-item-price">Precio: ${item.precio.toFixed(2)}</p>
            <button className="btn-remove" onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </div>
        </div>
      ))}
      <h3 className="cart-total">Total: ${totalPrice.toFixed(2)}</h3>
      <button className="btn-clear" onClick={clearCart}>Vaciar Carrito</button>
      <button className="btn-close" onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default Cart;
