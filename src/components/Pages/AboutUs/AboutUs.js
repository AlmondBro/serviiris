import React from 'react';

import { AboutUsPageContainer, OurHistorySection, IrisWorkerFemaleSVG, OurHistoryArticle, WhoWeAreSection  } from './AboutUs_StyledComponents.js';

const AboutUs = (props) => {
    return (
        <AboutUsPageContainer id="about-us-page-container">
            <OurHistorySection className="row" id="our-history-section">
                <OurHistoryArticle>
                    <h3>Nuestra Historia...</h3>
                    <p>
                        Un miércoles, 18 de Marzo del 2020 nace como un emprendimiento y, a su 
                        vez, un anhelo de dos jóvenes universitarios llenos de amor y energía 
                        que durante el confinamiento obligatorio se lanzan a hacer realidad un 
                        proyecto de mensajería.
                    </p>
                    <p>
                        En la búsqueda de un nombre para nuestra empresa nos encontramos en la 
                        mitología griega a Iris quien fue escogida como la Diosa de la mensajería
                         por su capacidad de desplazarse a la velocidad del viento. Era una de 
                         las encargadas de entregarles los mensajes de los dioses a los humanos 
                         y viceversa. De allí nuestro nombre.
                    </p>
                    <IrisWorkerFemaleSVG src="./assets/img/iris-worker-female.svg"/>
                </OurHistoryArticle>
            </OurHistorySection>
            <WhoWeAreSection className="row" id="who-we-are-section">Row2</WhoWeAreSection>
        </AboutUsPageContainer>
    );  //end return statement
}; //end Conocenos() component

export default AboutUs;