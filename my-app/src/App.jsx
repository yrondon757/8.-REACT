// Vamos a importar el componente de Navbar
import Navbar from "./components/Navbar.jsx";
// Vamos a importar el componente de Footer
import Footer from "./components/Footer.jsx";
// Vamos a importar el componente de Footer (que seria una pagina)
import Home from "./pages/Home.jsx";

// Vamos a importar Routes y Route de Home (que seria una pagina)
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./pages/About.jsx";
import ApiNoKey from "./pages/ApiNoKey.jsx";
import ApiKey from "./pages/ApiKey.jsx";
import Hooks from "./pages/Hooks.jsx";
import Products from "./pages/Products.jsx";
import Product from "./pages/Product.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import NotFound from "./pages/NotFound.jsx";
/*
- Routes : Este componente se utiliza para definir las diferentes rutas de la aplicacion.
- Route : Cada route  define una ruta URL y el componente que se mostrara cuando esa ruta coincida.
*/
/*
- useLocation : Este hook se utiliza para obtener la ubicacion actual de la URL.
*/

function App() {
  const location = useLocation();

  // Definir las rutas donde no quieres que aparezca el navbar y el footer
  const hideNavbarFooter = ["/apikey"]; // ["/hooks", "/apikey"]
  // Condicionar la visualizacion del navbar
  const showNavbarFooter = !hideNavbarFooter.includes(location.pathname)
  return (
    <>
      { showNavbarFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apinokey" element={<ApiNoKey />} />
        <Route path="/apikey" element={<ApiKey />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route element={<PrivateRoute/>}>
          <Route path="/admin" element={<h1>Admin</h1>} />
          <Route path="/profile" element={<h1> My profile</h1>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      { showNavbarFooter && <Footer />}
    </>
  );
}

export default App;
