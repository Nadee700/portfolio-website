import React, { useEffect, useState } from "react";
import AOS from 'aos';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Academics from "./components/Academics";
import Certificate from './components/Certificate';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import 'aos/dist/aos.css';

const App = () => {

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset:100
    })
    document.documentElement.classList.remove('dark');
  },[]);

  useEffect(() => {
    AOS.refresh()
  }, [darkMode])

  const toggleDarkMode = () => {
    const newMode = !darkMode; 
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  }

  return (
    <div className={
      darkMode ? `bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 min-h-screen pb-28`
      : `bg-linear-to-br from-red-50 via-red-100 to-red-200 min-h-screen pb-28`
    }>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Hero/>
      <About/>
      <Skills/>
      <Academics/>
       <Certificate/>
        <Projects />
        <Contact />
        <Footer/>
    </div>

    
  )
}

export default App;