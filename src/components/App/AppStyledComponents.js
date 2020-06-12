import React from 'react';

import styled from 'styled-components';

import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

let AppContainerStyled = styled(Container)`
   /* Use ampserands for this to acquire precedence over the bootstrap components */
   &&& {
    display: flex;
    flex-direction: column;
    flex: 1;
   }
`;

let AppContainerRow = styled(Row)`
   /* Use ampserands for this to acquire precedence over the bootstrap components */
   &&& {
    flex: 1;
   }
`;

let AppContainerCol = styled(Col)`
    /* Use ampserands for this to acquire precedence over the bootstrap components */
    &&& {    
        display: flex;
        flex-direction: column;
    }
`;

const AppContainer = (props) => {
    return (
        <AppContainerStyled fluid={ props.fluid } className="app-container">
           { props.children }
        </AppContainerStyled>
    ); //end return statement
}; //end AppContainer
 
export { AppContainer };
