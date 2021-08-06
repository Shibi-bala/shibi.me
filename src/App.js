import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from 'react-router-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import {GitHub, Linkedin, Mail} from 'react-feather';


import Home from './Pages/Home';
import Projects from './Pages/Projects';
import './Components/ComponentStyling.css';
import Resume from './Pages/Resume';
import About from './Pages/About';
import Work from './Pages/Work';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
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
    <Styles.Wrapper>
      <CSSReset />
      <HashRouter>
      
      <div style={{alignItems:"center"}}>
        <Navbar.Wrapper>
          <Navbar.Logo>😎</Navbar.Logo>
          <div style={{flexShrink:0, textAlign:'center'}}><NavLink className="nav-link" to="/"><p className="scalingHeaderText">Shibi Balamurugan</p></NavLink></div>
          <HamburgerButton.Wrapper onClick={() => toggleDrawer(true)} >
            <HamburgerButton.Lines />
          </HamburgerButton.Wrapper>
          
          <Navbar.Items ref={drawerRef} openDrawer={openDrawer}>
            <a className="nav-link-icon" href="mailto: shibibala1@gmail.com" onClick={() => toggleDrawer(false)}><Mail/></a>
            <a className="nav-link-icon" href="https://github.com/Shibi-bala" target="_blank" rel="noopener noreferrer" onClick={() => toggleDrawer(false)}><GitHub/></a>
            <a className="nav-link-icon" href="https://www.linkedin.com/in/shibi-balamurugan/" target="_blank" rel="noopener noreferrer" onClick={() => toggleDrawer(false)}><Linkedin/></a>
            <NavLink className="nav-link" to="/resume" onClick={() => toggleDrawer(false)}>Resume</NavLink>
            <NavLink className="nav-link" to="/about" onClick={() => toggleDrawer(false)} >About</NavLink>
            <NavLink className="nav-link" to="/work" onClick={() => toggleDrawer(false)}>Work</NavLink>            
          </Navbar.Items>
        </Navbar.Wrapper>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/projects" component={Projects}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/about" component={About}/>
        <Route path="/work" component={Work}/>
      </Switch>
      
      </div>
      
    </HashRouter>
    
    </Styles.Wrapper>
  );
}

const Styles = {
  Wrapper: styled.main`
    width: 100vw;
  `
};

const Navbar = {
  Wrapper: styled.nav`
    flex: 1;

    align-self: flex-start;

    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    background-color: white;
    z-index:1000;
    @media only screen and (min-width: 40em) {
      filter: drop-shadow(0 0 4px #888888);
    }

    // 40em == 640px
    @media only screen and (max-width: 40em) {
      position: fixed;
      width: 100vw;
      bottom: 0;
    }
  `,
  Logo: styled.h1`
    border: 0px;
    padding: 0.5rem 1rem;
    width: 50%;
    flex-shrink: 1;
    display: flex;
    
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;
    width: 50%;
    flex-shrink: 1;
    flex-direction: row-reverse;
   
    
    @media only screen and (max-width: 40em) {
      position: fixed;
      right: 0;
      top: 0;

      height: 100%;

      flex-direction: column;

      background-color: white;
      padding: 1rem 2rem;

      transition: 0.2s ease-out;

      transform: ${({ openDrawer }) =>
        openDrawer ? `translateX(0)` : `translateX(100%)`};
    }
  `,
  Item: styled.li`
    padding: 0 1rem;
    cursor: pointer;

    @media only screen and (max-width: 40em) {
      padding: 1rem 0;
    }
  `
};

const HamburgerButton = {
  Wrapper: styled.button`
    height: 3rem;
    width: 3rem;
    position: relative;
    font-size: 12px;

    display: none;

    @media only screen and (max-width: 40em) {
      display: block;
    }

    /* Remove default button styles */
    border: none;
    background: transparent;
    outline: none;

    cursor: pointer;

    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 150%;
      width: 150%;
      top: -25%;
      left: -25%;
    }
  `,
  Lines: styled.div`
    top: 50%;
    margin-top: -0.125em;

    &,
    &:after,
    &:before {
      /* Create lines */
      height: 2px;
      pointer-events: none;
      display: block;
      content: "";
      width: 100%;
      background-color: black;
      position: absolute;
    }

    &:after {
      /* Move bottom line below center line */
      top: -0.8rem;
    }

    &:before {
      /* Move top line on top of center line */
      top: 0.8rem;
    }
  `
};

const CSSReset = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; /*1rem = 10px*/
    box-sizing: border-box;
    
    background-color: #FFFFFF;
  }  

  body {
    font-size: 1.4rem;
    font-family: sans-serif;
  }
`;

export default App;
