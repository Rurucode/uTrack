import React from "react";
import { Link } from "react-router-dom";
import abstract from "../../../assets/abstract_1.png";
import './PagConfirmacion.css';


const PagConfirmacion = () => {
  return <div className="confirmacion">
    <img src={abstract} className="fotoabs" alt="foto" />
    <div className="text1">
      <p>¡Listo! </p>
      <p>Tu archivo se ha </p>
      <p>subido correctamente</p>
    </div>
    <div className="text2">
      <p>Lorem ipsum dolor sit amet, consectetur adi elit. Viverra nibh dui pulvinar pretium facilisi. Sit nibh.</p>
    </div>
    <Link to="/">
    <button className="button">VOLVER</button>
    </Link>
  </div>;
};

export default PagConfirmacion;
