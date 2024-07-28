import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TintoContext } from '../context/TintoContext';
import { BlancoContext } from '../context/BlancoContext';


const VinoDetail = () => {
  const { id } = useParams();
  const { tintos } = useContext(TintoContext);
  const { blancos } = useContext(BlancoContext);

  const vino = tintos.find(vino => vino.id === parseInt(id)) || blancos.find(vino => vino.id === parseInt(id));

  if (!vino) {
    return <div>Vino no encontrado</div>;
  }

  return (
    <div className="vino-detail">
      <img src={vino.imagen} alt={vino.nombre} />
      <h2>{vino.nombre}</h2>
      <p><strong>Año:</strong> {vino.año}</p>
      <p><strong>País:</strong> {vino.país}</p>
      <p><strong>Región:</strong> {vino.región}</p>
      <p><strong>Precio:</strong> ${vino.precio.toFixed(2)}</p>
      <p><strong>Descripción:</strong> {vino.descripción}</p>
    </div>
  );
};

export default VinoDetail;
