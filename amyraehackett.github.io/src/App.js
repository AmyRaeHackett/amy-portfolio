import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Photography from './components/Photography';
import Contact from './components/Contact';
//import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
       <Nav />
       <Home />
       <About />
       <Projects />
       <Photography />
       <Contact />
     
     
    </div>
  );
}

export default App;
