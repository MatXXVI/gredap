import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Ges_LoginPage from './pages/Login/Ges_LoginPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Ges_LoginPage /> {/* <--- Devi usare il nome che hai importato sopra! */}
  </StrictMode>,
)