import styles from "../styles/Form.module.css"

export default function Form(props) {
    return (
        <form>
            <label>
                {props.label}
                <textarea/>
            </label>
            <input type="submit" value="DONE"/>
        </form>
    )
      
}
