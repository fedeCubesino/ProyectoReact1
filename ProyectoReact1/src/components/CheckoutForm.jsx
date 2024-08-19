import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import { db } from './firebase'; // Importa la instancia de Firestore
import { collection, addDoc } from 'firebase/firestore'; // Importa las funciones necesarias de Firestore

const CheckoutForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const { cartItems, clearCart } = useContext(CartContext); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const generatedId = Math.random().toString(36).substr(2, 9);

    
    const orderData = {
      id: generatedId,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      items: cartItems.map(item => item.nombre), 
      total: cartItems.reduce((total, item) => total + item.precio * (item.quantity || 1), 0),
      date: new Date().toISOString()
    };

    try {
      
      const docRef = await addDoc(collection(db, 'orders'), orderData);
      console.log('Order ID:', docRef.id);

      clearCart();

     
      navigate('/checkout-summary', { state: { formId: docRef.id } });
    } catch (error) {
      console.error('Error al guardar la orden:', error);
    }
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.precio * (item.quantity || 1), 0);

  return (
    <div className="checkout-form">
      <h3>Finalizar Compra</h3>
      <div className="purchase-summary">
        <h4>Resumen de tu compra:</h4>
        {cartItems.map((item, index) => (
          <div key={index} className="purchase-item">
            <p>{item.nombre} - ${item.precio.toFixed(2)} x {item.quantity || 1}</p>
          </div>
        ))}
        <h4>Total: ${totalPrice.toFixed(2)}</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
