import React from "react";
import foto from "../../../../assets/iconfoto.png";
import puntos from "../../../../assets/puntos.png";
import './archivoLista.css'

const ArchivoLista = (props) => {
  return <div className="ArchivoLista">
    <img className="iconfoto" src={props.url} alt="" />

    <div className="archivop">
      <p className="nameA">{props.name}</p>
      <p className="dataA">{props.date}</p>
    </div>
    <img className="puntos" src={puntos} alt="" />
  </div>;
};

export default ArchivoLista;
