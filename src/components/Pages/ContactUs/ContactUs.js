import React from 'react';

import { ContactUsPageContainer, ContactUsSection, ContactUsSectionRow, ContactUsSectionCol } from './ContactUs_StyledComponents.js';

// red: rgb(226, 28, 33)

const ContactUs = (props) => {
    return (
        <ContactUsPageContainer id="row no-gutters ContactUs-page-container">
            <ContactUsSection className="col-12 p-0 ContactUs-section" id="ContactUs-section">
                <ContactUsSectionRow className="row no-gutters">
                    <ContactUsSectionCol className="col-sm" bgColor="white">Hi</ContactUsSectionCol>
                    <ContactUsSectionCol className="col-sm" bgColor="red">Hi</ContactUsSectionCol>
                    <ContactUsSectionCol className="col-sm" bgColor="pink">Hi</ContactUsSectionCol>
                    <ContactUsSectionCol className="col-sm" bgColor="blue">Hi</ContactUsSectionCol>
                    <ContactUsSectionCol className="col-sm" bgColor="green">Hi</ContactUsSectionCol>
                </ContactUsSectionRow>
            </ContactUsSection>
            
        </ContactUsPageContainer>
    );  //end return statement
}; //end Conocenos() component

export default ContactUs;