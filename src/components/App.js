import React                          from 'react';
import logo                           from './../assets/img/logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects                       from './Projects.js'; 
import About                          from './About.js';
import Video                          from './Video.js'; 
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Video />

        <div className="header">
          <img src={ logo } className="header__logo" alt="Logo" />
          <div className="nav">
            <Link to="/about" className="nav__item">About Me</Link>
            <Link to="/about" className="nav__item nav__item--last-left">Skills</Link>
            <Link to="/about" className="nav__item nav__item--first-right">Work</Link>
            <Link to="/about" className="nav__item">Contact</Link>
          </div>
        </div>
  
        <Route path="/about"    component={ About } />
        <Route path="/skills"   component={ About } />
        <Route path="/work"     component={ Projects } />
        <Route path="/contact"  component={ About } />
        
      </div>
    </BrowserRouter>
  );
}
 
export default App;