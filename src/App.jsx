import { useEffect, useState } from 'react'

import './App.css'
import Formulario from './components/Formulario'
import Inicio from './components/Inicio'
import LoginPage from './components/LoginPage'
import UsersTip from './components/UsersTip'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  useEffect(() => {
    if(isAuthenticated) {
      localStorage.setItem('isAuthenticated', 'true');
    } else {
      localStorage.removeItem('isAuthenticated');
    }
  }, [isAuthenticated])

  //const [isAuthenticated, setIsAuthenticated] = useState(false); // Nuevo estado para autenticación
  //const [isAuthenticated, setIsAuthenticated] = useState(false); // Nuevo estado para autenticación


  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  /*  const handleLogout = () => {
     setIsAuthenticated(false);
     setLoginMessage('')
   }; */



  return (
    <>
      <div className="container">
        <header>
          {/* {isAuthenticated ? (          
          <button onClick={handleLogout}>Cerrar Sesión</button>   
             
        ) : (
          <Formulario onLoginSuccess={handleLoginSuccess} /> 

        )} */}
          {/*  <Formulario onLoginSuccess={handleLoginSuccess} /> */}
          <Formulario
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />
        </header>
        <main>
          {isAuthenticated ? <LoginPage /> : <Inicio />}
        </main>
        <div className="users-tip">
          <UsersTip />
        </div>

      </div>


    </>
  )
}

export default App


