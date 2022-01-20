import React from "react";
import './MisArchivos.css';
import cohete from "../../../assets/cohete.png"
import circle from "../../../assets/circulo.png"
import parte1 from "../../../assets/parteTop1.png"
import parte2 from "../../../assets/parteTop2.png"
import parte3 from "../../../assets/parteTop3.png"
import ArchivoLista from "./archivoLista/archivoLista";
import TopNav from '../../../components/Head/TopNav/TopNav';
import Nav from '../../../components/Head/Nav/Nav';

const MisArchivos = (props) => {
  const pintar = () => {
    console.log(props.elements +"FFFFFFFFFFFFFFFFFFFFFFFFFFFF");
    return props.elements.map((a,i)=> {if(i > 5 && i < 10) {return <ArchivoLista name={a.nombre} date={a.dateupload.slice(0, 10)} url={a.url} key={i}/>}})
  }
  
  return <div className="MisArchivos">
    {/* <div className="top">
      <div className="topPar">
        <p className="purple">PLAN PREMIUM<img src={cohete} alt="cohete" /></p>
        <p className="alm">Almacenamiento</p>
        <p className="gb">250 GB usados / 2500 GB disponibles</p>
      </div>
      <img className="circle" src={circle} alt="circle" />
    </div> */}
    <TopNav/>
    <div className="margin">
      <img className="parte1" src={parte1} alt="" />
      <img className="parte2" src={parte2} alt="" />
      <img className="parte3" src={parte3} alt="" />
    </div>
    {/* <ArchivoLista name={props.elements[0].nombre} /> */}
    {pintar()}
    <Nav/>
  </div>
};

export default MisArchivos;
