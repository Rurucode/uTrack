import React from "react";

// Importamos los iconos
import loginIllustration from "./assets/images/loginIllustration.png";
import utrackLogo from "./assets/images/utrackLogo.png";
import backIconWhite from "./assets/images/backIconWhite.png";

// Importamos el archico CSS y normalize
import './LoginIntro.css'
import 'normalize.css'

const LoginIntro = () => {
  return <div className="loginIntro-div">
    <div className="loginIntro-divLogo">
      <img  src={utrackLogo} className="loginIntro-logo"/>
      <p className="loginIntro-p">SALTAR</p>
    </div>
    <div className="loginIntro-divIllustration">
      <img  src={loginIllustration} className="loginIntro-illustration" />
    </div>
    <div className="loginIntro-divTexts">
      <h3 className="loginIntro-h3">Mantén organizados todos tus proyectos y mejora su gestión</h3>
      <p className="loginIntro-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, vero culpa quaerat quas nulla ad enim soluta similique eius quisquam eveniet dolorem expedita quod, et aperiam ut quae repudiandae itaque.</p>
    </div>
    <div className="loginIntro-divList">
      <input type="radio" className="loginIntro-divInput"/>
      <input type="radio" className="loginIntro-divInput"/>
      <input type="radio" className="loginIntro-divInput"/>
    </div>
    <button className="loginIntro-button">
      <img  src={backIconWhite} className="loginIntro-backIconWhite"/>
    </button>
  </div>;
};

export default LoginIntro;
