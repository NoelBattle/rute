import React, { Component } from "react";


import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import about from "./components/about.js";
import account from "./components/account.js";
import calendar from "./components/calendar.js";
import dashboard from "./components/dashboard.js";
import schools from "./components/schools.js";
import welcome from "./components/welcome.js";
import "./App.css";




class App extends Component {

  render() {
    return (
      <Router>
      
      
      <div className="container-fullwidth">
        <header>
        <nav className="navbar  navbar-expand-lg navbar-dark" id="nav">
          <a class="navbar-brand" href='#' target="_blank">
              <img src="./snout.png" id="pig" width="30" height="30" alt="CodingTheSmartWay.com" />
          </a>
          <Link to="/" className="navbar-brand">Rute</Link>
          <div className="collpase navbar-collapse" id="lin">
              <ul className="navbar-nav ml-auto" id="links">
              
              
                <li id ="f" className="navbar-item"><Link to="/dashboard" className="nav-link">DASHBOARD</Link></li>
                <li id ="f"  className="navbar-item"><Link to="/calendar" className="nav-link">CALENDAR</Link></li>
                <li id ="f" className="navbar-item"><Link to="/schools" className="nav-link">SCHOOLS</Link></li>
                <li id ="f" className="navbar-item"><Link to="/about" className="nav-link">ABOUT</Link></li>
                <li id ="f" className="navbar-item"><Link to="/account" className="nav-link">ACCOUNT</Link></li>
              
                
              </ul>
            </div>
          </nav>
          
          <Route path="/" exact component={welcome} />
          <Route path="/about" exact component={about} />
          <Route path="/dashboard" exact component={dashboard} />
          <Route path="/calendar" exact component={calendar} />
          <Route path="/schools" exact component={schools} />
          <Route path="/account" exact component={account} />
          </header>
          
          
          
            
          
      </div>
      
    
      
      </Router>
    );
  }
}

export default App;
