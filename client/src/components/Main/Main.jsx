import React from "react";
import Home from './Home/Home'
import SubmitData from './SubmitData/SubmitData'
import PagConfirmacion from './PagConfirmacion/PagConfirmacion'
import MisArchivos from './MisArchivos/MisArchivos'

import {Route, Routes} from 'react-router-dom';

const Main = () => {
  
  return( 
  <main className="main">
    <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/upload" element={<SubmitData/>} />
      <Route path="/uploadDone" element={<PagConfirmacion/>}/>
      <Route path="/files" element={<MisArchivos/>}/>
    </Routes>
  </main>)
};

export default Main;
