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

  
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

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


