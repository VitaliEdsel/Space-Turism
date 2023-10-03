import "../app.css"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"


function Home() {
    return (
        <div className="h-[100vh] overflow-auto bg-cover bg-center bg-no-repeat lg:bg-background-home-desktop md:bg-background-home-tablet bg-background-home-mobile">
            <Navbar lbranca={1} />
            <div className='h-[calc(100%_-_100px)] max-lg:mt-[82px] max-lg:mb-[90px] flex lg:flex-row max-lg:flex-col  justify-around max-lg:items-center lg:items-center '>
                <div className='w-[400px] max-lg:scale-90'>
                    <p className='barlow-28-475 text-[#B7BDDD]'>So, you want to travel to</p>
                    <h1 className='bellefair-150 text-white'>Space</h1>
                    <p className='text-[#B7BDDD]'>Let’s face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className='lg:w-[274px] lg:h-[274px] max-lg:h-[180px] max-lg:w-[180px] max-lg:mt-10'>
                    <Link to='/destination'><span className='z-20 relative bg-white rounded-full lg:w-[274px] lg:h-[274px] max-lg:h-[180px] max-lg:w-[180px] flex flex-col justify-center items-center cursor-pointer'><p className='font-[bellefair] text-[32px]'>Explore</p></span></Link>
                    <span className='block relative rounded-full z-10 translate-y-[-210px] translate-x-[-30px] bg-gray-500 w-[240px] h-[240px]'/>
                </div>
            </div>
        </div>
    )
}

export default Home