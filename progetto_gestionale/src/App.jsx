import { useState } from 'react';
import Ges_LoginPage from './pages/Login/Ges_LoginPage';
import MainPage from './pages/Dashboard/MainPage';

function App() {
  // Lo stato iniziale è 'false': l'utente vede il Login
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Funzione per entrare
  const login = () => setIsLoggedIn(true);

  // Funzione per uscire (Logout)
  const logout = () => setIsLoggedIn(false);

  return (
    <>
      {isLoggedIn ? (
        // Se vero, mostra la Dashboard e passa la funzione logout
        <MainPage onLogout={logout} />
      ) : (
        // Se falso, mostra il Login e passa la funzione login
        <Ges_LoginPage onLogin={login} />
      )}
    </>
  );
}

export default App;