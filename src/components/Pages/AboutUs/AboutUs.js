import React from 'react';

import { AboutUsPageContainer, OurHistorySection, IrisWorkerFemaleSVG, OurHistoryArticle, WhoWeAreSection, WhoWeAreArticle  } from './AboutUs_StyledComponents.js';

const AboutUs = (props) => {
    return (
        <AboutUsPageContainer id="about-us-page-container">
            <OurHistorySection className="row our-history-section" id="our-history-section">
                <OurHistoryArticle id="our-history-section">
                    <h3 id="our-history-section-title">Nuestra Historia...</h3>
                    <p className="our-history-section-description"> 
                        Un miércoles, 18 de Marzo del 2020 nace como un emprendimiento y, a su 
                        vez, un anhelo de dos jóvenes universitarios llenos de amor y energía 
                        que durante el confinamiento obligatorio se lanzan a hacer realidad un 
                        proyecto de mensajería.
                    </p>
                    <p className="our-history-section-description">
                        En la búsqueda de un nombre para nuestra empresa nos encontramos en la 
                        mitología griega a Iris quien fue escogida como la Diosa de la mensajería
                         por su capacidad de desplazarse a la velocidad del viento. Era una de 
                         las encargadas de entregarles los mensajes de los dioses a los humanos 
                         y viceversa. De allí nuestro nombre.
                    </p>
                    <IrisWorkerFemaleSVG src="./assets/img/iris-worker-female.svg" id="iris-worker-female-svg" />
                </OurHistoryArticle>
            </OurHistorySection>
            
            <WhoWeAreSection className="row" id="who-we-are-section">
                <WhoWeAreArticle id="who-we-are-section">
                    <h3 id="who-we-are-title">¿Quiénes somos?</h3>
                    <p className="who-we-are-section-description"> 
                        Nacemos queriendo suplir las necesidades del cliente de una forma diferente, 
                        buscando generar equidad de género en un trabajo que en la actualidad es 
                        prestado en su mayoría por hombres. Cada que nos escoges para un 
                        servicio, estás apoyando a una mujer cabeza de familia y aportando a 
                        una iniciativa con responsabilidad social.
                    </p>
                 
                </WhoWeAreArticle>
            </WhoWeAreSection>
        </AboutUsPageContainer>
    );  //end return statement
}; //end Conocenos() component

export default AboutUs;