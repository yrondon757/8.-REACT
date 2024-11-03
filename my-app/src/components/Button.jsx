export const Button = ({ text = "Boton", color = "bg-indigo-500 hover:bg-indigo-700" }) => {
    const styles = {
        button: "text-white font-bold py-2 px-4 rounded",
    }
    return <button className={styles.button + " " + color}>{text}</button>;
};