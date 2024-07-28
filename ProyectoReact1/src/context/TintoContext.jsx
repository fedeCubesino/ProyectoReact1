import React, { createContext, useState } from 'react';
import cabernetSauvignonImg from '../assets/CabernetBurdeos.jfif';
import merlotImg from '../assets/Merlotjfif.jfif';
import pinotNoirImg from '../assets/PinotNoir.jfif';
import syrahImg from '../assets/Sirah.jfif';
import zinfandelImg from '../assets/Zinfandel.jfif'; 
export const TintoContext = createContext();

export const TintoProvider = ({ children }) => {
  const [tintos, setTintos] = useState([
    {
      id: 1,
      nombre: 'Cabernet Sauvignon',
      año: 2018,
      país: 'Francia',
      región: 'Burdeos',
      precio: 35000,
      imagen: cabernetSauvignonImg,
      descripción: 'Un vino tinto robusto y afrutado con notas de grosella negra y roble.'
    },
    {
      id: 3,
      nombre: 'Merlot',
      año: 2019,
      país: 'Italia',
      región: 'Toscana',
      precio: 30000,
      imagen: merlotImg,
      descripción: 'Un vino tinto suave y sedoso con sabores de ciruela y cereza.'
    },
    {
      id: 5,
      nombre: 'Pinot Noir',
      año: 2017,
      país: 'Chile',
      región: 'Valle de Casablanca',
      precio: 40000,
      imagen: pinotNoirImg,
      descripción: 'Un vino tinto ligero y elegante con sabores de frambuesa y especias.'
    },
    {
      id: 6,
      nombre: 'Syrah',
      año: 2016,
      país: 'Australia',
      región: 'Barossa Valley',
      precio: 45000,
      imagen: syrahImg,
      descripción: 'Un vino tinto potente con notas de arándano, pimienta negra y chocolate.'
    },
    {
      id: 8,
      nombre: 'Zinfandel',
      año: 2018,
      país: 'Estados Unidos',
      región: 'California',
      precio: 28000,
      imagen: zinfandelImg,
      descripción: 'Un vino tinto rico y especiado con notas de frambuesa, mora y pimienta.'
    }
  ]);

  return (
    <TintoContext.Provider value={{ tintos, setTintos }}>
      {children}
    </TintoContext.Provider>
  );
};
