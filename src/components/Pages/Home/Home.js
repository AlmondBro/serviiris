import React from 'react';

//Import page styled components
import { HomePageContainer, LeftColumn, RightColumn, BackgroundVideoOverlay, BackgroundVideo, RightColumnContainer, HomeIrisLogo, WelcomeText, ContactInfoContainer, ContactInfoEmail, ContactInfoPhone, IrisHomeDescription, PromotionsContainerAddress, PromotionsTitle, EmailSubscribeContainer, EmailSubscribeInput, EmailSubscribeButton } from './HomeStyledComponents.js';

const Home = (props) => {
    return (
        <HomePageContainer className="row no-gutters home-page-container">
                <LeftColumn className="col-md-6 left-column" id="home-column-left">
                    <HomeIrisLogo 
                        color   =   "#7A40DB"
                        width   =   "400px"
                        height  =   "400px"  
                    />
                </LeftColumn>
                <RightColumn className="col-md-6 right-column" id="home-column-right">
                    <BackgroundVideoOverlay id="background-video-overlay"/>
                    <BackgroundVideo 
                        autoPlay
                        muted
                        loop
                        height="100%"
                        id="background-video"
                    > 
                        <source 
                            type    =   "video/mp4"
                            src     =   "./assets/video/cristo-rey-cali-timelapse.mp4" 
                            id="background-video-source"
                        />
                    </BackgroundVideo>
                    <RightColumnContainer id="right-column-container">
                        <WelcomeText id="welcome-text">Bienvenido a Iris</WelcomeText>
                            <IrisHomeDescription title="iris-home-description">
                                Somos un servicio de mensajería prestado exclusivamente por mujeres, 
                                en su mayoría cabeza de familia. Nos especializamos en brindar un 
                                servicio oportuno, amable y de calidad. 
                            </IrisHomeDescription>

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

                    <PromotionsContainerAddress id="promotions-container-address">
                        <PromotionsTitle id="promotions-title">
                            Promociones, novedades y más...
                        </PromotionsTitle>

                        <EmailSubscribeContainer id="email-subscribe-container">
                            <EmailSubscribeInput 
                                id          =   "email-subscribe-input"
                                type        =   "text" 
                                placeholder =   "Ingresa tu e-mail"
                            />
                            <label>
                                <EmailSubscribeButton id="email-subscribe-button">Enviar</EmailSubscribeButton>
                            </label>
                        </EmailSubscribeContainer>
                    </PromotionsContainerAddress>
   
                </RightColumn>
        </HomePageContainer>
     
    ); //end return
}; //end Home

export default Home;