import React, { useContext } from 'react';
import { TintoContext } from '../context/TintoContext';
import { BlancoContext } from '../context/BlancoContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { tintos } = useContext(TintoContext);
  const { blancos } = useContext(BlancoContext);

  const todosLosVinos = [...tintos, ...blancos];

  return (
    <div className="vino-list">
      {todosLosVinos.map(vino => (
        <div key={vino.id} className="vino-card">
          <img src={vino.imagen} alt={vino.nombre} />
          <h3>{vino.nombre}</h3>
          <p>{vino.año} - {vino.región}, {vino.país}</p>
          <Link to={`/vinos/${vino.id}`}>Ver detalles</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
