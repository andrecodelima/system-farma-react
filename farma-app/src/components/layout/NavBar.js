
import { Link } from "react-router-dom";
import styles from '../layout/NavBar.module.css'

function NavBar(){
    return(
        <nav className={styles.nav}>
            <ul className={styles.ul}>

                <li className={styles.li}>
                    <Link className={styles.link} to="/">Home</Link>
                </li>

                <li className={styles.li}>
                    <Link to="/Medicamentos">Medicamentos</Link>
                </li>

                <li className={styles.li}>
                    <Link to="/TrabalheConosco">TrabalheConosco</Link>
                </li>

                <li className={styles.li}>
                    <Link to="/Login">Login</Link>
                </li>

            </ul>
        </nav>
    )
}

export default NavBar