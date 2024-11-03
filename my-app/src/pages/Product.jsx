import { useParams } from "react-router-dom";
/*
Es un hook que nos permite acceder a los parametros de la URL en componentes de tu aplicacion.
*/

const Product = () => {
    const { id } = useParams(); 
    const styles = {
        main: "w-full bg-gray-400 h-screen flex flex-col gap-5 justify-center items-center text-white",
        h1: "text-4xl font-bold"
    }
    return ( 
    <main className={styles.main} style={{backgroundColor: "gray"}}>
        <h1 className={styles.h1}>Pagina de Product { id }</h1>
    </main> );
}

export default Product;