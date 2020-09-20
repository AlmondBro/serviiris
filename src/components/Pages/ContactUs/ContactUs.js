import React from 'react';

import { faPaperPlane, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { ContactUsPageContainer, ContactUsSection, ContactUsSectionHeader, ContactUsSectionRow, ContactUsSectionCol, ContactUsArticleTitleBorderHR } from './ContactUs_StyledComponents.js';

// red: rgb(226, 28, 33)

const ContactUs = (props) => {
    return (
        <ContactUsPageContainer id="row no-gutters ContactUs-page-container">
            <ContactUsSection className="col-12 p-0 ContactUs-section" id="ContactUs-section">
                <ContactUsSectionHeader>
                    <h3>Contáctanos</h3>
                    <h4>Queremos saber de ti</h4>
                    <ContactUsArticleTitleBorderHR/>
                </ContactUsSectionHeader>

                <ContactUsSectionRow className="row no-gutters">
                    {/* bgColor, title, faIcon, description, link,  */}
                    <ContactUsSectionCol 
                        bgColor     =   "rgba(255, 255, 255, 0.7)"
                        title       =   { "Centro de soluciones" }
                        faIcon      =   {  faPaperPlane }
                        description =   { "iristeamco@gmail.com"}
                        link        =   { "mailto:iristeamco@gmail.com"}
                    />
                      <ContactUsSectionCol 
                        bgColor     =   "rgba(255, 0, 0, 0.7)"
                        title       =   { "Comunícate al" }
                        faIcon      =   {  faPhoneVolume }
                        description =   { "+57 (311) 718-4447"}
                        link        =   { "tel:+57 (315) 453-9422"}
                    />
                       <ContactUsSectionCol 
                        bgColor     =   "rgba(255, 192, 203, 0.7)"
                        title       =   { "Siguenos en Instagram" }
                        faIcon      =   {  faInstagram }
                        description =   { "@iristeam.co"}
                        link        =   { "https://www.instagram.com/iristeam.co/?hl=es-la"}
                    />
                       <ContactUsSectionCol 
                        bgColor     =   "rgba(24, 119, 224, 0.7)"
                        title       =   { "Encuentranos en Facebook" }
                        faIcon      =   {  faFacebook }
                        description =   { "Iris-Team"}
                        link        =   { "https://facebook.com/Iris-team-110184504117886/"}
                    />
                    <ContactUsSectionCol 
                        bgColor     =   "rgba(1, 230, 117, 0.7)"
                        title       =   { "Escribenos en Whatsapp" }
                        faIcon      =   {  faWhatsapp }
                        description =   { "iristeamco@gmail.com"}
                        link        =   { "mailto:iristeamco@gmail.com"}
                    />
                </ContactUsSectionRow>
            </ContactUsSection>
        </ContactUsPageContainer>
    );  //end return statement
}; //end Conocenos() component

export default ContactUs;