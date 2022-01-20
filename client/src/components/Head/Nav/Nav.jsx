import React from "react";


// Importamos los iconos
import blogIcon from "./assets/images/blogIcon.png";
import homeIcon from "./assets/images/homeIcon.png";
import uploadIcon from "./assets/images/uploadIcon.png";
import filesIcon from "./assets/images/filesIcon.png";
import alertIcon from "./assets/images/alertIcon.png";

// Importamos el archico CSS y normalize
import './Nav.css'
import 'normalize.css'

const Nav = () => {
  return <div className="footernavbar-div">
    <nav className="footernavbar-nav">
      <ul className="footernavbar-ul">
        <li className="footernavbar-li" id="blogIconMargin"/>
          <div className="footernavbar-divContainer">
            <a href="">
              <img src={blogIcon} className="footernavbar-icons"/>
            </a>
          </div>
        <li className="footernavbar-li"/>
          <div className="footernavbar-divContainer">
            <a href="">
              <img src={homeIcon} className="footernavbar-icons"/>
            </a>
        </div>
        <li className="footernavbar-li"/>
          <div className="footernavbar-divContainer" id="blackSquare">
            <a href="">
              <img src={uploadIcon} className="footernavbar-icons"/>
          </a>
        </div>
        <li className="footernavbar-li"/>
          <div className="footernavbar-divContainer">
            <a href="">
              <img src={filesIcon} className="footernavbar-icons"/>
          </a>
        </div>
        <li className="footernavbar-li"/>
        <div className="footernavbar-divContainer">
          <a href="">
            <img src={alertIcon} className="footernavbar-icons"/>
          </a>
        </div>
      </ul>
    </nav>
  </div>;

};

export default Nav;
