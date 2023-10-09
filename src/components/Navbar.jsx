import { Link } from "react-router-dom"
import Logo from "../assets/shared/logo.svg"
import { useState, useEffect } from 'react'
import '../app.css'
import Menu from '../assets/shared/icon-hamburger.svg'
import Close from '../assets/shared/icon-close.svg'

function Navbar(props) {

    var [branca, setbranca] = useState(props.lbranca)
    var [hamburguer, sethamburguer] = useState("hidden max-md:block mr-6 mt-9")
    var [iclose, seticlose] = useState("hidden absolute right-6 top-9")
    let classenav = ''
    var [navhidden, setnavhidden] = useState('max-md:hidden z-10 md:backdrop-blur-xl md:bg-white/5 md:flex md:justify-center md:items-center md:gap-14 md:h-20 md:w-[759px]')
    var [estilobranca, setestilobranca] = useState('max-md:hidden absolute top-[78px] block bg-white h-0.5 w-68px')
    var [estilobranca2, setestilobranca2] = useState('max-md:hidden absolute top-[78px] block bg-white h-0.5 w-[116px]')
    var [estilobranca3, setestilobranca3] = useState('max-md:hidden absolute top-[78px] block bg-white h-0.5 w-[63px]')
    var [estilobranca4, setestilobranca4] = useState('max-md:hidden absolute top-[78px] block bg-white h-0.5 w-[115px]')
    //
    useEffect(() => {
        if (branca === 1) {
            setestilobranca2('max-md:hidden absolute top-[78px] hidden bg-white h-0.5 w-[116px]')
            setestilobranca3('max-md:hidden absolute top-[78px] hidden bg-white h-0.5 w-[116px]')
            setestilobranca4('max-md:hidden absolute top-[78px] hidden bg-white h-0.5 w-[116px]')
        }
        if (branca === 2) {
            setestilobranca('max-md:hidden absolute top-[78px] hidden bg-white h-0.5 w-[116px]')
            setestilobranca3('max-md:hidden absolute top-[78px] hidden bg-white h-0.5 w-[116px]')
            setestilobranca4('max-md:hidden absolute top-[78px] hidden bg-white h-0.5 w-[116px]')
        }
        if (branca === 3) {
            setestilobranca2('max-md:hidden absolute top-[78px] hidden bg-white h-0.5 w-[116px]')
            setestilobranca('max-md:hidden absolute top-[78px] hidden bg-white h-0.5 w-[116px]')
            setestilobranca4('max-md:hidden absolute top-[78px] hidden bg-white h-0.5 w-[116px]')
        }
        if (branca === 4) {
            setestilobranca2('max-md:hidden absolute top-[78px] hidden bg-white h-0.5 w-[116px]')
            setestilobranca3('max-md:hidden absolute top-[78px] hidden bg-white h-0.5 w-[116px]')
            setestilobranca('max-md:hidden absolute top-[78px] hidden bg-white h-0.5 w-[116px]')
        }
    }, [])

    function over1() {
        if (branca != 1) {
            setestilobranca('max-md:hidden absolute top-[78px] block bg-[#484E61] h-0.5 w-68px')
        }
    }

    function over2() {
        if (branca != 2) {
            setestilobranca2('max-md:hidden absolute top-[78px] block bg-[#484E61] h-0.5 w-[116px]')
        }
    }

    function over3() {
        if (branca != 3) {
            setestilobranca3('max-md:hidden absolute top-[78px] block bg-[#484E61] h-0.5 w-[63px]')
        }
    }

    function over4() {
        if (branca != 4) {
            setestilobranca4('max-md:hidden absolute top-[78px] block bg-[#484E61] h-0.5 w-[115px]')
        }
    }

    function out1() {
        if (branca != 1) {
            setestilobranca('max-md:hidden absolute top-[78px] hidden bg-white h-0.5 w-[116px]')
        }
    }
    function out2() {
        if (branca != 2) {
            setestilobranca2('max-md:hidden absolute top-[78px] hidden bg-white h-0.5 w-[116px]')
        }
    }
    function out3() {
        if (branca != 3) {
            setestilobranca3('max-md:hidden absolute top-[78px] hidden bg-white h-0.5 w-[116px]')
        }
    }
    function out4() {
        if (branca != 4) {
            setestilobranca4('max-md:hidden absolute top-[78px] hidden bg-white h-0.5 w-[116px]')
        }
    }

    function abrirmenu() {
        sethamburguer("hidden")
        setnavhidden('z-10 max-md:fixed max-md:right-0 max-md:z-50  max-md:backdrop-blur-xl max-md:bg-white/5 max-md:w-3/5 max-md:h-[100vh] max-md:flex max-md:flex-col max-md:justify-center max-md:gap-6 max-md:pl-6 md:backdrop-blur-xl md:bg-white/5 md:flex md:justify-center md:items-center md:gap-14 md:h-20 md:w-[759px]')
        seticlose('md:hidden absolute top-[34px] right-6 ')
    }

    function fecharmenu() {
        setnavhidden('z-10 max-md:hidden bg-white/5 flex justify-center max-md:right-0 backdrop-blur-xl max-md:w-3/5 max-md:h-[100vh] max-md:flex-col max-md:gap-6 max-md:pl-6 md:items-center md:gap-14 md:h-20 md:w-[759px]')
        sethamburguer("max-md:block mr-6 mt-9 hidden")
    }

    return (
        <header className="flex justify-between max-md:items-start items-center max-md:pl-0 pl-14 md:pt-0 lg:pt-4">
            <Link to='/'><img src={Logo} className="w-10 h-10 max-md:mt-6 max-md:ml-6"></img></Link>
            <button className={hamburguer} onClick={abrirmenu}><img src={Menu}></img></button>
            <span className='hidden md:hidden z-40 lg:block bg-[#41444D] h-0.25  ml-7 flex-grow translate-x-8'></span>
            <ul className={navhidden}>
                <button className={iclose} onClick={fecharmenu}><img src={Close}></img></button>
                <Link to="Space-Tourism/"><li onMouseOver={over1} onMouseOut={out1}><div className="text-white flex gap-2"><span className={estilobranca}></span><p className='barlow-16-27 font-medium'>00</p><p className='barlow-16-27'> Home</p></div></li></Link>
                <Link to='Space-Tourism/Destination'><li onMouseOver={over2} onMouseOut={out2}><div className="text-white flex gap-2"><span className={estilobranca2}></span><p className='barlow-16-27 font-medium'>01</p><p className='barlow-16-27'>Destination</p></div></li></Link>
                <Link to='Space-Tourism/Crew'><li onMouseOver={over3} onMouseOut={out3}><div className="text-white flex gap-2"><span className={estilobranca3}></span><p className='barlow-16-27 font-medium'>02</p><p className='barlow-16-27'>Crew</p></div></li></Link>
                <Link to='Space-Tourism/Technology'><li onMouseOver={over4} onMouseOut={out4}><div className="text-white flex gap-2"><span className={estilobranca4}></span><p className='barlow-16-27 font-medium'>03</p><p className='barlow-16-27'>Technology</p></div></li></Link>
            </ul>
            
        </header>
    )
}

export default Navbar