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
                    {/* bgColor, title, faIcon, description, link,  */}
                    <ContactUsSectionCol 
                        bgColor     =   "white"
                        title       =   { "Centro de soluciones" }
                        faIcon      =   {  faPaperPlane }
                        description =   { "iristeamco@gmail.com"}
                        link        =   { "mailto:iristeamco@gmail.com"}
                    />
                      <ContactUsSectionCol 
                        bgColor     =   "red"
                        title       =   { "Comunícate al" }
                        faIcon      =   {  faPaperPlane }
                        description =   { "+57 (311) 718-4447"}
                        link        =   { "tel:+57 (315) 453-9422"}
                    />
                       <ContactUsSectionCol 
                        bgColor     =   "pink"
                        title       =   { "Siguenos en Instagram" }
                        faIcon      =   {  faPaperPlane }
                        description =   { "@iristeam.co"}
                        link        =   { "https://www.instagram.com/iristeam.co/?hl=es-la"}
                    />
                       <ContactUsSectionCol 
                        bgColor     =   "blue"
                        title       =   { "Encuentranos en Facebook" }
                        faIcon      =   {  faPaperPlane }
                        description =   { "Iris-Team"}
                        link        =   { "https://www.facebook.com/Iris-Team-103434521342003/"}
                    />
                       <ContactUsSectionCol 
                        bgColor     =   "green"
                        title       =   { "Escribenos en Whatsapp" }
                        faIcon      =   {  faPaperPlane }
                        description =   { "iristeamco@gmail.com"}
                        link        =   { "mailto:iristeamco@gmail.com"}
                    />
                </ContactUsSectionRow>
            </ContactUsSection>
        </ContactUsPageContainer>
    );  //end return statement
}; //end Conocenos() component

export default ContactUs;