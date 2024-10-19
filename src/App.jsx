import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills  from './components/Skills/Skills';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Footer></Footer>
      
      
    </div>
  )
}

export default App