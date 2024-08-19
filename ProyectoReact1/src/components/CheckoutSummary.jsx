import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CheckoutSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formId } = location.state || {};

  if (!formId) {
    
    navigate('/');
    return null;
  }

  return (
    <div className="checkout-summary">
      <h3>Gracias por tu compra</h3>
      <p>Tu ID de transacción es: {formId}</p>
      <button onClick={() => navigate('/')}>Volver a la tienda</button>
    </div>
  );
};

export default CheckoutSummary;
