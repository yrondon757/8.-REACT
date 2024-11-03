import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Importamos CSS
import './styles/global.css'
// Aqui estamos importando el componente App
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
