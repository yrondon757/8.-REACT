// eslint-disable react/prop-types
import { Link } from "react-router-dom";
export const Button = ({
  text = "Boton",
  color = "bg-indigo-500 hover:bg-indigo-700",
  click = () => {},
  link = null,
}) => {
  const styles = {
    button: "text-white font-bold py-2 px-4 rounded",
  };

  if (link) {
    return (
      <Link to={link}>
        <button onClick={click} className={styles.button + " " + color}>
          {text}
        </button>
      </Link>
    );
  }

  return (
    <button onClick={click} className={styles.button + " " + color}>
      {text}
    </button>
  );
};
