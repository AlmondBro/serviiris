import React from 'react';

import styled from 'styled-components';

const PageContainerStyled = styled('main')`
   /* Use ampserands for this to acquire precedence over the bootstrap components */
    /* display: flex;
    flex-direction: column;
    flex: 1; */
    
    display: flex;
    flex-direction: row;
    justify-content: center;

    background-color: #FFF308;
`;

const PageContainer = (props) => {
    return (
        <PageContainerStyled 
            fluid       =   { props.fluid } 
            id          = "app-container-styled"
            className   = "container-fluid"
        >
            { props.children } 
        </PageContainerStyled>
    ); //end return statement
}; //end AppContainer
 
export { PageContainer };
