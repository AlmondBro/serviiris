import React from 'react';

import styled from 'styled-components';

const PageContainerStyled = styled('main')`
    display: flex;
    flex-direction: row;
    justify-content: center;

    background-color: #FFF308; 
    /* transparent;  */
    /* #FFF308; */

    padding-left: 0; /* equivalent to the use of p-0 for bootstrap */
    padding-right: 0; /* equivalent to the use of p-0 for bootstrap */

    @media only screen and (max-width: 765px) {
        margin-top: 45px;
    }
`;

const PageContainer = (props) => {
    return (
        <PageContainerStyled 
            fluid       =   { props.fluid } 
            id          = "page-container-styled"
            className   = "container-fluid"
        >
            { props.children } 
        </PageContainerStyled>
    ); //end return statement
}; //end AppContainer
 
export { PageContainer };
