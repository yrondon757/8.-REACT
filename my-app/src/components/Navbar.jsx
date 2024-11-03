function Navbar() {
    const styles = {
        nav: "bg-indigo-900 w-full h-[70px] flex justify-between items-center px-10",
        p: "text-white text-3xl font-bold",
        ul: "flex gap-4 text-white",
    }
    return (<nav className={styles.nav}>
        <p className={styles.p}>LOGO</p>
        <ul className={styles.ul}>
            <li>Home</li>
            <li>About</li>
            <li>ApiNoKey</li>
            <li>ApiKey</li>
            <li>Hooks</li>
        </ul>
    </nav>)
};

export default Navbar;