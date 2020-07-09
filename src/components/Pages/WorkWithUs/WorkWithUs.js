import React from 'react';

//Import page styled components
import { WorkWithUsPageContainer, WorkWithUsSection, LeftColumn, LeftColumnHeader, RightColumn, RightColumnContainer, WorkWithUsIrisLogo, WelcomeText, ContactInfoContainer, ContactInfoEmail, ContactInfoPhone, IrisWorkWithUsDescription, IrisWorkWithUsDescriptionEmoji, PromotionesContainerAddress, PromotionsTitle, EmailSubscribeContainer, EmailSubscribeInput, EmailSubscribeButton } from './WorkWithUs_StyledComponents.js';

const WorkWithUs = (props) => {
    return (
        <WorkWithUsPageContainer className="WorkWithUs-page-container">
            <WorkWithUsSection className="row work-with-us-section" id="work-with-us-section">
                <LeftColumn className="col-md-6 left-column" id="WorkWithUs-column-left">
                    {/* <WorkWithUsIrisLogo 
                        color   =   "#7A40DB"
                        width   =   "400px"
                        height  =   "400px"  
                    /> */}
                    <LeftColumnHeader id="left-column-header">
                        SÉ UNA IRIS
                    </LeftColumnHeader>
                </LeftColumn>
                <RightColumn className="col-md-6 right-column" id="WorkWithUs-column-right">
                    <RightColumnContainer id="right-column-container">
                        <WelcomeText id="welcome-text">Trabaja Con Nosotros</WelcomeText>
                            <IrisWorkWithUsDescription className="iris-WorkWithUs-description">
                                <IrisWorkWithUsDescriptionEmoji>🛵</IrisWorkWithUsDescriptionEmoji>   
                                Trabaja Con Nosotros! Somos una empresa de mensajeria 
                            </IrisWorkWithUsDescription>
                            <IrisWorkWithUsDescription className="iris-WorkWithUs-description">
                                <IrisWorkWithUsDescriptionEmoji>💜</IrisWorkWithUsDescriptionEmoji>  
                                Te simplificamos la vida 
                            </IrisWorkWithUsDescription>
                            <IrisWorkWithUsDescription className="iris-WorkWithUs-description">
                                <IrisWorkWithUsDescriptionEmoji>👩🏼</IrisWorkWithUsDescriptionEmoji>
                                Todas nuestras mensajeras son mujeres 
                            </IrisWorkWithUsDescription>

                            <ContactInfoContainer id="contact-info-container">
                                <ContactInfoEmail
                                    href    =   "mailto:iristeamco@gmail.com"
                                    id      =   "contact-info-email"
                                >
                                    iristeamco@gmail.com
                                </ContactInfoEmail>
                                <ContactInfoPhone 
                                    href    =   "https://wa.link/aloo0e"
                                    id      =   "contact-info-phone"
                                >
                                    +57 (311) 718-4447
                                </ContactInfoPhone>
                            </ContactInfoContainer>
                    </RightColumnContainer>

                    {/* <PromotionesContainerAddress id="promotions-container-address">
                        <PromotionsTitle id="promotions-title">
                            Promociones, novedades y más...
                        </PromotionsTitle>

                        <EmailSubscribeContainer id="email-subscribe-container">
                            <EmailSubscribeInput 
                                type        =   "text" 
                                placeholder =   "Ingresa tu e-mail"
                            />
                            <label>
                                <EmailSubscribeButton>Enviar</EmailSubscribeButton>
                            </label>
                        </EmailSubscribeContainer>
                    </PromotionesContainerAddress> */}
   
                </RightColumn>
            </WorkWithUsSection>
        </WorkWithUsPageContainer>
     
    ); //end return
}; //end WorkWithUs

export default WorkWithUs;