// Vamos a importar el componente de Navbar
import Navbar from "./components/Navbar.jsx";
// Vamos a importar el componente de Footer
import Footer from "./components/Footer.jsx";
// Vamos a importar el componente de Footer (que seria una pagina)
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
