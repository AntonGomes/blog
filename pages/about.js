import styles from "../styles/Home.module.css"
import Default from "../layouts/Default"
import Form from "../components/form.js"

export default function Home(props) {
    return (
        <Default>
           <head> About </head>
                <Form {props.label = "text"}/>
                {props.form}
        </Default>
    )
}
