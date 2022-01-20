import React from "react";
import { Link } from "react-router-dom";


// Importamos los iconos
import blogIcon from "./assets/images/blogIcon.png";
import homeIcon from "./assets/images/homeIcon.png";
import uploadIcon from "./assets/images/uploadIcon.png";
import filesIcon from "./assets/images/filesIcon.png";
import shieldIcon from  "./assets/images/shield.png";



// Importamos el archico CSS y normalize
import './Nav.css'
import 'normalize.css'

const Nav = () => {
  return <div className="footernavbar-div">
    <nav className="footernavbar-nav">
      <ul className="footernavbar-ul">
        <li className="footernavbar-li" id="blogIconMargin"/>
          <div className="footernavbar-divContainer">
            <Link to="/">
              <img src={homeIcon} className="footernavbar-icons"/>
            </Link>
          </div>
        <li className="footernavbar-li"/>
          <div className="footernavbar-divContainer">
            <Link to="/">
              <img src={blogIcon} className="footernavbar-icons"/>
            </Link>
        </div>
        <li className="footernavbar-li"/>
          <div className="footernavbar-divContainer" id="blackSquare">
            <Link to="/upload">
              <img src={uploadIcon} className="footernavbar-icons"/>
            </Link>
        </div>
        <li className="footernavbar-li"/>
          <div className="footernavbar-divContainer">
            <Link to="/files">
              <img src={filesIcon} className="footernavbar-icons"/>
          </Link>
        </div>
        <li className="footernavbar-li"/>
        <div className="footernavbar-divContainer">
          <a href="">
            <img src={shieldIcon} className="footernavbar-icons"/>
          </a>
        </div>
      </ul>
    </nav>
  </div>;

};

export default Nav;
