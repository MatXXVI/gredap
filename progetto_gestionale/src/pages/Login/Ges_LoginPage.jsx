import { useState } from 'react'
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
import './Ges_LoginPage.css'
import Ges_MainPage from '../Dashboard/Ges_MainPage'; // Pagina principale del gestionale

function Ges_LoginPage({ onLogin }) { // <--- Riceviamo la funzione onLogin come "prop"
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    
    console.log("Tentativo di accesso con:", { email, password });
    
    // Controlliamo le credenziali
    if (email === "admin@azienda.it" && password === "123456") {
      // 1. Avvisiamo l'utente (opzionale)
      console.log("Accesso riuscito!"); 
      
      // 2. IMPORTANTE: Eseguiamo la funzione onLogin.
      // Questa funzione cambierà lo stato 'isLoggedIn' in App.jsx a 'true',
      // facendo sparire il login e apparire la Dashboard!
      onLogin(); 
      
    } else {
      alert("Credenziali errate. Riprova.");
    }
  };

  return (
    // Container del login
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Gestionale Aziendale</h2>
        <p>Inserisci le tue credenziali per accedere</p>
        <br></br>

        {/*Cella di input della password*/}
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nome@dominio.it"
            required
          />
        </div>

        <div className="input-group">
          {/*Cella di input della password*/}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="La tua password"
            required
          />
        </div>

        {/*Pulsante di input per accedere al portale*/}
        <button type="submit" className="login-button">
          Accedi al Portale
        </button>

        {/*Link per recuperare la password*/}
        <a href="#" className="forgot-password">
          Hai dimenticato la password?
        </a>
      </form>
    </div>
  );
}

export default Ges_LoginPage;