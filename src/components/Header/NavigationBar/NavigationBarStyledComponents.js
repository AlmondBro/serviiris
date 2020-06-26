import React from 'react';

import styled from 'styled-components';

import { NavLink as Link } from "react-router-dom";

import { IrisLogo} from './../../IrisLogo.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* 
    .bg-iris-yellow {
        background-color: #FFF308;
    }

    .bg-iris-purple {
        background-color: #5425BA;
    }
*/

const NavBar = styled('section')`
    position: relative;
    z-index: 1;

    background-color: #5425BA;

    width: 100%;

    font-size: 1em;

    /* Have the NavBar be sticky in responsive widths  */
    @media only screen and (max-width: 765px) {
        position: fixed; 
    }

    @media only screen and (min-width: 765px) and (max-width: 874px) {
        font-size: 0.87em;
    }
`; //end NavBar



let NavIrisLogo = styled(IrisLogo)`
    width: ${ props => props.width ? props.width : "500px"};
    height: ${ props => props.height ? props.height : "500px"};
    color: ${ props => props.color ? props.color : "#7A40DB"};
`;

const NavContainer = styled('div')`
    /* Breakpoint of 1000px  */

    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0px;


    @media only screen and (max-width: 765px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        /* 
            Offset all the NavigationBar items a 
            bit to the left so it is not just right up to the edge 
            TODO: Make this value be dynamic
        */
        padding-left: 1.2%;
        padding: 5px;
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

    /* margin-right: 0; */
    width: 100%;
    /* auto;  */

    @media only screen and (max-width: 765px) {
        display: flex;
        flex-direction: row;
        justify-content: center;

        position: absolute;
        top: -13px;
        margin-right: 0; 
    }

    /*  just a margin: auto value centers everything while keeping left and right float-like effects */
`; //end Nav

const NavUl = styled('ul')`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;
    align-items: center;

    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;

    transition: max-height 500ms ease-out, opacity 500ms ease-out;

    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    /* border-top-left-radius: 12px;
    border-top-right-radius: 12px; */


    & li:nth-last-child(2) {
        margin-left: auto;
    }

    @media only screen and (max-width: 765px) {
        position: absolute;
        top: 53px;

        max-height: 0;
        width: 200px;
        opacity: 0;
        overflow: hidden;

        background-color: #5425BA;

        & li:last-child {
            margin: 12px 0px;
            margin-bottom: 8px;
            text-align: center;
        }
    }
`; //end NavUL


const NavLi = styled('li')`
    display: inline-block;
    position: relative;
    cursor: pointer;

    margin: 0 10px;

    ul {
        position: absolute;
        top: 34px;
        margin: 0;
        padding: 0;

    
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-height: 0px;
        opacity: 0;
        overflow: hidden;

        background-color: #5425BA;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;

        list-style: none;
        visibility: hidden;

        transition: visibility 500ms ease-out, max-height 500ms ease-out, opacity 600ms ease-out;


    }

    :hover ul{
        visibility: visible;
        opacity: 1.0;
        max-height: 500px;
    }

    ul.nav-dropdown li {
        width: 100%;
        text-align: center;
    }

    &  ul.nav-dropdown li:last-child a {
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
    }


    /* 
        Collapse the links to make them responsive starting
        in tablet lengths
    */
    @media only screen and (max-width: 765px) {
        display: block;
        margin: 0;
        padding: 0 10px;

        ul.nav-dropdown {
            position: relative;
            padding-left: 20%;
            width: 100%;
            z-index: 2;
            top: 0;
        }


        ul.nav-dropdown li {
            display: inherit;
            text-align: left;
        }

        &  ul.nav-dropdown li:last-child a {
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
        }

        & ul.nav-dropdown li::before {
            content: '↪';
            /* margin: auto; */
            display: inline-block;
            color: white;
            padding-right: 4px;
        }

        & ul.nav-dropdown li:hover::before {
            color: #FFF308;
          
        }
    } /* End media query */
`;

let NavLink = styled('a')`
    display: block;
    padding: 0 5px;
    line-height: 2;
    background: #5425BA;
    border-bottom: 2px solid #5425BA;

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

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
    color: white;

    margin-right: 5px;

    :hover {
        color: #FFF308;
    }
`; //end FontAwesomeIconStyled

const UserIconButton = styled('button')`
    cursor: pointer;

    /* color: #5425BA;
    background-color: white; */
    color: white;
        background-color: #5425BA;

    padding: 2px 4px;
    
    border-radius: 5px;
    border: 0;

    
    label {
        cursor: pointer;
        padding: 0;
        margin: 0;  
    }

    :hover, :visited, :active {
        color: #5425BA;
        background-color: white;

        /* color: white;
        background-color: #5425BA; */
    }

    :hover > #nav-login-icon, 
    :visited > #nav-login-icon, 
    :active > #nav-login-icon {
        color: #5425BA;
    }

    transition: color 500ms, background-color 500ms;
`;

const SearchForm = styled('form')`
    margin: 0;
    padding: 0;

    p#search-input-container {
        margin: 0;
        padding: 0;
    }

    label#search-input-label {
        cursor: pointer;
        /* top: 2px;
        position: relative; */
        margin: 0;
        padding: 0;
    }

    div#search-input-field-container {
        visibility: hidden;
        height: 0;
        margin: 0;
        padding: 0;
        transition: visibility 500ms;
    }
    
    div#search-input-field-container:before {
        content: "";
        position: absolute;
        top: 104%;
        right: 50%;
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent #5425ba transparent;
    }
    
    input#search-input {
        visibility: hidden;
        position: absolute;
        z-index: 1;
        top: 145%;
        right: 1%;
        border: 0;

        padding: 5px;
        padding-left: 10px;

        background-color: white;

        border-radius: 12px;
        border: 1px solid #5425ba;

        width: 0px;
        max-height: 0px;

        transition: visibility 500ms, max-height 400ms, width 500ms;
    }

    & #search-input-checkbox-hack:checked ~ input#search-input {
        visibility: visible;
        max-height: 500px; 
        width: 300px;
    }

    @media only screen and (max-width: 765px) {
        label#search-input-label {
            cursor: pointer;
            top: 2px;
            left: 3px;
            position: relative;
            margin: 0;
            padding: 0;
        }

        input#search-input {
            transition: visibility 500ms, max-height 500ms, width 500ms;
            top: 0px;
            /* right: 9px; */
            left: 37px;
            max-height: 30px;
        }
        & #search-input-checkbox-hack:checked ~ input#search-input {
            max-height: 30px;
            width: 155px;
            top: 0px;
            left: 37px;
        }
    } /* end media query */

`; //end Search Form

const InputCheckboxHack = styled('input')`
    visibility: hidden;
    position: absolute;
    left: -999999px;
    top: -99999px;
`;

export {    NavBar, NavIrisLogo, NavContainer, NavLogoContainer, NavLogoContainerLink,
            Nav, NavUl, NavLi, NavLink, FontAwesomeIconStyled, UserIconButton, SearchForm,
            InputCheckboxHack
        };


