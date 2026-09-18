import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills  from './components/Skills/Skills';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';
import WorkExperience from './components/WorkExperience/WorkExperience';

const App = () => {
  return (
    
    <div>
      <Navbar></Navbar>
      <Hero/>
      <Skills></Skills>
      <Project></Project>
      <WorkExperience/>
      <Footer/>
      
      
    </div>
  )
}

export default App