import React, { Fragment } from 'react';

//import styled components
import { NavigationBar } from './NavigationBar/NavigationBar.js';

let Header = (props) => {
    return (
        <header>
            <NavigationBar navBarToggleID="navbar-toggle"/>
        </header>
    ); //end return statement
}; //end Header()

export default Header;