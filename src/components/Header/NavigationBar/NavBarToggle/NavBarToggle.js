import React, { Component } from 'react';

//Import styled components
import { MenuBarLine, TopMenuBarLine, MiddleMenuBarLine } from './NavBarToggleStyledComponents.js'
class NavBarToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        }; //end this.state
    }
    
    navToggle = document.getElementById("navbarToggle");

    toggleClass = (navToggle) => {
        console.log("toggleClass");
      //  let navToggle = document.querySelector(".navbar-toggler");

        if (navToggle.classList.contains("collapsed")) {
            console.log("if");
            navToggle.classList.add("collapsed");
        } else {
            console.log("else");
            navToggle.classList.remove("collapsed")
        }
        
    }; //end toggleClass()

    toggleClass2 = () => {
        const currentState = this.state.collapsed;
        this.setState({ collapsed: !currentState});

        // let NavBarCollapse = document.getElementById("basic-navbar-nav");
        //     NavBarCollapse.classList.toggle("show");
    }; //end toggleClass2

    /*
    navToggle.addEventListener("click", function() {
        let navToggle = document.querySelector(".navbar-toggler");
        toggleClass(navToggle);
    }); */
    render = () => {
        return ( 
            <button 
                    aria-controls   =   "basic-navbar-nav" 
                    type            =   "button" 
                    aria-label      =   "Toggle navigation" 
                    className       =   { "navbar-toggler "  
                                            + ( this.state.collapsed ? "collapsed" : "") 
                                        } 
                    id              =   "navbarToggle"
                    onClick         =   { this.toggleClass2 }
            >
                <TopMenuBarLine 
                    collapsed   =   {   this.state.collapsed}
                    className   =   "menubar-line top-bar" 
                />
                <MiddleMenuBarLine 
                    collapsed   =   {   this.state.collapsed}
                    className   =   "menubar-line middle-bar" 
                />
                <MenuBarLine className="menubar-line bottom-bar"></MenuBarLine>				
            </button>
        );
    }; //end render()
    
}; //end NavBarToggle

NavBarToggle.onClick = (event) => {
    console.log("Test");
}

export default NavBarToggle;