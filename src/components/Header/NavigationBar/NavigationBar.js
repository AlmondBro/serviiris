import React from 'react';

//Import React Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import NavBarToggle from './NavBarToggle.js'

//Import styled components
import { NavBar, NavStyled, NavBarCollapse, NavLink as Link } from './NavigationBarStyledComponents.js';

const NavigationBar = (props) => {
    return (
            <NavBar 
                    bg          =   "green" 
                    variant     =   "dark" 
                    expand      =   "sm" 
                    className   =   "navigation-bar"
            >
                <Navbar.Brand 
                    className   =   "collapsedNav-logo"
                    >
                    <Link 
                        to      =   "/home"
                        title   =   "Home"
                    >
                        {/* <img src="/assets/img/harza-tapes-logo.svg" 
                             alt="Harza Tapes" 
                             title="Home"
                             id="harza-logo-mobile"
                        /> */}
                    </Link>
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                {/*  TODO: Work on the logic for the NavBarToggle */}
                <NavBarToggle   
                    aria-controls   =   "basic-navbar-nav" 
                />
                <NavBarCollapse 
                    className   =   "NavBarCollapse" 
                    id          =   "basic-navbar-nav"
                >
                    <NavStyled>
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
                    </NavStyled>
                    {/* <Form inline>
                        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">
                            <FontAwesomeIcon icon={faSearch} />
                        </Button>
                    </Form> */}
                </NavBarCollapse>
            </NavBar>     
    ); //end return
}; //end Navigation()

export  { NavigationBar };