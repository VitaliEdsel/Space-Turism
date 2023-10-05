import Navbar from '../components/Navbar'
import Title from '../components/Title'
import moon from '../assets/destination/image-moon.png'
import { useState, useEffect } from 'react'

var linha

function Destination() {

    var [linha1, setlinha1] = useState('block mt-1 bg-white w-[100%] h-[2px] ')
    var [linha2, setlinha2] = useState('block mt-1 w-12 h-[2px] ')
    var [linha3, setlinha3] = useState('block mt-1 w-12 h-[2px] ')
    var [linha4, setlinha4] = useState('block mt-1 w-12 h-[2px] ')
    

    const over1 = () => {
        if ( linha === 2 | linha === 3 | linha === 4) {
            setlinha1('block mt-1 w-12 h-[2px] bg-[#8B8D92]')
        }
        console.log(linha)
    }
    

    function click2 () {
        linha = 2
        setlinha1('block mt-1 w-12 h-[2px] ')
        setlinha2('block mt-1 bg-white w-[100%] h-[2px] ')
        console.log(linha)
    }

    return (
        <div className='max-md:bg-background-destination-desktop lg:bg-background-destination-desktop max-lg:bg-background-destination-tablet bg-cover bg-no-repeat h-[100vh] overflow-auto flex flex-col'>
            <Navbar lbranca={2}/>
            <Title num='01' title='PICK YOUR DESTINATION'/>
            <div className='flex justify-center items-center flex-grow gap-32'>
                <img className='w-[400px]' src={moon}></img>
                <div className='flex flex-col'>
                    <div className='flex gap-7'>
                        <button className='flex flex-col'><p onMouseOver={over1} className='barlow-16-27 text-[#ACB2D1]'>MOON</p><span className={linha1}></span></button>
                        <button onClick={click2}><p className='barlow-16-27 text-[#ACB2D1]'>MARS</p><span className={linha2}></span></button>
                        <button><p className='barlow-16-27 text-[#ACB2D1]'>EUROPA</p><span className={linha3}></span></button>
                        <button><p className='barlow-16-27 text-[#ACB2D1]'>TITAN</p><span className={linha4}></span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination