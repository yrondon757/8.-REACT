// --------USEEFFECT
/*
El useEffect es un hook que nos permite realizar cosas en segundo plano (asincronismo).

El useEffect cuenta con dos parametros
1.- Lo que se ejecutara en segundo plano (funcion anonima/flecha).
2.- Las dependencias (Variables que cada vez que son actualizadas, hacen que el useEffect se vuelva a ejecutar). Pero hay que tomar en cuenta las siguientes cosas:
- Si no agrego un segundo parametro, el useEffect se ejecutara constantement.
- Si agrego corchetes vacios significa que no hay dependencias y el useEffect se ejecutara una sola vez.
- Si agrego alguna variable utilizada dentro del useEffect como dependencia, ej: [contador], entonces el useEffect se va a ejecutar cada vez que la dependencia cambie su valor.
*/
import { useEffect, useState } from "react";

const UseEffect = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    setTimeout(() => {
        setContador(contador + 1);
    }, 1000);
  }, [contador]);
  return (
    <>
      <h1>UseEffect</h1>
      <p>Se ha repetido {contador} veces</p>
    </>
  );
};

export default UseEffect;
