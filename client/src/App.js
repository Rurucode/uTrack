import './App.css';
import Login from './components/Main/Login'
import Logout from './components/Main/Logout/Logout';
import Profile from './components/Main/Profile/Profile';
import {useAuth0} from '@auth0/auth0-react';
import PagConfirmacion from './components/Main/PagConfirmacion/PagConfirmacion';

function App() {
  const {isAuthenticated} = useAuth0();

  return (
    <div className="App">
      {isAuthenticated ? <><Profile/><Logout/> </> : <Login/>}
      <PagConfirmacion/>
    </div>
  );
}

export default App;
