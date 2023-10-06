import Navbar from '../components/Navbar'
import Title from '../components/Title'
import moon from '../assets/destination/image-moon.png'
import mars from '../assets/destination/image-mars.png'
import europa from '../assets/destination/image-europa.png'
import titan from '../assets/destination/image-titan.png'
import { useState } from 'react'

var linha = 1

function Destination() {
    let planetaceso = 'pointer-events-auto barlow-16-27 text-white'
    let planetapagado = 'pointer-events-auto barlow-16-27 text-[#ACB2D1]'
    let combgb = 'block mt-1 bg-white w-[calc(100%_-_2px)] h-[2px] '
    let combgc = 'block mt-1 w-[calc(100%_-_2px)] h-[2px] bg-[#8B8D92]'
    let sembg = 'block mt-1 w-[calc(100%_-_2px)] h-[2px]'

    var [imagem, setimagem] = useState(moon)

    var [aceso1, setaceso1] = useState(planetaceso)
    var [aceso2, setaceso2] = useState(planetapagado)
    var [aceso3, setaceso3] = useState(planetapagado)
    var [aceso4, setaceso4] = useState(planetapagado)

    var [linha1, setlinha1] = useState(combgb)
    var [linha2, setlinha2] = useState(sembg)
    var [linha3, setlinha3] = useState(sembg)
    var [linha4, setlinha4] = useState(sembg)

    var [titulo, settitulo] = useState('MOON')

    let descmoon = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'
    let descmars = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!'
    let desceuropa = ' The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.'
    let desctitan = 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'
    var [desc, setdesc] = useState(descmoon)
    

    const over1 = () => {
        if ( linha != 1) {
            setlinha1(combgc)
        }
    }

    const out1 = () => {
        if ( linha != 1) {
            setlinha1(sembg)
        }
    }

    const over2 = () => {
        if ( linha != 2) {
            setlinha2(combgc)
        }
    }

    const out2 = () => {
        if ( linha != 2) {
            setlinha2(sembg)
        }
    }

    const over3 = () => {
        if ( linha != 3) {
            setlinha3(combgc)
        }
    }

    const out3 = () => {
        if ( linha != 3) {
            setlinha3(sembg)
        }
    }

    const over4 = () => {
        if ( linha != 4) {
            setlinha4(combgc)
        }
    }

    const out4 = () => {
        if ( linha != 4) {
            setlinha4(sembg)
        }
    }
    
    const click1 = () => {
        setimagem(moon)
        linha = 1
        setaceso1(planetaceso)
        setaceso2(planetapagado)
        setaceso3(planetapagado)
        setaceso4(planetapagado)
        setlinha1(combgb)
        setlinha2(sembg)
        setlinha3(sembg)
        setlinha4(sembg)
        settitulo('MOON')
        setdesc(descmoon)
    }

    function click2 () {
        setimagem(mars)
        linha = 2
        setaceso1(planetapagado)
        setaceso2(planetaceso)
        setaceso3(planetapagado)
        setaceso4(planetapagado)
        setaceso1, setaceso3, setaceso4 (planetapagado)
        setlinha1(sembg)
        setlinha2(combgb)
        setlinha3(sembg)
        setlinha4(sembg)
        settitulo('MARS')
        setdesc(descmars)
    }

    const click3 = () => {
        setimagem(europa)
        linha = 3
        setaceso1(planetapagado)
        setaceso2(planetapagado)
        setaceso3(planetaceso)
        setaceso4(planetapagado)
        setlinha1(sembg)
        setlinha2(sembg)
        setlinha3(combgb)
        setlinha4(sembg)
        settitulo('EUROPA')
        setdesc(desceuropa)
    }

    const click4 = () => {
        setimagem(titan)
        linha = 4
        setaceso1(planetapagado)
        setaceso2(planetapagado)
        setaceso3(planetapagado)
        setaceso4(planetaceso)
        setlinha1(sembg)
        setlinha2(sembg)
        setlinha3(sembg)
        setlinha4(combgb)
        settitulo('TITAN')
        setdesc(desctitan)
    }

    return (
        <div className='max-md:bg-background-destination-desktop lg:bg-background-destination-desktop max-lg:bg-background-destination-tablet bg-cover bg-no-repeat h-[100vh] overflow-auto flex flex-col'>
            <Navbar lbranca={2}/>
            <Title num='01' title='PICK YOUR DESTINATION'/>
            <div className='flex max-lg:flex-col max-lg:mt-10 justify-center items-center flex-grow max-lg:gap-10 gap-32'>
                <img className='w-[400px]' src={imagem} alt='image moon'></img>
                <div className='flex flex-col w-[400px] max-lg:items-center'>
                    <div className='flex gap-7'>
                        <button onClick={click1} className='pointer-events-none'><p onMouseOver={over1} onMouseOut={out1} className={aceso1}>MOON</p><span className={linha1}></span></button>
                        <button onClick={click2} className='pointer-events-none'><p onMouseOver={over2} onMouseOut={out2} className={aceso2}>MARS</p><span className={linha2}></span></button>
                        <button onClick={click3} className='pointer-events-none'><p onMouseOver={over3} onMouseOut={out3} className={aceso3}>EUROPA</p><span className={linha3}></span></button>
                        <button onClick={click4} className='pointer-events-none'><p onMouseOver={over4} onMouseOut={out4} className={aceso4}>TITAN</p><span className={linha4}></span></button>
                    </div>
                    <div className='flex flex-col max-lg:items-center justify-start h-[252px]'>
                        <h1 className='bellefair-100 text-white'>{titulo}</h1>
                        <p className='barlow-17-300w text-[#D0D6F9]'>{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination