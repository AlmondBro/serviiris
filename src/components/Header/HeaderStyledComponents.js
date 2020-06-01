import React from 'react';

import styled from 'styled-components';

import Nav from 'react-bootstrap/Nav';
//Import bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavLinkStyled = styled(Nav.Link)`
    /* Use ampserands for this to acquire precedence over the bootstrap components */
    &&& {
        color: black;
        background-color: #FFF308;
        border-radius: 10px;
        margin: 0% 2%;
    }
`;//end NavLinkStyled

const NavDropdownStyled = styled(NavDropdown)`
      /* Use ampserands for this to acquire precedence over the bootstrap components */
      &&& {
        color: black;
        background-color: #FFF308;
        border-radius: 10px;
        margin: 0% 2%;
    }

    /* &&& > * {
        color: white;
    } */
`; //end NavDropdownStyled

const NavDropdownItemStyled = styled(NavDropdown.Item)`
    & {
        color : white;
    }
`;

const NavigationBar = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="iris-purple" variant="light">
          {/* <Navbar.Brand href="#logo">React-Bootstrap</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav 
                    className="w-100"
                >
                    <NavLinkStyled href="#inicio">Inicio</NavLinkStyled>

                    <NavDropdownStyled title="Conócenos" id="conócenos-nav-dropdown">
                        <NavDropdown.Item href="#conócenos/visión">Visión</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#conócenos/misión">Misión</NavDropdown.Item>
                    </NavDropdownStyled>
                    <NavDropdownStyled title="Servicios" id="servicios-nav-dropdown">
                        <NavDropdown.Item href="#conócenos/visión">Visión</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#conócenos/misión">Misión</NavDropdown.Item>
                    </NavDropdownStyled>

                    <NavLinkStyled href="#contáctanos">Contáctanos</NavLinkStyled>
                    <NavLinkStyled href="#trabaja-con-nosotros">Trabaja Con Nosotros</NavLinkStyled>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">Iniciar Sessión</Nav.Link>
                    {/* <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    ); //end return statement
};

export { NavigationBar };
