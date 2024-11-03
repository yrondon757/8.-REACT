import { Link, NavLink, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    const styles = {
        nav: "bg-indigo-900 w-full h-[70px] flex justify-between items-center px-10",
        p: "text-white text-3xl font-bold",
        ul: "flex gap-4 text-white",
    }
    return (<nav className={styles.nav}>
        <p className={styles.p}><NavLink to={"/"}>LOGO</NavLink></p>
        <ul className={styles.ul}>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-red-500" : ""}>Home</NavLink></li>
            <li><NavLink to="about" className={({ isActive }) => isActive ? "text-red-500" : ""}>About</NavLink></li>
            <li><NavLink to="apinokey" className={({ isActive }) => isActive ? "text-red-500" : ""}>ApiNoKey</NavLink></li>
            <li><NavLink to="apikey" className={({ isActive }) => isActive ? "text-red-500" : ""}>ApiKey</NavLink></li>
            <li><Link to="/hooks" className={location.pathname === "/hooks" && "text-red-500"}>Hooks</Link></li>
        </ul>
    </nav>)
};

export default Navbar;