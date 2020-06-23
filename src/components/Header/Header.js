import React, { Fragment } from 'react';

//import styled components
import { NavigationBar } from './NavigationBar/NavigationBar.js';

let Header = (props) => {
    return (
        <Fragment>
            <NavigationBar navBarToggleID="navbar-toggle"/>
        </Fragment>
    ); //end return statement
}; //end Header()

export default Header;