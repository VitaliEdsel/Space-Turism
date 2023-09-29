import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Crew from "./pages/Crew"
import Destination from "./pages/Destination"
import Technology from "./pages/Technology"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Destination" element={<Destination />}></Route>
          <Route path="/Crew" element={<Crew />}></Route>
          <Route path="/Technology" element={<Technology />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App