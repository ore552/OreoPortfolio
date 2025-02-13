import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Navbar from './Components/Navbar'
import Hero from './Pages/Hero'
import Project from './Pages/Project'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/' element={<Hero/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      

    </>
  )
}

export default App
