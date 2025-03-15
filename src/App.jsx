import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Work from './components/Works/Work'
import Contact from './components/Contact/Contact'
import "./App.css"

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  )
}
export default App
