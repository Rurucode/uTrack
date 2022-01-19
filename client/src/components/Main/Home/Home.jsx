import React from "react";

// Importamos los componentes que vayamos a necesitar
import Nav from '../../Head/Nav'
import Topnav from '../../Head/TopNav'

// Importamos los iconos
import planFreeIcon from "./assets/images/planFreeIcon.png";
import folderIcon from "./assets/images/folderIcon.png";
import proyectsIcon from "./assets/images/proyectsIcon.png";
import inboxIcon from "./assets/images/inboxIcon.png";
import recentsIcon from "./assets/images/recentsIcon.png";
import deleteIcon from "./assets/images/deleteIcon.png";
import estadisticas from "./assets/images/estadisticas.png";
import searchIcon from "./assets/images/searchIcon.png";
import settingsIcon from "./assets/images/settingsIcon.png";
import filterIcon from "./assets/images/filterIcon.png";
import arrowIcon from "./assets/images/arrowIcon.png";

// Importamos el archico CSS y normalize
import './Home.css'
import 'normalize.css'

const Home = () => {
  return <div>

    <Topnav/>

    <div className="first-div">
      <p className="first-div-p">PLAN FREE</p>
      <img src={planFreeIcon} className="first-div-img" alt="planFreeIcon" />
    </div>

    <div className="second-div">

      <div className="second-div-user">
        <h4 className="second-div-user-h4">Nombre usuario</h4>
        <p className="second-div-user-p">250 GB de 2500 GB</p>
      </div>

      <div className="second-div-proyects">
        <img src={proyectsIcon} className="second-div-img" alt="proyectsIcon" />
        <h6 className="second-div-h6">120</h6>
        <p className="second-div-p">proyectos</p>
      </div> 

      <div className="second-div-folders">
        <img src={folderIcon} className="second-div-img" alt="foldersIcon" />
        <h6 className="second-div-h6">10</h6>
        <p className="second-div-p">carpetas</p>
      </div>

    </div>

    <div className="third-div">
      <div className="inbox-div">
        <img src={inboxIcon} className="third-div-icon" alt="inboxIcon" />
        <p className="third-div-p">Inbox</p>
      </div>
      <div className="recents-div">
        <img src={recentsIcon} className="third-div-icon" alt="recentsIcon" />
        <p className="third-div-p">Recientes</p>
      </div>
      <div className="delete-div">
        <img src={deleteIcon} className="third-div-icon" alt="deleteIcon" />
        <p className="third-div-p">Eliminados</p>
      </div>
    </div>

    <h3 className="h3-estadisticas">Estadísticas</h3>

    <div className="fourth-div">
      <img src={estadisticas} className="graficoEstadisticas" alt="graficoEstadisticas" />
    </div>

    <div className="fifth-div">
      <div className="fifth-div-search">
        <img src={searchIcon} className="fifth-div-icon" alt="searchIcon" />
      </div>
      <div className="fifth-div-settings">
        <img src={settingsIcon} className="fifth-div-icon" alt="settingsIcon" />
      </div>
      <div className="fifth-div-filters">
        <img src={filterIcon} className="fifth-div-icon" alt="filterIcon" />
      </div>
    </div>

    <div className="sixth-div">

      <hr className="sixth-div-hr"/>

        <div className="sixth-div-contain">
          <div className="sixth-div-left">
            <h3 className="sixth-div-h3">Carpetas</h3>
            <img src={arrowIcon} className="arrowIcon" alt="arrowIcon" />
            <p className="sixth-div-left-p">10 en total</p>
          </div>
          <div className="sixth-div-right">
            <p className="sixth-div-right-p">VER TODO</p>
          </div>
        </div>

      <hr className="sixth-div-hr"/>

        <div className="sixth-div-contain">
          <div className="sixth-div-left">
            <h3 className="sixth-div-h3">Archivos</h3>
            <img src={arrowIcon} className="arrowIcon" alt="arrowIcon" />
            <p className="sixth-div-left-p">120 en total</p>
          </div>
          <div className="sixth-div-right">
            <p className="sixth-div-right-p">VER TODO</p>
          </div>
        </div>

      <hr className="sixth-div-hr"/>

    </div>

    <Nav/>

    </div>
};

export default Home;
