import styles from "../styles/Navbar.module.css"
import Link from "next/link"

export default function Navbar(props) {
    return (
        <ul className={styles.list}>
            <Link className={styles.link} href="/">Home</Link>
            <Link className={styles.link} href="/about">About</Link>
        </ul>
    )
}

