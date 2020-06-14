import React from 'react';
import styled from 'styled-components';


//Import React Bootstrap components
import Nav from 'react-bootstrap/Nav';
import Navbar, { Collapse } from 'react-bootstrap/Navbar';
import { NavLink as Link } from "react-router-dom";

/* 
    .bg-iris-yellow {
        background-color: #FFF308;
    }

    .bg-iris-purple {
        background-color: #5425BA;
    }
*/


let NavBar = styled(Navbar)`
  background: #5425BA;
  padding: 0;
  /* 0.5rem 1rem; */
`; //end NavBar styled-component

const NavBarCollapse = styled(Navbar.Collapse)`

`; //end NavBar.Collapse

const NavStyled = styled(Nav)`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    width: 100%;
`;

let NavLink = styled(Link)`

`;

export { NavBar, NavStyled, NavBarCollapse, NavLink };


