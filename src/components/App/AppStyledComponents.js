import React from 'react';

import styled from 'styled-components';

import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let AppContainerStyled = styled('main')`
   /* Use ampserands for this to acquire precedence over the bootstrap components */
    display: flex;
    flex-direction: column;
    flex: 1;
    /* padding-left: 0px;
    padding-right: 0px; */
`;

let AppContainerRow = styled('div')`
   /* Use ampserands for this to acquire precedence over the bootstrap components */
    flex: 1;
`;

let AppContainerCol = styled('div')`
    /* Use ampserands for this to acquire precedence over the bootstrap components */  
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const AppContainer = (props) => {
    return (
        <AppContainerStyled 
            fluid   =   { props.fluid } 
            id      = "app-container-styled"
            className = "container-fluid"
        >
            <AppContainerRow 
                id  = "app-container-row"
                className="row"
            > 
                <AppContainerCol 
                    id  = "app-container-col"
                    className="col"
                >
                    { props.children } 
                </AppContainerCol>
            </AppContainerRow>
            {/* { props.children } */}
        </AppContainerStyled>
    ); //end return statement
}; //end AppContainer
 
export { AppContainer };
