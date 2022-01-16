import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Login = () => {

  const { loginWithRedirect } = useAuth0();

  return <div>
<<<<<<< HEAD
      <button onClick={() => loginWithRedirect()}>Login</button>;
=======
      <button onClick={() => loginWithRedirect()}>Login</button>
>>>>>>> 8eae79734c7029326523d92bd5c9fdb7bc88df80
    </div>
};

export default Login;
