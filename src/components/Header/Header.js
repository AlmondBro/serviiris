import React, { Component, Fragment } from 'react';

//import styled components
import { NavigationBar } from './HeaderStyledComponents.js';

let Header = (props) => {
    return (
        <Fragment>
            <NavigationBar/>
        </Fragment>
    ); //end return statement
}; //end Header()

export default Header;