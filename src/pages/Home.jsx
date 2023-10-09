import "../app.css"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import { useState } from "react"


function Home() {
    let explore = 'block relative rounded-full z-10 translate-y-[-210px] translate-x-[-30px] bg-[rgb(255_255_255_/_0.15)] w-[240px] h-[240px] lg:w-[400px] lg:h-[400px] lg:translate-y-[-337px] lg:translate-x-[-63px] transition-all'
    let diminue = 'block relative rounded-full z-10 translate-y-[-180px] translate-x-[-0px] bg-[rgb(255_255_255_/_0.15)] w-[180px] h-[180px] lg:w-[274px] lg:h-[274px] lg:translate-y-[-274px] lg:translate-x-[-0px] transition-all'
    var [classeex, setclasseex] = useState(diminue)

    const expandir = () => {
        setclasseex(explore)
    }

    const diminuir = () => {
        setclasseex(diminue)
    }
    
    return (
        <div className="flex flex-col h-[100vh] overflow-auto bg-cover bg-center bg-no-repeat lg:bg-background-home-desktop md:bg-background-home-tablet bg-background-home-mobile">
            <Navbar lbranca={1} />
            <div className='flex-grow max-lg:mt-[82px] max-lg:mb-[90px] flex lg:flex-row max-lg:flex-col  justify-around max-lg:items-center lg:items-center '>
                <div className=' max-lg:scale-90 flex flex-col items-center'>
                    <p className='barlow-28-475 text-[#B7BDDD] lg:scale-100 md:text-4'>So, you want to travel to</p>
                    <h1 className='bellefair-150 text-white'>Space</h1>
                    <p className='text-[#B7BDDD] w-[400px] ml-7'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className='lg:w-[274px] lg:h-[274px] max-lg:h-[180px] max-lg:w-[180px] max-lg:mt-10'>
                    <Link to='Space-Tourism/destination'><span onMouseOver={expandir} onMouseOut={diminuir} className='z-20 relative bg-white rounded-full lg:w-[274px] lg:h-[274px] max-lg:h-[180px] max-lg:w-[180px] flex flex-col justify-center items-center cursor-pointer'><p className='font-[bellefair] text-[32px]'>Explore</p></span></Link>
                    <span className={classeex}/>
                </div>
            </div>
        </div>
    )
}

export default Home