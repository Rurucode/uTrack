import React from "react";

// Importamos los iconos
import backIcon from "./assets/images/backIcon.png";
import ringIcon from "./assets/images/ringIcon.png";
import searchIcon from "./assets/images/searchIcon.png";

// Importamos el archico CSS y normalize
import './TopNav.css'
import 'normalize.css'

const TopNav = () => {
  return <div className="topnav-div">
    <nav className="topnav-nav">
      <div className="topnav-leftdiv">
        <a href="">
            <img src={backIcon} className="topnav-icons"/>
          </a>
      </div>
      <div className="topnav-rightdiv">
        <a href="">
          <img src={searchIcon} className="topnav-icons"/>
        </a>
        <a href="">
          <img src={ringIcon} className="topnav-icons"/>
        </a>
      </div>
    </nav>
  </div>;
};

export default TopNav;
