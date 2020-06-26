import React from 'react';

import { HomePageContainer, LeftColumn, RightColumn, HomeIrisLogo } from './HomeStyledComponents.js';

const Home = (props) => {
    return (
        <HomePageContainer className="row home-page-container">
                <LeftColumn className="col-md-6 left-column">
                    <HomeIrisLogo 
                        color   =   "#7A40DB"
                        width   =   "400px"
                        height  =   "400px"  
                    />
                </LeftColumn>
                <RightColumn className="col-md-6 right-column">
                    Right
                </RightColumn>
        </HomePageContainer>
     
    ); //end return
}; //end Home

export default Home;