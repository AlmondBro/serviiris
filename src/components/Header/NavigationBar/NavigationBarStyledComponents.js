import React from 'react';

import styled from 'styled-components';

import { NavLink as Link } from "react-router-dom";

/* 
    .bg-iris-yellow {
        background-color: #FFF308;
    }

    .bg-iris-purple {
        background-color: #5425BA;
    }
*/

const NavBar = styled('section')`
  background-color: #5425BA;
`; //end NavBar


const NavContainer = styled('div')`
    /* Breakpoint of 1000px  */
    width: 100%;
    margin: 0;
    padding: 0;
    height: 100%;
`; //end NavContainer

const NavLogoContainer = styled('div')`
    position: absolute;
    padding-left: 10px;
    float: left;
    line-height: 70px;
    text-transform: uppercase;
    font-size: 1.4em;
`; //end LogoContainer

const NavLogoContainerLink = styled('a')`
    color: #ffffff;
    text-decoration: none;

    :visited {
        color: #ffffff;
        text-decoration: none;
    }
`; //end NavLogoContainerLink

const Nav = styled('nav')`
    /* float: right; */
`; //end Nav

const NavUl = styled('ul')`
    list-style: none;
    margin: 0;
    padding: 0;
`; //end NavUL


const NavLi = styled('li')`
    float: left;
    position: relative;
    cursor: pointer;
`;

let NavLink = styled('li')`
    display: block;
    padding: 0 20px;
    line-height: 40px;
    background: #262626;
    color: #ffffff;
    text-decoration: none;

    :hover,
    :visited:hover {
        background: #2581DC;
        color: #ffffff;
    }

    :not(:only-child):after,
    :visited:not(:only-child):after {
        padding-left: 4px;
        content: ' ▾';
    }
`; //end NavLink

export {    NavBar, NavContainer, NavLogoContainer, NavLogoContainerLink,
            Nav, NavUl, NavLi, NavLink };


