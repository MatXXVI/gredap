import { useState } from 'react';
import './Ges_UserForm.css';

function UserForm() {
  const [formData, setFormData] = useState({
    nome: '', cognome: '', email: '', telefono: '',
    codiceFiscale: '', ruolo: 'operatore', dipartimento: 'Produzione',
    dataAssunzione: '', note: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form-page-wrapper">
      <div className="form-container-full">
        <form className="user-form-professional">
          
          {/* SEZIONE 1: DATI PERSONALI */}
          <section className="form-section">
            <div className="section-title">
              <span className="section-icon">👤</span>
              <h4>Informazioni Personali</h4>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label>Nome</label>
                <input type="text" name="nome" placeholder="es. Mario" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Cognome</label>
                <input type="text" name="cognome" placeholder="es. Rossi" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Codice Fiscale</label>
                <input type="text" name="codiceFiscale" placeholder="RSSMRA..." onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Data di Nascita</label>
                <input type="date" name="dataNascita" onChange={handleChange} />
              </div>
            </div>
          </section>

          {/* SEZIONE 2: CONTATTI E LAVORO */}
          <section className="form-section">
            <div className="section-title">
              <span className="section-icon">💼</span>
              <h4>Dettagli Aziendali & Contatti</h4>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label>Email Aziendale</label>
                <input type="email" name="email" placeholder="m.rossi@azienda.it" onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Telefono</label>
                <input type="tel" name="telefono" placeholder="+39 333..." onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Ruolo</label>
                <select name="ruolo" onChange={handleChange}>
                  <option value="admin">Amministratore</option>
                  <option value="operatore">Operatore</option>
                  <option value="tecnico">Tecnico</option>
                </select>
              </div>
              <div className="form-group">
                <label>Dipartimento</label>
                <select name="dipartimento" onChange={handleChange}>
                  <option value="Produzione">Produzione</option>
                  <option value="Amministrazione">Amministrazione</option>
                  <option value="Vendite">Vendite</option>
                </select>
              </div>
            </div>
          </section>

          {/* AREA NOTE */}
          <div className="form-group full-width">
            <label>Note Interne</label>
            <textarea name="note" rows="4" placeholder="Altre informazioni rilevanti..."></textarea>
          </div>

          {/* BARRA AZIONI FISSA IN FONDO O A DESTRA */}
          <div className="form-footer">
            <button type="button" className="btn-cancel">Annulla</button>
            <button type="submit" className="btn-save">Salva Utente</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;