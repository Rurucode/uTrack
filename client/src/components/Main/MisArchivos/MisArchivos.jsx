import React from "react";
import './MisArchivos.css';
import cohete from "../../../assets/cohete.png"
import circle from "../../../assets/circulo.png"
import parte1 from "../../../assets/parteTop1.png"
import parte2 from "../../../assets/parteTop2.png"
import parte3 from "../../../assets/parteTop3.png"
import ArchivoLista from "./archivoLista/archivoLista";

const MisArchivos = () => {
  return <div className="MisArchivos">
    {/* <div className="top">
      <div className="topPar">
        <p className="purple">PLAN PREMIUM<img src={cohete} alt="cohete" /></p>
        <p className="alm">Almacenamiento</p>
        <p className="gb">250 GB usados / 2500 GB disponibles</p>
      </div>
      <img className="circle" src={circle} alt="circle" />
    </div> */}
    <img className="parte1" src={parte1} alt="" />
    <img className="parte2" src={parte2} alt="" />
    <img className="parte3" src={parte3} alt="" />
    <ArchivoLista/>
  </div>
};

export default MisArchivos;
