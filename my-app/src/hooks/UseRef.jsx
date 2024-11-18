// ------ USEREF
/*
useRef es un hook que sirve para tener como referencia un elemento HTML, es similar al document.getElementById. Nos permite acceder a un elemento HTML.
useRef devuelve un objeto mutable que persiste durante todo el ciclo de vida del componente.
*/
import { useRef, useState } from "react";
import { Button } from "../components/Button";
import useCalculator from "./useCalculator";

const UseRef = () => {
  const focusInput = useRef(null); // Inicializamos el useRef
  const [result, setResult] = useState(null);

  const hacerFocus = () => {
    console.log("Hacer focus");
    console.log(focusInput.current.focus());
  };

  const onChangeInput = () => {
    console.log(focusInput.current.value);
  };

  const showResult = () => {
    // eslint-disable-next-line
    setResult(useCalculator(focusInput.current.value));
  };

  return (
    <>
      <div>
        <h1>UseRef</h1>
        {result && <p>El resultado es: {result}</p>}
        <input
          ref={focusInput}
          onChange={onChangeInput}
          type="text"
          placeholder="Escribe algo"
          className="text-black"
        />
        <Button text="Hacer focus" click={hacerFocus} />
        <Button text="Mostrar Resultado" click={showResult} />
      </div>
    </>
  );
};

export default UseRef;
