import "../app.css"
import Navbar from "../components/Navbar"


function Home() {
    return (
        <div className="h-screen w-screen bg-cover bg-center bg-no-repeat lg:bg-background-home-desktop md:bg-background-home-tablet bg-background-home-mobile">
            <Navbar lbranca={1} />
        </div>
    )
}

export default Home