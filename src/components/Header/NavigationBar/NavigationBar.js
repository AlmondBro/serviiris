import React from 'react';

//Import React Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import NavBarToggle from './NavBarToggle/NavBarToggle.js';

//Import styled components
import  {   NavBar, NavIrisLogo, NavContainer, NavLogoContainer, NavLogoContainerLink,
            Nav, NavUl, NavLi, NavLink
        } from './NavigationBarStyledComponents.js';


import IrisLogo from './../../IrisLogo.js';
/*
    <Link 
                            to              =   "/home" 
                            activeClassName =   "navLink-current"  
                            className       =   "navLinks nav-link"
                        >
                            Inicio
                        </Link> 
                        <Link   
                                to              =   "/about-us" 
                                activeClassName =   "navLink-current" 
                                className       =   "navLinks nav-link"
                        >
                            Conócenos
                        </Link> 
                        <Link to="/products" activeClassName="navLink-current"  className="navLinks nav-link">Servicios</Link> 
                        <Link to="/location" activeClassName="navLink-current"  className="navLinks nav-link">Contáctanos</Link> 
                        <Link to="/contact-us" activeClassName="navLink-current" className="navLinks nav-link">Trabaja con Nosotros</Link> 
*/
const NavigationBar = (props) => {
    return (
            <NavBar className="navigation-bar">
                <NavContainer className="nav-container">
                    <NavLogoContainer className="nav-logo-container">
                        <NavLogoContainerLink href="#!">
                            <NavIrisLogo
                                height  =   "35px"
                                width   =   "35px"
                            />
                        </NavLogoContainerLink>
                    </NavLogoContainer>
                    <NavBarToggle id={props.navBarToggleID}/>
                    <Nav id="basic-navbar-nav"> 
                        {/* <div class="nav-mobile">
                            <a id="nav-toggle" href="#!">
                                <span></span>
                            </a>
                        </div> */}
                        
                        <NavUl className="nav-ul">
                            <NavLi className="nav-li">
                                <NavLink 
                                    href="#!" 
                                    activeClassName =   "navLink-current" 
                                    className="nav-li"
                                >
                                    Inicio
                                </NavLink>
                            </NavLi>
                            <NavLi>
                                <NavLink href="#!">Conócenos</NavLink>
                                {/* TODO: Fix this not lining up in width */}
                                {/* <NavLink href="#!">Services</NavLink> */}
                                <ul class="nav-dropdown">
                                    <NavLi>
                                        <NavLink href="#!">Visión</NavLink>
                                    </NavLi>
                                    <NavLi>
                                        <NavLink href="#!">Misión</NavLink>
                                    </NavLi>
                                </ul>
                            </NavLi>
                            <NavLi>
                                <NavLink href="#!">Servicios</NavLink>
                                <ul class="nav-dropdown">
                                    <NavLi>
                                        <NavLink href="#!">Especialidades</NavLink>
                                    </NavLi>
                                </ul>
                            </NavLi>
                            <NavLi>
                                <NavLink href="#!">Contáctanos</NavLink>
                            </NavLi>
                            <NavLi>
                                <NavLink href="#!">Trabaja Con Nosotros</NavLink>
                            </NavLi>
                        </NavUl>
                </Nav>
                {/* <form>
                    <p style={{margin: 0}}>
                        <label>Hi</label>
                        <input type="text" id="search"/>
                            
                    </p>
                </form> */}
                {/* <NavLogoContainer className="nav-logo-container">
                    <NavLogoContainerLink href="#!">Logo</NavLogoContainerLink>
                </NavLogoContainer> */}
            </NavContainer>
        </NavBar>
    ); //end return
}; //end Navigation()

export  { NavigationBar };