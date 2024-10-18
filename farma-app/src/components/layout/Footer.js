import styles from './Footer.module.css'

import {FaHome} from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

function Footer(){
    return(
        <footer className={styles.footer}>
  <h2>Footer</h2>
            <ul>
                <li>
                    <FaHome />
                </li>

                <li>
                    <FaLinkedin />
                </li>

                <li>
                    <FaWhatsappSquare />
                </li>

                <li>
                    <FaYoutube />
                </li>

                <li>
                    <FaSquareInstagram />
                </li>
            </ul>
        </footer>
    )
}

export default Footer