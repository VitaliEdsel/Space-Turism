import Navbar from '../components/Navbar'
import Title from '../components/Title'

function Technology() {
    return (
        <div className='bg-cover bg-no-repeat h-[100vh] overflow-auto md:bg-background-technology-tablet max-md:bg-background-technology-mobile lg:bg-background-technology-desktop'>
            <Navbar lbranca={4}/>
            <Title num='03' title='SPACE LAUNCH 101'/>
        </div>
    )
}

export default Technology