/* El componente acepta un unico parametro llamado children, En react un children es
una prop especial que representa al contenido que se coloca entre las etiquetas de apertura y cierre.
*/

const Container = ({ children }) => {
    const styles = {
        container: "flex gap-5",
    }
    return ( 
        <div className={styles.container}>
            {children}
        </div>
    );
}

export default Container;