import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Photography from './components/Photography';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Education from './components/Education';
//import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
       <Nav />
       <Home />
       <About />
       <Projects />
       <Photography />
       <Skills />
       <Education />
       <Contact />
     
     
    </div>
  );
}

export default App;
