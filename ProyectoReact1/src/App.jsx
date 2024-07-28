import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Tintos from './components/Tintos';
import Blancos from './components/Blancos';
import VinoDetail from './components/VinoDetail';
import Home from './components/Home'; 
import { TintoProvider } from './context/TintoContext';
import { BlancoProvider } from './context/BlancoContext';
import './App.css';

function App() {
  return (
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
            </Routes>
          </div>
        </Router>
      </BlancoProvider>
    </TintoProvider>
  );
}

export default App;
