import React from 'react';

import styled from 'styled-components';

import { NavLink as Link } from "react-router-dom";

import IrisLogo from './../../IrisLogo.js';

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
  width: 100%;
`; //end NavBar



let NavIrisLogo = styled(IrisLogo)`
    width: ${ props => props.width ? props.width : "500px"};
    height: ${ props => props.height ? props.height : "500px"};
    color: ${ props => props.color ? props.color : "#7A40DB"};
`;

const NavContainer = styled('div')`
    /* Breakpoint of 1000px  */

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;


    @media only screen and (max-width: 765px) {
        /* 
            Offset all the NavigationBar items a 
            bit to the left so it is not just right up to the edge 
            TODO: Make this value be dynamic
        */
        padding-left: 1.2%;
    } /* end media query */
`; //end NavContainer

const NavLogoContainer = styled('div')`
    position: relative;
    line-height: 1;
    font-size: 1.4em;
    display: none;

    @media only screen and (max-width: 765px) {
        display: inline-block;

           /* 
        Offset Navbar items to be the right by the same amount as the left offset
        TODO: Make this value be dynamic
    */
    margin-right: 1.2%;
    } /* End media query */

  
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

    margin-right: auto; 

    @media only screen and (max-width: 765px) {
        position: absolute;
        top: -13px;
        margin-right: 0; 
    }

    /*  just a margin: auto value centers everything while keeping left and right float-like effects */
`; //end Nav

const NavUl = styled('ul')`
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0;

    transition: max-height 500ms ease-out, opacity 500ms ease-out;

    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    @media only screen and (max-width: 765px) {
        position: absolute;
        top: 48px;

        max-height: 0;
        opacity: 0;
        overflow: hidden;

        background-color: #471f9d;
    }
`; //end NavUL


const NavLi = styled('li')`
    display: inline-block;
    position: relative;
    cursor: pointer;

    ul {
        position: absolute;
        top: 34px;
        margin: 0;
        padding: 0;
        background-color: #471f9d;
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
    line-height: 2;
    background: #36167D;
    border-bottom: 2px solid #36167D;

    color: #ffffff;
    text-decoration: none;

    transition: border-color 200ms;

    :active,
    :hover,
    :visited:hover {
        color: #ffffff;
        text-decoration: none;

        border-bottom: 2px solid #FFF308;
    }

    :not(:only-child):after,
    :visited:not(:only-child):after {
        padding-left: 4px;
        content: ' ▾';
    }
`; //end NavLink

export {    NavBar, NavIrisLogo, NavContainer, NavLogoContainer, NavLogoContainerLink,
            Nav, NavUl, NavLi, NavLink };


