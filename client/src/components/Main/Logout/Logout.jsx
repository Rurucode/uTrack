import React from "react";
<<<<<<< HEAD

const Logout = () => {
  return <div>Logout</div>;
=======
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();
  return <div>
    <button onClick={() => logout({returnTo: window.location.origin})}>Logout</button>
  </div>;
>>>>>>> 8eae79734c7029326523d92bd5c9fdb7bc88df80
};

export default Logout;
