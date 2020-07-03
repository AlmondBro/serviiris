import React from 'react';

import { AboutUsPageContainer } from './AboutUs_StyledComponents.js';

const AboutUs = (props) => {
    return (
        <AboutUsPageContainer id="about-us-page-container">
            <div className="row">Row1</div>
            <div className="row">Row2</div>
        </AboutUsPageContainer>
    );  //end return statement
}; //end Conocenos() component

export default AboutUs;