import Navbar from '../components/Navbar'
import Title from '../components/Title'

function Crew() {
    return (
        <div className='lg:bg-background-crew-desktop md:bg-background-crew-tablet max-md:bg-background-crew-mobile bg-cover bg-no-repeat h-[100vh] overflow-auto'>
            <Navbar lbranca={3}/>
            <Title num='02' title='MEET YOUR CREW' />
        </div>
    )
}

export default Crew