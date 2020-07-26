import React from 'react';

import { AboutUsPageContainer, OurHistorySection, OurHistoryArticle, AboutUsSectionTitle, AboutUsSectionDescription, IrisWorkerFigure, IrisWorkerFemaleSVG, WhoWeAreSection, WhoWeAreArticle, AboutUSMoreLink, AboutUSMoreButton, IrisWorkerChatBubble  } from './AboutUs_StyledComponents.js';

const AboutUs = (props) => {
    return (
        <AboutUsPageContainer className="row no-gutters" id="about-us-page-container">
            <OurHistorySection className="col-md-12 our-history-section" id="our-history-section">
                <OurHistoryArticle id="our-history-section">
                    <AboutUsSectionTitle id="our-history-section-title">Nuestra Historia...</AboutUsSectionTitle>
                    <AboutUsSectionDescription id="our-history-section-description"> 
                        Un miércoles, 18 de Marzo del 2020 nace como un emprendimiento y, a su 
                        vez, un anhelo de dos jóvenes universitarios llenos de amor y energía 
                        que durante el confinamiento obligatorio se lanzan a hacer realidad un 
                        proyecto de mensajería.
                    </AboutUsSectionDescription>
                    <AboutUsSectionDescription id="our-history-section-description">
                        En la búsqueda de un nombre para nuestra empresa nos encontramos en la 
                        mitología griega a Iris quien fue escogida como la Diosa de la mensajería
                         por su capacidad de desplazarse a la velocidad del viento. Era una de 
                         las encargadas de entregarles los mensajes de los dioses a los humanos 
                         y viceversa. De allí nuestro nombre.
                    </AboutUsSectionDescription>
                    <IrisWorkerFigure  className="iris-worker-female">
                        <IrisWorkerChatBubble id="iris-worker-female-speech-bubble">
                            Vamos Iris!
                        </IrisWorkerChatBubble>
                        <IrisWorkerFemaleSVG src="./assets/img/iris-worker-female.svg" id="iris-worker-female-svg" />
                    </IrisWorkerFigure>
                </OurHistoryArticle>
            </OurHistorySection>
            
            <WhoWeAreSection className="col-md-12" id="who-we-are-section">
                <WhoWeAreArticle id="who-we-are-section">
                    <AboutUsSectionTitle id="who-we-are-title">¿Quiénes somos?</AboutUsSectionTitle>
                    <AboutUsSectionDescription id="who-we-are-section-description"> 
                        Nacemos queriendo suplir las necesidades del cliente de una forma diferente, 
                        buscando generar equidad de género en un trabajo que en la actualidad es 
                        prestado en su mayoría por hombres. Cada que nos escoges para un 
                        servicio, estás apoyando a una mujer cabeza de familia y aportando a 
                        una iniciativa con responsabilidad social.
                    </AboutUsSectionDescription>
                    <AboutUSMoreLink href="#"> 
                        <AboutUSMoreButton id="about-us-more-button">
                            Conoce Mas
                        </AboutUSMoreButton>
                    </AboutUSMoreLink>
                </WhoWeAreArticle>
            </WhoWeAreSection>
        </AboutUsPageContainer>
    );  //end return statement
}; //end Conocenos() component

export default AboutUs;