import React, { Component } from 'react';

//Import styled components
import { MenuBarToggleButton, MenuBarLine, TopMenuBarLine, MiddleMenuBarLine, BottomMenuBarLine } from './NavBarToggleStyledComponents.js';

class NavBarToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        }; //end this.state
    }
    
    navToggle = document.getElementById("navbarToggle");

    toggleNavBarButton = () => {
        const currentState = this.state.collapsed;
        this.setState({ collapsed: !currentState});

        // let NavBarCollapse = document.getElementById("basic-navbar-nav");
        //     NavBarCollapse.classList.toggle("show");
    }; //end toggleClass2

    render = () => {
        return ( 
            <MenuBarToggleButton 
                    aria-controls   =   "basic-navbar-nav" 
                    type            =   "button" 
                    aria-label      =   "Toggle navigation" 
                    className       =   { "navbar-toggler "  
                                            + ( this.state.collapsed ? "collapsed" : "") 
                                        } 
                    id              =   "navbarToggle"
                    onClick         =   { this.toggleNavBarButton }
            >
                <TopMenuBarLine 
                    collapsed   =   {   this.state.collapsed}
                    className   =   "menubar-line top-bar" 
                />
                <MiddleMenuBarLine 
                    collapsed   =   {   this.state.collapsed}
                    className   =   "menubar-line middle-bar" 
                />
                <BottomMenuBarLine 
                    collapsed   =   {   this.state.collapsed}
                    className   =   "menubar-line bottom-bar" 
                />			
            </MenuBarToggleButton>
        );
    }; //end render()
}; //end NavBarToggle

export default NavBarToggle;