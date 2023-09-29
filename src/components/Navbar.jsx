import { Link } from "react-router-dom"
import Logo from "../assets/shared/logo.svg"
import {useState, useEffect} from 'react'
import '../app.css'

function Navbar(props) {

    var [branca, setbranca] = useState(props.lbranca)
    var [estilobranca, setestilobranca] = useState('absolute left-28 top-[78px] block bg-white h-0.5 w-68px')
    var [estilobranca2, setestilobranca2] = useState('absolute left-[237px] top-[78px] block bg-white h-0.5 w-[116px]')
    var [estilobranca3, setestilobranca3] = useState('absolute left-[410px] top-[78px] block bg-white h-0.5 w-[63px]')
    var [estilobranca4, setestilobranca4] = useState('absolute left-[530px] top-[78px] block bg-white h-0.5 w-[115px]')
//
    useEffect(() => {
        if (branca === 1) {
            setestilobranca2('absolute left-[237px] top-[78px] hidden bg-white h-0.5 w-[116px]')
            setestilobranca3('absolute left-[237px] top-[78px] hidden bg-white h-0.5 w-[116px]')
            setestilobranca4('absolute left-[237px] top-[78px] hidden bg-white h-0.5 w-[116px]')
        }
        if (branca === 2) {
            setestilobranca('absolute left-[237px] top-[78px] hidden bg-white h-0.5 w-[116px]')
            setestilobranca3('absolute left-[237px] top-[78px] hidden bg-white h-0.5 w-[116px]')
            setestilobranca4('absolute left-[237px] top-[78px] hidden bg-white h-0.5 w-[116px]')
        }
        if (branca === 3) {
            setestilobranca2('absolute left-[237px] top-[78px] hidden bg-white h-0.5 w-[116px]')
            setestilobranca('absolute left-[237px] top-[78px] hidden bg-white h-0.5 w-[116px]')
            setestilobranca4('absolute left-[237px] top-[78px] hidden bg-white h-0.5 w-[116px]')
        }
        if (branca === 4) {
            setestilobranca2('absolute left-[237px] top-[78px] hidden bg-white h-0.5 w-[116px]')
            setestilobranca3('absolute left-[237px] top-[78px] hidden bg-white h-0.5 w-[116px]')
            setestilobranca('absolute left-[237px] top-[78px] hidden bg-white h-0.5 w-[116px]')
        }
    }, [])

    function over1() {
        if (branca != 1) {
            setestilobranca ('absolute left-28 top-[78px] block bg-[#484E61] h-0.5 w-68px')
        }
    }

    function over2() {
        if (branca != 2) {
            setestilobranca2 ('absolute left-[237px] top-[78px] block bg-[#484E61] h-0.5 w-[116px]')
        }
    }

    function over3() {
        if (branca != 3) {
            setestilobranca3 ('absolute left-[410px] top-[78px] block bg-[#484E61] h-0.5 w-[63px]')
        }
    }

    function over4() {
        if (branca != 4) {
            setestilobranca4 ('absolute left-[530px] top-[78px] block bg-[#484E61] h-0.5 w-[115px]')
        }
    }

    function out1() {
        if (branca != 1) {
            setestilobranca('absolute left-[237px] top-[78px] hidden bg-white h-0.5 w-[116px]')
        }
    }
    function out2() {
        if (branca != 2) {
            setestilobranca2('absolute left-[237px] top-[78px] hidden bg-white h-0.5 w-[116px]')
        }
    }
    function out3() {
        if (branca != 3) {
            setestilobranca3('absolute left-[237px] top-[78px] hidden bg-white h-0.5 w-[116px]')
        }
    }
    function out4() {
        if (branca != 4) {
            setestilobranca4('absolute left-[237px] top-[78px] hidden bg-white h-0.5 w-[116px]')
        }
    }
    
    return (
        <div className="flex justify-between items-center pl-14 md:pt-0 lg:pt-4">
            <Link to='/'><img src={Logo} className="w-10 h-10 flex-none"></img></Link>
                <ul className=" backdrop-blur-xl bg-white/5 flex shrink justify-center items-center gap-14 h-20 w-[759px]">
                    <Link to="/"><li onMouseOver={over1} onMouseOut={out1}><div className="text-white flex gap-2"><p className='barlow-16-27 font-medium'>00</p><p className='barlow-16-27'> Home</p></div></li></Link>
                    <Link to='/Destination'><li onMouseOver={over2} onMouseOut={out2}><div className="text-white flex gap-2"><p className='barlow-16-27 font-medium'>01</p><p className='barlow-16-27'>Destination</p></div></li></Link>
                    <Link to='/Crew'><li onMouseOver={over3} onMouseOut={out3}><div className="text-white flex gap-2"><p className='barlow-16-27 font-medium'>02</p><p className='barlow-16-27'>Crew</p></div></li></Link>
                    <Link to='/Technology'><li onMouseOver={over4} onMouseOut={out4}><div className="text-white flex gap-2"><p className='barlow-16-27 font-medium'>03</p><p className='barlow-16-27'>Technology</p></div></li></Link>
                    
                    <span className={estilobranca}></span>
                    <span className={estilobranca2}></span>
                    <span className={estilobranca3}></span>
                    <span className={estilobranca4}></span>

                </ul>
            <span className=' md:hidden lg:block bg-[#41444D] h-0.25 w-[470px] absolute left-40'></span>
        </div>
    )
}

export default Navbar