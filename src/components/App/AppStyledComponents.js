import React from 'react';

import styled from 'styled-components';

const PageContainerStyled = styled('main')`
    display: flex;
    flex-direction: row;
    justify-content: center;

    background-color: #FFF308; 
    /* transparent;  */
    /* #FFF308; */

    @media only screen and (max-width: 765px) {
        margin-top: 45px;
    }
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
