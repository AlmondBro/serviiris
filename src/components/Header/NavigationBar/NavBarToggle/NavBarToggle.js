import React, { Fragment, useState } from 'react';

//Import styled components
import { InputCheckboxHack, MenuBarToggleButtonLabel, MenuBarToggleButton, MenuBarLine, TopMenuBarLine, MiddleMenuBarLine, BottomMenuBarLine } from './NavBarToggleStyledComponents.js';

const NavBarToggle = ({ navBarToggleID,  ...props } ) =>  {
    let [ isCollapsed, setIsCollapsed ] = useState(true);

    const toggleNavBarButton = () => {
        setIsCollapsed(!isCollapsed);
    }; //end toggleNavBarButton()

    return ( 
        <Fragment>
            <InputCheckboxHack 
                type    =   "checkbox" 
                id      =   "input-checkbox-hack"
                name    =   "input-checkbox-hack"
            />

            <MenuBarToggleButtonLabel
                htmlFor = "input-checkbox-hack"
            >
                <MenuBarToggleButton 
                    aria-controls   =   "basic-navbar-nav" 
                    aris-role       =   "button"
                    aria-label      =   "Toggle navigation" 
                    type            =   "button" 
                    className       =   { "navbar-toggler "  
                                            + ( isCollapsed ? "collapsed" : "") 
                                        } 
                    id              =   { navBarToggleID }

                    onClick         =   { toggleNavBarButton }
                >
                    <TopMenuBarLine 
                        collapsed   =   {  isCollapsed }
                        className   =   "menubar-line top-bar" 
                    />
                    <MiddleMenuBarLine 
                        collapsed   =   {   isCollapsed }
                        className   =   "menubar-line middle-bar" 
                    />
                    <BottomMenuBarLine 
                        collapsed   =   { isCollapsed }
                        className   =   "menubar-line bottom-bar" 
                    />			
                </MenuBarToggleButton>
            </MenuBarToggleButtonLabel>
        </Fragment>
    ); //end return
}; //end NavBarToggle


export default NavBarToggle;