// Importamos el componente Boton
import { Button } from "../components/Button";
import Container from "../components/Container";

const Home = () => {
    const styles = {
        main: "w-full bg-gray-400 h-screen flex flex-col gap-5 justify-center items-center text-white",
        h1: "text-4xl font-bold"
    }
    return ( 
    <main className={styles.main} style={{backgroundColor: "gray"}}>
        <h1 className={styles.h1}>Titulo</h1>
        <Container>
            <Button text="Aceptar" color="bg-green-500 hover:bg-green-700"/>
            <Button text="Cancelar" color="bg-red-500 hover:bg-red-700"/>
        </Container>
    </main> );
}

export default Home;