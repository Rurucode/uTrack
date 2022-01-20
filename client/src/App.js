import './App.css';
import Login from './components/Main/Login'
import Logout from './components/Main/Logout/Logout';
import Profile from './components/Main/Profile/Profile';
import {useAuth0} from '@auth0/auth0-react';
import PagConfirmacion from './components/Main/PagConfirmacion/PagConfirmacion';
import { useState, useEffect } from "react";
import axios from "axios";
import MisArchivos from './components/Main/MisArchivos/MisArchivos';



function App() {
  const {isAuthenticated} = useAuth0();
  const [elements, setElements] = useState([]);


  useEffect( () => {
    const allData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/alldata');
        const data = await response;
        console.log(data);
        setElements(data);
      } catch (error) {
        console.log(error);
      }  
    }
    allData();
  }, []);

import Nav from './components/Head/Nav';
import TopNav from './components/Head/TopNav';
// import LoginIntro from "./components/Main/LoginIntro";
import Home from "./components/Main/Home";
import {useAuth0} from '@auth0/auth0-react';
  const {isAuthenticated} = useAuth0();


  return (
    <div className="App">
      {isAuthenticated ? <><Profile/><Logout/> </> : <Login/>}
      <TopNav/>
      {/* <LoginIntro/> */}
      <Home/>
      <Nav/>
    </div>
  );
}

export default App;
