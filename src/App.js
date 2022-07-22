
import Intro from './components/Intro/Intro';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Box } from '@chakra-ui/react'
function App() {
  const [ showBtn, setShowBtn] = useState(false)
  return(
    <Box as='main'>
    
      {!showBtn && <Intro showBtn={showBtn}  setShowBtn={setShowBtn}/>}
      { showBtn && 
      <>
        <Header />
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </>
        }
    </Box>
  )
}

export default App;
