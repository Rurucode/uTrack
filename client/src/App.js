import './App.css';
import Login from './components/Main/Login'
import Logout from './components/Main/Logout/Logout';
import Profile from './components/Main/Profile/Profile';
import {useAuth0} from '@auth0/auth0-react';
import { useState, useEffect } from "react";
import axios from "axios";
import Main from "./components/Main"
import {BrowserRouter} from 'react-router-dom';
// import LoginIntro from "./components/Main/LoginIntro";




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

  return (
    <div className="App">
    <BrowserRouter>
      {isAuthenticated ? <><Profile/><Logout/> </> : <Main/>}      
    </BrowserRouter>
    </div>
  );
}

export default App;
