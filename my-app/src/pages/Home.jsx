// Importamos el componente Boton
import { Button } from "../components/Button";

const Home = () => {
    const styles = {
        main: "w-full bg-gray-400 h-screen flex justify-center items-center text-white",
    }
    return ( 
    <main className={styles.main}>
        <h1>Titulo</h1>
        <Button text="Aceptar" color="bg-green-500 hover:bg-green-700"/>
        <Button text="Cancelar" color="bg-red-500 hover:bg-red-700"/>
    </main> );
}

export default Home;