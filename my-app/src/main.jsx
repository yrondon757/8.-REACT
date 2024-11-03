import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Importamos CSS
import './styles/global.css'
// Aqui estamos importando el componente App
// Vamos a utilizar React-routerDom
/*
React se una biblioteca que proporciona navegacion para aplicaciones de React. Permite a los desarrolladores
gestionar el enrutamiento en aplicaciones de una sola pagina (SPA) de manera sencilla y declarativa.

- BrowserRouter : Envuelve a toda la aplicacion y permite que el enrutamiento funcione.
- Routes : Este componente se utiliza para definir las diferentes rutas de la aplicacion.
- Route : Cada route  define una ruta URL y el componente que se mostrara cuando esa ruta coincida.
*/
// Importamos BrowserRouter.
// con "as" podemos darle un alias (sobrenombre).

import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
