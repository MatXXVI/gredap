import { useState } from 'react';
import './Ges_MainPage.css';
import UserForm from './UserForm/Ges_UserForm';

function Ges_MainPage({ onLogout }) {
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  const menuItems = [
    { id: 'dash', label: 'Dashboard', icon: '📊' },
    { id: 'users', label: 'Gestione Utenti', icon: '👥' },
    { id: 'prod', label: 'Prodotti', icon: '📦' },
    { id: 'settings', label: 'Impostazioni', icon: '⚙️' },
  ];

  return (
    <div className="dashboard-container">
      {/* 1. SIDEBAR LATERALE */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-box">G</div>
          <span>GESTIONALE</span>
        </div>
        <nav className="sidebar-menu">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`menu-item ${activeMenu === item.label ? 'active' : ''}`}
              onClick={() => setActiveMenu(item.label)}
            >
              <span className="icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* 2. AREA PRINCIPALE */}
      <main className="main-section">
        {/* Header Superiore */}
        <header className="top-header">
          <h2>{activeMenu}</h2>
          <div className="user-profile">
            <span>Admin Azienda</span>
            <button className="logout-btn">Esci</button>
          </div>
        </header>

        {/* Contenuto Dinamico */}
        <section className="content-area">
          {/* 2. LOGICA DI NAVIGAZIONE INTERNA */}
          {activeMenu === 'Gestione Utenti' ? (
            <UserForm />
          ) : (
          <div className="card-welcome">
            <h3>Benvenuto nel Pannello di Controllo</h3>
            <p>Seleziona una voce dal menu per iniziare a lavorare.</p>
          </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Ges_MainPage;