import React from "react";

//Import 3rd-party packages
import { NavLink as Link } from "react-router-dom";

//Import 3rd-party packages
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import NavBarToggle from './NavBarToggle.js'

const NavigationBar = (props) => {
    return (
        <div className="container-fluid no-padding">
            <Navbar bg="green" variant="dark" expand="sm" className="navbar">
                <Navbar.Brand className="collapsedNav-logo">
                    <Link to="/home"
                          title="Home"
                    >
                        {/* <img src="/assets/img/harza-tapes-logo.svg" 
                             alt="Harza Tapes" 
                             title="Home"
                             id="harza-logo-mobile"
                        /> */}
                    </Link>
                    <a href="https://www.cintandina.com/en/index_en.html" target="_blank" rel="noopener noreferrer">
                            <img className="animated bounceInDown header-image"
                                    src="/assets/img/cintandina-logo.svg"
                                    alt="Cintandina" 
                                    id="cintandina-logo-mobile"/>
                    </a>
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                <NavBarToggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link activeClassName="navLink-current" to="/home" className="navLinks nav-link">Home</Link> 
                        <Link activeClassName="navLink-current" to="/about-us" className="navLinks nav-link">About Us</Link> 
                        <Link activeClassName="navLink-current" to="/products" className="navLinks nav-link">Products</Link> 
                        <Link activeClassName="navLink-current" to="/location" className="navLinks nav-link">Locations</Link> 
                        <Link activeClassName="navLink-current" to="/contact-us" className="navLinks nav-link">Contact Us</Link> 

                        {/* <Nav.Link href="/home" className="navLinks">Home</Nav.Link>
                        <Nav.Link href="/about-us" className="navLinks">About Us</Nav.Link>
                        <Nav.Link href="/products" className="navLinks">Products</Nav.Link>
                        <Nav.Link href="/location" className="navLinks">Location</Nav.Link>
                        <Nav.Link href="/contact-us" className="navLinks">Contact Us</Nav.Link> */}
                    </Nav>
                    {/* <Form inline>
                        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">
                            <FontAwesome name="search" 
                                        className="nav-search-icon" 
                            />
                        </Button>
                    </Form> */}
                </Navbar.Collapse>
            </Navbar>
        </div>
        
    );
}; //end Navigation()

export  { NavigationBar };