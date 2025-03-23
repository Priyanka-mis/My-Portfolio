import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Hero  from './Component/Hero'
import About from './Component/About'
import Project from './Component/Project'
import Skills  from './Component/Skills'
import Education from './Component/Education'
import Contact from './Component/Contact'
import  Footer  from './Component/Footer'

function App() {



  return (
    <>
      {/* <h1>Hello Priyanka</h1> */}
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Skills/>
      <Education/>
      <Contact/>
      <Footer/>

    </>
  )
}

export default App
