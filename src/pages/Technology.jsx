import Navbar from '../components/Navbar'
import Title from '../components/Title'
import '../App.css'
import { useState } from 'react'
import launchl from '../assets/technology/image-launch-vehicle-landscape.jpg'
import launchp from '../assets/technology/image-launch-vehicle-portrait.jpg'
import spacel from '../assets/technology/image-spaceport-landscape.jpg'
import spacep from '../assets/technology/image-spaceport-portrait.jpg'

var ativo = 1

function Technology() {

    let botativo = 'w-[80px] h-[80px] rounded-full bg-white flex justify-center items-center transition-[background]'
    let spanativo = 'w-[56px] h-[56px] rotate-45 bg-white flex justify-center items-center transition-[background]'
    let letrativo = 'bellefair-32 text-black rotate-[-45deg] transition-all'

    let botover = 'w-[80px] h-[80px] rounded-full bg-transparent border-[1px] border-white/25 flex justify-center items-center transition-[background] '
    let spanover = 'w-[56px] h-[56px] rotate-45 bg-transparent flex justify-center items-center transition-[background]'

    let bot = 'w-[80px] h-[80px] rounded-full bg-white/25 flex justify-center items-center transition-[background] scale-[0.9]'
    let span = 'w-[56px] h-[56px] rotate-45 bg-[#0B0E17] flex justify-center items-center transition-[background]'
    let letra = 'bellefair-32 text-white rotate-[-45deg]'

    var [bot1, setbot1] = useState(botativo)
    var [bot2, setbot2] = useState(bot)
    var [bot3, setbot3] = useState(bot)
    var [span1, setspan1] = useState(spanativo)
    var [span2, setspan2] = useState(span)
    var [span3, setspan3] = useState(span)
    var [p1, setp1] = useState(letrativo)
    var [p2, setp2] = useState(letra)
    var [p3, setp3] = useState(letra)

    let desc1 = 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth’s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it’s quite an awe-inspiring sight on the launch pad!'
    let desc2 = 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.'
    let desc3 = 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth’s atmosphere without wings. Our capsule is where you’ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.'

    var [titulo, settitulo] = useState('LAUNCH VEHICLE')
    var [desc, setdesc] = useState(desc1)

    let imagem1 = 'max-lg:mt-10 lg:absolute max-lg:translate-x-1 z-0 right-0 max-md:h-[310px] max-lg:w-screen lg:w-[400px] h-[450px] bg-contain bg-no-repeat bg-launch-landscape lg:bg-launch-portrait'
    let imagem2 = 'max-lg:mt-10 lg:absolute z-0 right-0 max-md:h-[310px] max-lg:w-screen lg:w-[400px] h-[450px] bg-contain bg-no-repeat max-lg:bg-spaceport-landscape lg:bg-spaceport-portrait'
    let imagem3 = 'max-lg:mt-10 lg:absolute z-0 right-0 max-md:h-[310px] max-lg:w-screen lg:w-[400px] h-[450px] bg-contain bg-no-repeat max-lg:bg-capsule-landscape lg:bg-capsule-portrait'
    var [imagem, setimagem] = useState(imagem1)

    function over1 () {
        if (ativo != 1) {
            setbot1(botover)
            setspan1(spanover)
        }
    }

    function out1 () {
        if (ativo != 1) {
            setbot1(bot)
            setspan1(span)
        }
    }

    function over2 () {
        if (ativo != 2) {
            setbot2(botover)
            setspan2(spanover)
        }
    }

    function out2 () {
        if (ativo != 2) {
            setbot2(bot)
            setspan2(span)
        }
    }

    function over3 () {
        if (ativo != 3) {
            setbot3(botover)
            setspan3(spanover)
        }
    }

    function out3 () {
        if (ativo != 3) {
            setbot3(bot)
            setspan3(span)
        }
    }

    const click1 = () => {
        ativo = 1
        setbot1(botativo)
        setbot2(bot)
        setbot3(bot)
        setspan1(spanativo)
        setspan2(span)
        setspan3(span)
        setp1(letrativo)
        setp2(letra)
        setp3(letra)
        setimagem(imagem1)
        settitulo('LAUNCH VEHICLE')
        setdesc(desc1)
    }

    const click2 = () => {
        ativo = 2
        setbot1(bot)
        setbot2(botativo)
        setbot3(bot)
        setspan1(span)
        setspan2(spanativo)
        setspan3(span)
        setp1(letra)
        setp2(letrativo)
        setp3(letra)
        setimagem(imagem2)
        settitulo('SPACEPORT')
        setdesc(desc2)
    }

    const click3 = () => {
        ativo = 3
        setbot1(bot)
        setbot2(bot)
        setbot3(botativo)
        setspan1(span)
        setspan2(span)
        setspan3(spanativo)
        setp1(letra)
        setp2(letra)
        setp3(letrativo)
        setimagem(imagem3)
        settitulo('SPACE CAPSULE')
        setdesc(desc3)
    }

    return (
        <div className='flex flex-col bg-cover bg-no-repeat h-[100vh] overflow-y-auto overflow-x-hidden md:bg-background-technology-tablet max-md:bg-background-technology-mobile lg:bg-background-technology-desktop'>
            <Navbar lbranca={4}/>
            <Title num='03' title='SPACE LAUNCH 101'/>
            <div className='flex-grow flex max-lg:flex-col-reverse items-center max-lg:mb-10'>
                <div className='flex max-lg:flex-col max-lg:items-center max-lg:gap-16 gap-20 lg:ml-[160px] z-10'>
                    <div className='flex flex-col max-lg:flex-row gap-8'>
                        <button onMouseOver={over1} onMouseOut={out1} onClick={click1} className={bot1}>
                            <span className={span1}><p class={p1}>1</p></span>
                        </button>
                        <button onMouseOver={over2} onMouseOut={out2} onClick={click2} className={bot2}>
                            <span className={span2}><p className={p2}>2</p></span>
                        </button>
                        <button onMouseOver={over3} onMouseOut={out3} onClick={click3} className={bot3}>
                            <span className={span3}><p className={p3}>3</p></span>
                        </button>
                    </div>
                    <div className='flex flex-col max-lg:items-center'>
                        <p className='barlow-16-27 text-[#D0D6F9]'>THE TERMINOLOGY</p>
                        <h1 className='max-md:scale-[0.6] bellefair-56 text-white'>{titulo}</h1>
                        <p className='max-lg:text-center w-[400px] barlow-18 text-[#D0D6F9]'>{desc}</p>
                    </div>
                </div>
                <span className={imagem}/>
            </div>
        </div>
    )
}

export default Technology