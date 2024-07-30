import './App.css'
import { NavBar } from './components/NavBar'
import { Banner } from "./components/Banner";
import { Projects } from './components/Projects'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
     <NavBar />
     <Banner />
     <Projects />
    </>
  )
}

export default App
