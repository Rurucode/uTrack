import React from "react";
import foto from "../../../../assets/iconfoto.png";
import puntos from "../../../../assets/puntos.png";
import './archivoLista.css'

const ArchivoLista = () => {
  return <div className="ArchivoLista">
    <img className="iconfoto" src={foto} alt="" />
    <div className="archivop">
      <p>Nombre del archivo</p>
      <p>22-11-2025</p>
    </div>
    <img className="puntos" src={puntos} alt="" />
  </div>;
};

export default ArchivoLista;
