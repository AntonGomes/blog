import Navbar from "../components/navbar"

export default function Default(props) {
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    )
}
