import styles from "../styles/Home.module.css"
import Default from "../layouts/Default"
import {useState} from "react"

export default function Home(props) {
    const [addy, setAddy] = useState("hello anton")
    return (
        <Default>
            <div className={styles.homeStyles}>Hello</div>
            <button onClick={() => setAddy("hello guy")}>click</button>
            <p>{addy}</p>
        </Default>
    )
}
