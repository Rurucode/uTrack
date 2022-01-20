import React, { useState } from "react";

// Importamos los componentes que vayamos a necesitar
import Profile from '../Profile/Profile'

// Importamos los iconos
import loginIllustration from "./assets/images/loginIllustration.png";
import utrackLogo from "./assets/images/utrackLogo.png";
import backIconWhite from "./assets/images/backIconWhite.png";
import inSlide from "./assets/images/inSlide.png";
import outSlide from "./assets/images/outSlide.png";

// Importamos el archico CSS y normalize
import './LoginIntro.css'
import 'normalize.css'

const LoginIntro = () => {

  const [value, setValue] = useState(1);

  // Definimos la función que cambiará el primer slide al hacer click en el botón
  const nextSlide2 = () => {
    setValue (2);
  }

  // Definimos la función que cambiará el segundo slide al hacer click en el botón
  const nextSlide3 = () => {
    setValue (3);
  }

  // Definimos la función que cambiará el componente cuando hagamos click en el último slide
  const nextSlide4 = () => {<Profile/>}

  return <div className="container">

      {/* Le damos un valor a cada slide, para que cuando este cambie, nos muestre el siguiente slide */}
      { value === 1 &&
        <div className="slide1">
          <div className="loginIntro-divLogo">
            <img  src={utrackLogo} className="loginIntro-logo" alt="utrackLogo"/>
            <p className="loginIntro-p">SALTAR</p>
          </div>
          <div className="loginIntro-divIllustration">
            <img  src={loginIllustration} className="loginIntro-illustration" alt="utrackIllustration"/>
          </div>
          <div className="loginIntro-divTexts">
            <h3 className="loginIntro-h3">Mantén organizados todos tus proyectos y mejora su gestión.</h3>
            <p className="loginIntro-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, vero culpa quaerat quas nulla ad enim soluta similique eius quisquam eveniet dolorem expedita quod, et aperiam ut quae repudiandae itaque.</p>
          </div>
          <div className="loginIntro-divList">
            <img  src={inSlide} className="loginIntro-divInput" alt="inSlide"/>
            <img  src={outSlide} className="loginIntro-divInput" alt="outSlide"/>
            <img  src={outSlide} className="loginIntro-divInput" alt="outSlide"/>
          </div>
          <button className="loginIntro-button" id="buttonSlide1" onClick={nextSlide2}>
            <img  src={backIconWhite} className="loginIntro-backIconWhite" alt="backIcon"/>
          </button>
        </div>
      }

      {/* Le damos un valor a cada slide, para que cuando este cambie, nos muestre el siguiente slide */}
      { value === 2 &&
        <div className="slide2">
          <div className="loginIntro-divLogo">
            <img  src={utrackLogo} className="loginIntro-logo" alt="utrackLogo"/>
            <p className="loginIntro-p">SALTAR</p>
          </div>
          <div className="loginIntro-divIllustration">
            <img  src={loginIllustration} className="loginIntro-illustration" alt="utrackIllustration"/>
          </div>
          <div className="loginIntro-divTexts">
            <h3 className="loginIntro-h3">Controla y trakea si tus proyectos se usan sin tu permiso.</h3>
            <p className="loginIntro-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, vero culpa quaerat quas nulla ad enim soluta similique eius quisquam eveniet dolorem expedita quod, et aperiam ut quae repudiandae itaque.</p>
          </div>
          <div className="loginIntro-divList">
            <img  src={outSlide} className="loginIntro-divInput" alt="outSlide"/>
            <img  src={inSlide} className="loginIntro-divInput" alt="inSlide"/>
            <img  src={outSlide} className="loginIntro-divInput" alt="outSlide"/>
          </div>
          <button className="loginIntro-button" id="buttonSlide2" onClick={nextSlide3}>
            <img  src={backIconWhite} className="loginIntro-backIconWhite" alt="backIcon"/>
          </button>
        </div>
      }

      {/* Al pulsar en el botón de este slide nos lleva al componente Profile */}
      { value === 3 && 
        <div className="slide3" display="none">
          <div className="loginIntro-divLogo">
            <img  src={utrackLogo} className="loginIntro-logo" alt="utrackLogo"/>
            <p className="loginIntro-p">SALTAR</p>
          </div>
          <div className="loginIntro-divIllustration">
            <img  src={loginIllustration} className="loginIntro-illustration" alt="utrackIllustration"/>
          </div>
          <div className="loginIntro-divTexts">
            <h3 className="loginIntro-h3">Gestionamos por ti los registros y los procesos legales.</h3>
            <p className="loginIntro-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, vero culpa quaerat quas nulla ad enim soluta similique eius quisquam eveniet dolorem expedita quod, et aperiam ut quae repudiandae itaque.</p>
          </div>
          <div className="loginIntro-divList">
            <img  src={outSlide} className="loginIntro-divInput" alt="outSlide"/>
            <img  src={outSlide} className="loginIntro-divInput" alt="outSlide"/>
            <img  src={inSlide} className="loginIntro-divInput" alt="inSlide"/>
          </div>
          <button className="loginIntro-finalButton" id="buttonSlide3" onClick={nextSlide4}>
            <img  src={backIconWhite} className="loginIntro-backIconWhite" alt="backIcon"/>
          </button>
          <p className="loginIntro-signIn">Si ya tienes cuenta, <a href="#">inicia sesión.</a></p>
        </div>
      }
  </div>
};

export default LoginIntro;
