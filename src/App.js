import React from 'react';

import './App.css';
import {
 
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <HashRouter>
    <div className="App">
      <div className = "">
        <h1>Simple SPA</h1>
        <nav>
        <ul className="header">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Projects">Projects</NavLink></li>
        <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
        </nav>
        <div className="content">
          
         <Route exact path="/" component={Home}/>
         <Route path="/Projects" component={Projects}/>
         <Route path="/Contact" component={Contact}/>
         
        </div>
      </div>
  
      
    </div>
    </HashRouter>
  );
}

export default App;
