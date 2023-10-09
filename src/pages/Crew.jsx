import Navbar from '../components/Navbar'
import Title from '../components/Title'
import douglas from '../assets/crew/image-douglas-hurley.png'
import mark from '../assets/crew/image-mark-shuttleworth.png'
import victor from '../assets/crew/image-victor-glover.png'
import anou from '../assets/crew/image-anousheh-ansari.png'
import { useState } from 'react'
import '../App.css'

let bola = 1

function Crew() {

    let ddouglas = 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
    let dmark = 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
    let dvictor = 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
    let danou = 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
    let bolaescura = 'block w-3 h-3 rounded-full bg-[#979797]/20'
    let bolaclara = 'block w-3 h-3 rounded-full bg-white'
    let bolahover = 'block w-3 h-3 rounded-full bg-[#979797]'

    var [profi, setprofi] = useState('COMMANDER')
    var [nome, setnome] = useState('DOUGLAS HURLEY')
    var [desc, setdesc] = useState(ddouglas)

    var [bola1, setbola1] = useState(bolaclara)
    var [bola2, setbola2] = useState(bolaescura)
    var [bola3, setbola3] = useState(bolaescura)
    var [bola4, setbola4] = useState(bolaescura)

    var [imagem, setimagem] = useState(douglas)

    const over1 = () => {
        if (bola != 1) {
            setbola1(bolahover)
        }
    }

    const out1 = () => {
        if (bola != 1) {
            setbola1(bolaescura)
        }
    }

    const over2 = () => {
        if (bola != 2) {
            setbola2(bolahover)
        }
    }

    const out2 = () => {
        if (bola != 2) {
            setbola2(bolaescura)
        }
    }

    const over3 = () => {
        if (bola != 3) {
            setbola3(bolahover)
        }
    }

    const out3 = () => {
        if (bola != 3) {
            setbola3(bolaescura)
        }
    }

    const over4 = () => {
        if (bola != 4) {
            setbola4(bolahover)
        }
    }

    const out4 = () => {
        if (bola != 4) {
            setbola4(bolaescura)
        }
    }

    const click1 = () => {
        bola = 1
        setprofi('COMMANDER')
        setnome('DOUGLAS HURLEY')
        setdesc(ddouglas)
        setbola1(bolaclara)
        setbola2(bolaescura)
        setbola3(bolaescura)
        setbola4(bolaescura)
        setimagem(douglas)
    }

    const click2 = () => {
        bola = 2
        setprofi('MISSION SPECIALIST')
        setnome('MARK SHUTTLEWORTH')
        setdesc(dmark)
        setbola1(bolaescura)
        setbola2(bolaclara)
        setbola3(bolaescura)
        setbola4(bolaescura)
        setimagem(mark)
    }

    const click3 = () => {
        bola = 3
        setprofi('PILOT')
        setnome('VICTOR GLOVER')
        setdesc(dvictor)
        setbola1(bolaescura)
        setbola2(bolaescura)
        setbola3(bolaclara)
        setbola4(bolaescura)
        setimagem(victor)
    }

    const click4 = () => {
        bola = 4
        setprofi('FLIGHT ENGINEER')
        setnome('ANOUSHEH ANSARI')
        setdesc(danou)
        setbola1(bolaescura)
        setbola2(bolaescura)
        setbola3(bolaescura)
        setbola4(bolaclara)
        setimagem(anou)
    }

    return (
        <div className='flex flex-col lg:bg-background-crew-desktop md:bg-background-crew-tablet max-md:bg-background-crew-mobile bg-cover bg-no-repeat h-[100vh] overflow-auto'>
            <Navbar lbranca={3} />
            <Title num='02' title='MEET YOUR CREW' />
            <div className='lg:ml-[158px] flex flex-grow max-lg:items-center lg:items-end max-lg:flex-col max-md:flex-col-reverse max-lg:mt-20'>
                <div className='z-10 flex flex-col max-md:flex-col-reverse justify-end flex-grow mb-20 max-lg:items-center'>
                    <div className='flex flex-col max-lg:items-center'>
                        <p className='bellefair-32 text-white/50 max-md:scale-75'>{profi}</p>
                        <h1 className='bellefair-50 text-white max-md:scale-75'>{nome}</h1>
                        <p className='barlow-17-300 text-[#D0D6F9] w-[400px] max-lg:text-center'>{desc}</p>
                    </div>
                    <div className='mt-24 max-md:mt-12 max-md:mb-12 flex gap-5'>
                        <button onClick={click1} onMouseOver={over1} onMouseOut={out1} className={bola1}></button>
                        <button onClick={click2} onMouseOver={over2} onMouseOut={out2} className={bola2}></button>
                        <button onClick={click3} onMouseOver={over3} onMouseOut={out3} className={bola3}></button>
                        <button onClick={click4} onMouseOver={over4} onMouseOut={out4} className={bola4}></button>
                    </div>
                </div>
                <span className='md:hidden w-[calc(100%_-_80px)] h-[1px] bg-[#383B4B]'></span>
                <img className='h-[500px] max-md:h-[300px] lg:absolute z-0 bottom-0 right-[151px]' src={imagem} />
                
            </div>
        </div>
    )
}

export default Crew