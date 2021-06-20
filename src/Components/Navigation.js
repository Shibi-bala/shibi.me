import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (

    <div className="NavBar">
        <Navbar bg="light" expand="lg" style={{textAlign:"center"}}>
            <Navbar.Collapse id="basic-navbar-nav">
                <NavLink className="nav-link" to="/resume">Resume</NavLink>
                <NavLink className="nav-link" to="/">Home</NavLink>
                {/*<NavLink className="nav-link" to="/my-mind">My Mind</NavLink>*/}
                <a className="nav-link" href="https://www.linkedin.com/in/shibi-balamurugan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="nav-link" href="https://github.com/Shibi-bala" target="_blank" rel="noopener noreferrer">Github</a>
                <a className="nav-link" href="mailto: shibibala1@gmail.com">Email</a>
            </Navbar.Collapse>
        </Navbar>        
    </div>
  );
}

export default Navigation;
