
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Tintos from './components/Tintos';
import Blancos from './components/Blancos';
import VinoDetail from './components/VinoDetail';
import Home from './components/Home'; 
import { TintoProvider } from './context/TintoContext';
import { BlancoProvider } from './context/BlancoContext';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import './App.css';
import { CartProvider } from './context/cartContext';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import CheckoutSummary from './components/CheckoutSummary';


function App() {
  const db = getFirestore();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsCollection = collection(db, 'items');
        const itemsSnapshot = await getDocs(itemsCollection);
        const itemsList = itemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log(itemsList);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, [db]);
  
  return (
  <CartProvider>
    <TintoProvider>
      <BlancoProvider>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/tintos" element={<Tintos />} />
              <Route path="/blancos" element={<Blancos />} />
              <Route path="/vinos/:id" element={<VinoDetail />} />
              <Route path="/cart" element={<Cart />} /> 
              <Route path="/checkout-form" element={<CheckoutForm />} />
              <Route path="/checkout-summary" element={<CheckoutSummary />} />
            </Routes>
          </div>
        </Router>
      </BlancoProvider>
    </TintoProvider>
  </CartProvider>
  );
}

export default App;
