const Products = () => {
    const styles = {
        main: "w-full bg-gray-400 h-screen flex flex-col gap-5 justify-center items-center text-white",
        h1: "text-4xl font-bold"
    }
    return ( 
    <main className={styles.main} style={{backgroundColor: "gray"}}>
        <h1 className={styles.h1}>Pagina de Products</h1>
    </main> );
}

export default Products;