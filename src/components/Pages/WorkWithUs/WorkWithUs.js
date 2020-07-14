import React from 'react';

//Import page styled components
import { WorkWithUsPageContainer, LeftColumn, LeftColumnHeader, WorkWithUsLink, WorkWithUsLinkButton, IrisIntroVideo, RightColumn, RightColumnContainer, WorkWithUsIrisLogoWings, WelcomeText, ContactInfoContainer, ContactInfoEmail, ContactInfoPhone, IrisWorkWithUsDescription, IrisWorkWithUsDescriptionEmoji, PromotionesContainerAddress, PromotionsTitle, EmailSubscribeContainer, EmailSubscribeInput, EmailSubscribeButton } from './WorkWithUs_StyledComponents.js';

const WorkWithUs = (props) => {
    // col-xs-12 col-sm-6 col-md-6 left-column
    return (
        <WorkWithUsPageContainer className="row no-gutters WorkWithUs-page-container">
            <LeftColumn className="col-xs-12 col-sm-6 col-md-6" id="WorkWithUs-column-left">
                    {/* <WorkWithUsIrisLogoWings 
                        color   =   "#FFF308"
                        width   =   "400px"
                        height  =   "400px"  
                    /> */}
                    {/* <LeftColumnHeader id="left-column-header">
                        Únete a Iris
                    </LeftColumnHeader> */}

                    <IrisIntroVideo 
                        controls
                    > 
                        <source 
                            type    =   "video/mp4"
                            src     =   "./assets/video/iris-intro-video-1080p.mp4" 
                        />
                    </IrisIntroVideo>

                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/uIHi3wIHr38?start=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                    {/* <img src="./assets/img/gourmet-food.webp"/> */}
                </LeftColumn>
                <RightColumn className="col-xs-12 col-sm-6 col-md-6" id="WorkWithUs-column-right">
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
                 <WorkWithUsLink 
                                id      =   "work-with-us-link"
                                href    =   "#"
                            >
                                <WorkWithUsLinkButton id="work-with-us-button">Aplicar</WorkWithUsLinkButton>
                            </WorkWithUsLink>
                </RightColumn>
            {/* <WorkWithUsSection className="row work-with-us-section" id="work-with-us-section">
                
            </WorkWithUsSection> */}
        </WorkWithUsPageContainer>
     
    ); //end return
}; //end WorkWithUs

export default WorkWithUs;