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

    /* 
        Offset all the NavigationBar items a 
        bit to the left so it is not just right up to the edge 
        TODO: Make this value be dynamic
    */
    padding-left: 1.2%;
`; //end NavContainer

const NavLogoContainer = styled('div')`
    position: relative;
    line-height: 1;
    font-size: 1.4em;
    display: inline-block;

     /* 
        Offset Navbar items to be the right by the same amount as the left offset
        TODO: Make this value be dynamic
    */
    margin-right: 1.2%;
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
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
`; //end Nav

const NavUl = styled('ul')`
    list-style: none;
    margin: 0;
    padding: 0;
`; //end NavUL


const NavLi = styled('li')`
    display: inline-block;
    position: relative;
    cursor: pointer;

    ul {
        position: absolute;

        margin: 0;
        padding: 0;

        list-style: none;
        /* visibility: hidden; */
    }

    :hover ul{
        visibility: visible;
    }


    /* 
        Collapse the links to make them responsive starting
        in tablet lengths
    */
    @media only screen and (max-width: 765px) {
        display: block;

        ul {
            position: relative;
            padding-left: 5%;
            width: 100%;
        }
    } /* End media query */
`;

let NavLink = styled('a')`
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


