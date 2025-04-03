import React from 'react';
import './App.css';
import './components/header/header.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

const App = () => {
  return (

    <>

    <Header />
    
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
     </>
  )
}
export default App;
