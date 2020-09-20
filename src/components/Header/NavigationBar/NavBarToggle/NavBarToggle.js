import React, { Component , Fragment } from 'react';

import { isiOS } from './../../../../utilities/utility-functions.js';

//Import styled components
import { InputCheckboxHack, MenuBarToggleButtonLabel, MenuBarToggleButton, MenuBarLine, TopMenuBarLine, MiddleMenuBarLine, BottomMenuBarLine } from './NavBarToggleStyledComponents.js';

class NavBarToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
            isiOS: false
        }; //end this.state
    }
    
    navBarToggleID = this.props.navBarToggleID;
    navToggle = document.getElementById(this.navBarToggleID);

    toggleNavBarButton = () => {
        const currentState = this.state.collapsed;
        this.setState({ collapsed: !currentState});

        // let NavBarCollapse = document.getElementById("basic-navbar-nav");
        //     NavBarCollapse.classList.toggle("show");
    }; //end toggleClass2

    componentDidMount = () => {
        const iOS = isiOS();

        this.setState({  isiOS  :  iOS});
    };

    render = () => {
        return ( 
            <Fragment>
                <InputCheckboxHack 
                    type    =   "checkbox" 
                    id      =   "input-checkbox-hack"
                    name    =   "input-checkbox-hack"
                />

                {/* <MenuBarToggleButtonLabel
                    htmlFor = "input-checkbox-hack"
                >
                    <button 
                        htmlFor = "input-checkbox-hack"

                    >
                        Testtt
                    </button>
                </MenuBarToggleButtonLabel> */}

                <MenuBarToggleButtonLabel
                    htmlFor = "input-checkbox-hack"
                >
                    <MenuBarToggleButton 
                        aria-controls   =   "basic-navbar-nav" 
                        aris-role       =   "button"
                        aria-label      =   "Toggle navigation" 
                        type            =   "button" 
                        className       =   { "navbar-toggler "  
                                                + ( this.state.collapsed ? "collapsed" : "") 
                                            } 
                        id              =   { this.props.navBarToggleID }

                        onClick         =   { this.toggleNavBarButton }

                        isOS            =   { this.state.isiOS }
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
                </MenuBarToggleButtonLabel>
            </Fragment>
        ); //end return
    }; //end render()
}; //end NavBarToggle

export default NavBarToggle;