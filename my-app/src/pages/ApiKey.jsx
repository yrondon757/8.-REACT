import { useEffect, useState } from "react";

const ApiKey = () => {
    const {data, setData} = useState(null);
    const [name1, setName1] = useState(null);
    const [name2, setName2] = useState(null);

    const styles = {
        main: "w-full bg-gray-400 h-screen flex flex-col gap-5 justify-center items-center text-white",
        h1: "text-4xl font-bold"
    };

    useEffect(() => {
        const useApi = async() => {
            try{
                const options = {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': '7e96d0e3f4msheb85ee2ac525f41p1881fdjsnfc3a31342093',
                        'x-rapidapi-host': 'love-calculator.p.rapidapi.com'
                    }
                };
                const response = await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${name1}&fname=${name2}`, options);
                if(response.ok){
                    const data = await response.json();
                    console.log(data)
                    setData(data);
                }
            }catch(error){
                console.log(error)
            }
        }
        if(name1 && name2){
            // eslint-disable-next-line
            useApi();
        }
    }, [name1, name2])
    return ( 
    <main className={styles.main} style={{backgroundColor: "gray"}}>
        <h1 className={styles.h1}>Pagina de ApiKey</h1>
        <div className="flex gap-5 text-black">
            <section className="flex flex-col gap-2">
                <label htmlFor="nombre1">Nombre 1</label>
                <input name="nombre1" id="nombre1" type="text" onChange={(event) => setName1(event.target.value)} />
            </section>
            <section className="flex flex-col gap-2">
                <label htmlFor="nombre2">Nombre 2</label>
                <input name="nombre2" id="nombre2" type="text" onChange={(event) => setName2(event.target.value)} />
            </section>
        </div>
        <div>
            {data && (
                <div>
                    <p>{data.percentage}%</p>
                    <p>{data.result}</p>
                </div>
            )}
        </div>
    </main> 
    );
};

export default ApiKey;