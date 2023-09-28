import "../app.css"
import Navbar from "../components/Navbar"
import Imagem from '../assets/home/background-home-desktop.jpg'


function Home() {
    return (
        <div className="h-screen pt-10 bg-custom" style={{ backgroundImage: `url(${Imagem})` }}>
            <Navbar />
        </div>
    )
}

export default Home