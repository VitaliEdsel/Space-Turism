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
    var [navhidden, setnavhidden] = useState('max-md:hidden backdrop-blur-xl bg-white/5 max-md:pt-[100px] flex max-md:flex-col justify-center max-md:justify-start items-center max-md:gap-[30px] gap-14 h-20 max-md:h-screen max-md:w-3/5 w-[759px]')
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
        setnavhidden('block fixed right-0 z-10 backdrop-blur-xl bg-white/5 w-3/5 h-[100vh] flex flex-col justify-center gap-6 pl-6')
        seticlose('absolute top-[34px] right-6 ')
    }

    function fecharmenu() {
        setnavhidden('hidden')
        sethamburguer("max-md:block mr-6 mt-9")
    }

    return (
        <header className="flex justify-between max-md:items-start items-center max-md:pl-0 pl-14 md:pt-0 lg:pt-4">
            <Link to='/'><img src={Logo} className="w-10 h-10 max-md:mt-6 max-md:ml-6"></img></Link>
            <button className={hamburguer} onClick={abrirmenu}><img src={Menu}></img></button>
            <ul className={navhidden}>
                <button className={iclose} onClick={fecharmenu}><img src={Close}></img></button>
                <Link to="/"><li onMouseOver={over1} onMouseOut={out1}><div className="text-white flex gap-2"><span className={estilobranca}></span><p className='barlow-16-27 font-medium'>00</p><p className='barlow-16-27'> Home</p></div></li></Link>
                <Link to='/Destination'><li onMouseOver={over2} onMouseOut={out2}><div className="text-white flex gap-2"><span className={estilobranca2}></span><p className='barlow-16-27 font-medium'>01</p><p className='barlow-16-27'>Destination</p></div></li></Link>
                <Link to='/Crew'><li onMouseOver={over3} onMouseOut={out3}><div className="text-white flex gap-2"><span className={estilobranca3}></span><p className='barlow-16-27 font-medium'>02</p><p className='barlow-16-27'>Crew</p></div></li></Link>
                <Link to='/Technology'><li onMouseOver={over4} onMouseOut={out4}><div className="text-white flex gap-2"><span className={estilobranca4}></span><p className='barlow-16-27 font-medium'>03</p><p className='barlow-16-27'>Technology</p></div></li></Link>
            </ul>
            <span className='hidden md:hidden lg:block bg-[#41444D] h-0.25 w-2/5 absolute left-40'></span>
        </header>
    )
}

export default Navbar