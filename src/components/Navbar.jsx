import { Link } from "react-router-dom"
import Logo from "../assets/shared/logo.svg"
import '../app.css'

function Navbar() {
    return (
        <div className="flex justify-between">
            <img src={Logo} className="w-12 h-12"></img>
            <div>
                <ul className="flex justify-around ">
                    <li><a className="text-white">00 Home</a></li>
                    <li><a className="text-white">01 Destination</a></li>
                    <li><a className="text-white">02 Crew</a></li>
                    <li><a className="text-white">03 Technology</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar