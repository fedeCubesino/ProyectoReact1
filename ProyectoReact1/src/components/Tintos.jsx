import React from 'react';
import VinoList from './VinoList';
import '../App.css';
const Tintos = () => {
  return (
    <div className='tintos'>
      <h1>Nuestros Vinos Tintos</h1>
      <VinoList tipo="tinto" />
    </div>
  );
};

export default Tintos
