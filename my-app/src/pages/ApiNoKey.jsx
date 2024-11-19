import { useEffect, useState } from "react";

const ApiNoKey = () => {
    const [data, setData] = useState(null);

    useEffect (() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])
    const styles = {
        main: "w-full bg-gray-400 h-screen flex flex-col gap-5 justify-center items-center text-white",
        h1: "text-4xl font-bold"
    }
    return ( 
    <main className={styles.main} style={{backgroundColor: "gray"}}>
        <h1 className={styles.h1}>Pagina de ApiNoKey</h1>
        { data && (data.map((elemento, index) => {
            if ( index >= 5){
                return null;
            }
            return (
                <div key={index}>
                    <p>{elemento.id} Title: {elemento.title}</p>
                </div>
            )
        })) }
    </main> );
}

export default ApiNoKey;