import React, { useState, useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import styled, { createGlobalStyle } from "styled-components";

function Navigation({mobile}) {
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = event => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  return (

    <div className="NavBar">
      {mobile ? (
        <Navbar bg="light" expand="lg" style={{textAlign:"center", position: "fixed", width: "100vw", bottom:0, backgroundColor:"white"}}>
            <Navbar.Collapse id="basic-navbar-nav" style={{padding:"1rem"}}>
                <NavLink className="nav-link" to="/resume">Resume</NavLink>
                <NavLink className="nav-link" to="/">Home</NavLink>
                {/*<NavLink className="nav-link" to="/my-mind">My Mind</NavLink>*/}
                <a className="nav-link" href="https://www.linkedin.com/in/shibi-balamurugan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="nav-link" href="https://github.com/Shibi-bala" target="_blank" rel="noopener noreferrer">Github</a>
                <a className="nav-link" href="mailto: shibibala1@gmail.com">Email</a>
            </Navbar.Collapse>
        </Navbar>

      ) :(
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
      )}      
    </div>
  );
}


export default Navigation;
