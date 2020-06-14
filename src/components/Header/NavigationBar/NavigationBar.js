import React from 'react';

//Import React Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import NavBarToggle from './NavBarToggle.js'

//Import styled components
import  {   NavBar, NavContainer, NavLogoContainer, NavLogoContainerLink,
            Nav, NavUl, NavLi, NavLink
        } from './NavigationBarStyledComponents.js';

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
                    {/* <NavLogoContainer className="nav-logo-container">
                        <NavLogoContainerLink href="#!">Logo</NavLogoContainerLink>
                    </NavLogoContainer> */}
                    <Nav>
                        {/* <div class="nav-mobile">
                            <a id="nav-toggle" href="#!">
                                <span></span>
                            </a>
                        </div> */}
                        
                        <NavUl className="nav-ul">
                            <NavLi className="nav-li">
                                <NavLink 
                                    href="#!" 
                                    className="nav-li"
                                >
                                Home
                            </NavLink>
                            </NavLi>
                            <NavLi>
                                <NavLink href="#!">About</NavLink>
                            </NavLi>
                            {/* <li>
                                <a href="#!">Services</a>
                                <ul class="nav-dropdown">
                                    <li>
                                        <a href="#!">Web Design</a>
                                    </li>
                                    <li>
                                        <a href="#!">Web Development</a>
                                    </li>
                                    <li>
                                        <a href="#!">Graphic Design</a>
                                    </li>
                                </ul>
                            </li> */}
                            <NavLi>
                                <NavLink href="#!">Pricing</NavLink>
                            </NavLi>
                            {/* <li>
                                <a href="#!">Portfolio</a>
                                <ul class="nav-dropdown">
                                    <li>
                                        <a href="#!">Web Design</a>
                                        </li>
                                        <li>
                                        <a href="#!">Web Development</a>
                                        </li>
                                        <li>
                                        <a href="#!">Graphic Design</a>
                                    </li>
                                </ul>
                            </li> */}
                            <NavLi>
                                <NavLink href="#!">Contact</NavLink>
                            </NavLi>
                        </NavUl>
                </Nav>
                {/* <form>
                    <p style={{margin: 0}}>
                        <label>Hi</label>
                        <input type="text" id="search"/>
                            
                    </p>
                </form> */}
            </NavContainer>
        </NavBar>
    ); //end return
}; //end Navigation()

export  { NavigationBar };