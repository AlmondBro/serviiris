import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBriefcase, faPaperPlane, faMotorcycle, faBook, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import NavBarToggle from './NavBarToggle/NavBarToggle.js';

//Import styled components
import  {   NavBar, NavIrisLogo, NavContainer, NavLogoContainer, NavLogoContainerLink,
            Nav, NavUl, NavLi, NavLink, FontAwesomeIconStyled, UserIconButton, SearchForm
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
                                    <FontAwesomeIconStyled icon={faHome} />
                                    Inicio
                                </NavLink>
                            </NavLi>
                            <NavLi>
                                <NavLink href="#!">
                                    <FontAwesomeIconStyled icon={faBook} />
                                    Conócenos
                                </NavLink>
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
                                <NavLink href="#!">
                                    <FontAwesomeIconStyled icon={faMotorcycle} />
                                    Servicios
                                </NavLink>
                                <ul class="nav-dropdown">
                                    <NavLi>
                                        <NavLink href="#!">Especialidades</NavLink>
                                    </NavLi>
                                </ul>
                            </NavLi>
                            <NavLi>
                                <NavLink href="#!">
                                    <FontAwesomeIconStyled icon={faPaperPlane} />
                                    Contáctanos
                                </NavLink>
                            </NavLi>
                            <NavLi>
                                
                                <NavLink href="#!">
                                    <FontAwesomeIconStyled icon={faBriefcase} />
                                    Trabaja Con Nosotros
                                </NavLink>
                            </NavLi>
                            
                            <NavLi>
                                <SearchForm>
                                    <p id="search-input-container">
                                        <label id="search-input-label">
                                            <FontAwesomeIconStyled 
                                                id="search-input-icon" 
                                                icon={faSearch} 
                                            />
                                        </label>
                                        <input type="text" id="search-input"/>
                                    </p>
                                </SearchForm>
                            </NavLi>

                            <NavLi>
                                <UserIconButton>
                                    <FontAwesomeIconStyled 
                                        id      =   "nav-login-icon"
                                        icon    =   {faUserCircle} 
                                    />
                                    <label>Login</label>
                                </UserIconButton>
                            </NavLi>
                        </NavUl>
                      
                
                </Nav>
                {/* <NavLogoContainer className="nav-logo-container">
                    <NavLogoContainerLink href="#!">Logo</NavLogoContainerLink>
                </NavLogoContainer> */}
            </NavContainer>
        </NavBar>
    ); //end return
}; //end Navigation()

export  { NavigationBar };