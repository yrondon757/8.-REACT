// -------- UseState
/*
useState es un hook que maneja los estados en una aplicacion de React (Basicamente una variable que se puede actualizar).
*/
// Para utilizar hooks debemos importarlos.
import { useState } from "react";
import { Button } from "../components/Button";

const UseState = () => {
  const [color, setColor] = useState("Rojo");
  const [numero, setNumero] = useState(0);
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
      <h1>UseState</h1>
      <p>El color es : {color}</p>
      <Button click={() => setColor("Verde")} text="Cambiar el Color" />
      <Button text="Ir a Home" link="/" />
      <p>Contador : {numero}</p>
      <div className="flex gap-5">
        <Button
          click={() => setNumero(numero - 1)}
          text="Decrementar"
          color="bg-red-500 hover:bg-red-700"
        />
        <Button click={() => setNumero(numero + 1)} text="Incrementar" />
      </div>
      <div className={`w-[200px] h-[200px] ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}></div>
      <Button click={() => setDarkMode(!darkMode)} text={`Cambiar a modo ${darkMode ? "claro" : "oscuro"}`}/>
    </>
  );
};

export default UseState;
