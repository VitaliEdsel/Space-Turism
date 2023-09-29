import { Link } from "react-router-dom"
import Logo from "../assets/shared/logo.svg"
import '../app.css'

function Navbar() {
    return (
        <div className="flex justify-between items-center">
            <img src={Logo} className="w-12 h-12"></img>
            <div className=''>
                <ul className=" backdrop-blur-xl bg-white/5 flex justify-around items-center gap-14 h-20 pl-14 pr-40">
                    <Link to="/"><li><a className="text-white flex gap-2"><p>00 </p><p className='barlow-16-27'> Home</p></a></li></Link>
                    <Link to='/Destination'><li><a className="text-white flex gap-2"><p>01</p><p className='barlow-16-27'>Destination</p></a></li></Link>
                    <Link to='/Crew'><li><a className="text-white flex gap-2"><p>02</p><p className='barlow-16-27'>Crew</p></a></li></Link>
                    <Link to='/Technology'><li><a className="text-white flex gap-2"><p>03</p><p className='barlow-16-27'>Technology</p></a></li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar