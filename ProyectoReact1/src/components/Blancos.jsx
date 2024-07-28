import React from 'react';
import VinoList from './VinoList';


const Blancos = () => {
  return (
    <div className='blancos'>
      <h1>Nuestros Vinos Blancos</h1>
      <VinoList tipo="blanco" />
    </div>
  );
};

export default Blancos
