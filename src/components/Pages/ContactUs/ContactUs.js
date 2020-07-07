import React from 'react';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


import { ContactUsPageContainer, ContactUsSection, ContactUsSectionHeader, ContactUsSectionRow, ContactUsSectionCol, FontAwesomeIconStyled } from './ContactUs_StyledComponents.js';

// red: rgb(226, 28, 33)

const ContactUs = (props) => {
    return (
        <ContactUsPageContainer id="row no-gutters ContactUs-page-container">
            <ContactUsSection className="col-12 p-0 ContactUs-section" id="ContactUs-section">
                    <ContactUsSectionHeader>
                        <h3>Contáctanos</h3>
                        <h4>Queremos saber de ti</h4>
                    </ContactUsSectionHeader>
                <ContactUsSectionRow className="row no-gutters">
                    <ContactUsSectionCol />
                    <ContactUsSectionCol />
                    <ContactUsSectionCol />
                    <ContactUsSectionCol />
                </ContactUsSectionRow>
                
            </ContactUsSection>
            
        </ContactUsPageContainer>
    );  //end return statement
}; //end Conocenos() component

export default ContactUs;