import React from 'react';

//Import FontAwesome icon libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faBriefcase, faPaperPlane, faMotorcycle, faBook, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import NavBarToggle from './NavBarToggle/NavBarToggle.js';

//Import styled components
import  {   NavBar, NavIrisLogo, NavContainer, NavLogoContainer, NavLogoContainerLink,
            Nav, NavUl, NavLi, NavLink, FontAwesomeIconStyled, HomeUserIconButton, 
            UserIconButton, HomeIconBootstrap, SearchForm, InputCheckboxHack
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
                                    to="/home" 
                                    activeClassName =   "navLink-current" 
                                    className="nav-li"
                                >
                                    {/* <FontAwesomeIconStyled icon={faHome} /> */}
                                    <HomeIconBootstrap/>
                                    Inicio
                                </NavLink>
                            </NavLi>
                            <NavLi>
                                <NavLink to="/conocenos">
                                    <FontAwesomeIconStyled icon={faBook} />
                                    Conócenos
                                </NavLink>
                                {/* TODO: Fix this not lining up in width */}
                                {/* <NavLink href="#!">Services</NavLink> */}
                                <ul className="nav-dropdown">
                                    <NavLi>
                                        <NavLink to="#!">Visión</NavLink>
                                    </NavLi>
                                    <NavLi>
                                        <NavLink to="#!">Misión</NavLink>
                                    </NavLi>
                                </ul>
                            </NavLi>
                            <NavLi>
                                <NavLink to="#">
                                    <FontAwesomeIconStyled icon={faMotorcycle} />
                                    Servicios
                                </NavLink>
                                <ul class="nav-dropdown">
                                    <NavLi>
                                        <NavLink to="/especialidades">Especialidades</NavLink>
                                    </NavLi>
                                </ul>
                            </NavLi>
                            <NavLi>
                                <NavLink to="#!">
                                    <FontAwesomeIconStyled icon={faPaperPlane} />
                                    Contáctanos
                                </NavLink>
                            </NavLi>
                            <NavLi>
                                
                                <NavLink to="#!">
                                    <FontAwesomeIconStyled icon={faBriefcase} />
                                    Trabaja Con Nosotros
                                </NavLink>
                            </NavLi>
                            
                            <NavLi>
                                <SearchForm>
                                    <p id="search-input-container">
                                        <label id="search-input-label" htmlFor="search-input-checkbox-hack">
                                            <FontAwesomeIconStyled 
                                                id="search-input-icon" 
                                                icon={faSearch} 
                                            />
                                        </label>
                                        <div id="search-input-field-container">
                                            <InputCheckboxHack 
                                                type    =   "checkbox" 
                                                id      =   "search-input-checkbox-hack" 
                                                name    =   "search-input-checkbox-hack"
                                            />
                                            <input type="text" id="search-input" placeholder="Buscar..."/>
                                        </div>
                                    </p>
                                </SearchForm>
                            </NavLi>

                            <NavLi>
                                <UserIconButton>
                                    <FontAwesomeIconStyled 
                                        id      =   "nav-login-icon"
                                        icon    =   {faUserCircle} 
                                    />
                                    <label>Iniciar Sesión</label>
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