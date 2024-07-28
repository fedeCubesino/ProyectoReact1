import React, { createContext, useState } from 'react';
import chardonnayImg from '../assets/Chardonay.jfif';
import rieslingImg from '../assets/Riesling.jfif';
import sauvignonBlancImg from '../assets/SauvignonBlanc.jfif';
import gewurztraminerImg from '../assets/Gewurztraminer.jfif';
export const BlancoContext = createContext();

export const BlancoProvider = ({ children }) => {
  const [blancos, setBlancos] = useState([
    {
      id: 2,
      nombre: 'Chardonnay',
      año: 2020,
      país: 'Estados Unidos',
      región: 'California',
      precio: 25000,
      imagen: chardonnayImg,
      descripción: 'Un vino blanco elegante y cremoso con notas de manzana verde y vainilla.'
    },
    {
      id: 4,
      nombre: 'Riesling',
      año: 2021,
      país: 'Alemania',
      región: 'Mosela',
      precio: 20000,
      imagen: rieslingImg,
      descripción: 'Un vino blanco refrescante y aromático con notas de melocotón y albaricoque.'
    },
    {
      id: 7,
      nombre: 'Sauvignon Blanc',
      año: 2021,
      país: 'Nueva Zelanda',
      región: 'Marlborough',
      precio: 22000,
      imagen: sauvignonBlancImg,
      descripción: 'Un vino blanco fresco y vibrante con sabores de maracuyá y lima.'
    },
    {
      id: 9,
      nombre: 'Gewürztraminer',
      año: 2020,
      país: 'Francia',
      región: 'Alsacia',
      precio: 26000,
      imagen: gewurztraminerImg,
      descripción: 'Un vino blanco aromático con notas de lichi, rosa y especias.'
    }
  ]);

  return (
    <BlancoContext.Provider value={{ blancos, setBlancos }}>
      {children}
    </BlancoContext.Provider>
  );
};
