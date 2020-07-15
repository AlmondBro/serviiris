import React from 'react';
import styled from 'styled-components';
import { IrisLogoWings } from './../../IrisLogo.js';
/* 
    .bg-iris-yellow {
        background-color: #FFF308;
    }

    .bg-iris-purple {
        background-color: #5425BA;
    }
*/

const SpecialtiesPageContainer = styled('div')`
    position: auto;
    min-width: 100%;

    margin: auto;

    display: flex;
    flex-direction: row;
    justify-content: center;

    ::after {
        content: "";

        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        z-index: 0;
  
        background-image: url("./assets/img/couple-opening-package.webp");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        opacity: 0.1;
        max-width: 100%;
        min-height: 100%;
        overflow-y: hidden;
        width: 100%;

        margin: 0 auto;
      
    }

`;

const SpecialtiesArticle = styled('article')`
    position:  relative;
    z-index: 1;
    
    margin: 1% 0.4%;
    margin-bottom: 5px;
    padding: 3% 1%;
    padding-top: 0%;

    background-color: white;
    /* rgba(84,37,186,1); */

    border-radius: 12px;

    color: white;

    overflow-y:  hidden;

    p {
        color: #5425BA;
        text-align: center;
        margin: auto;
        font-size: 1.1em;
        padding: 0% 10%;
    }        


`;

const SpecialtiesArticleImageContainerFigure = styled('figure')`
    position: relative;
    margin: 0;
    padding: 0;

    width: 100%;
    max-height: 40%;

    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
`;

const SpecialtiesArticleImageContainerFigureImage = styled('img')`
    height: 100%;
    width: 100%;

    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
`;

const SpecialtiesArticleButton = styled('label')`
    /* color: white; */
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    font-style: italic;

    background-color: #5425BA;
    color: white;
        
    border: 1px solid #5425BA;
    border-radius: 12px;

    max-width: 80%;

    padding: 5px 15px;
    margin: 0 auto;

    transition: color 500ms, background-color 500ms, border-color 500ms;

    :hover, :active, :visited {
        /* color: #5425BA; */
        background-color: #5425BA;

        border: 1px solid #5425BA;
    } 
    a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        font-style: italic;
        transition: color 500ms, background-color 500ms, border-color 500ms;
    }

    a:hover {
        color: #5425BA;
    }
`;

const SpecialtiesArticleTitle = styled('h3')`
    margin-top: 25%;

    color: #5425BA;

    font-weight: bold;
    font-size: 1.5em;
    text-align: center;
`;

const SpecialtiesArticleTitleBorderHR = styled('hr')`
    color: black;
    background-color: #5425BA;
    width: 50%;

    margin-top: 0.35rem;
    margin-bottom: 0.35rem;
`;


let SpecialtiesArticleIrisWings = styled(IrisLogoWings)`
    position: absolute;
    top: 91%;
    left: 50%;
    width: 200px;
    height: 200px;
    color: #7A40DB;
    transform: translateX(-50%);

    width: ${ props => props.width ? props.width : "200px"};
    height: ${ props => props.height ? props.height : "200px"};
    color: ${ props => props.color ? props.color : "#7A40DB"};
`;

const SpecialtiesArticleColumn = (props) => {
    return (
        <SpecialtiesArticle 
            className   =   "col-xs-12 col-sm-5 col-md-5 col-lg specialties-article" 
            id          =   {props.id}
        >
            <SpecialtiesArticleImageContainerFigure className="specialties-article-image-container-figure">
                <SpecialtiesArticleImageContainerFigureImage 
                    className   =   "specialties-article-image-container-figure-image"
                    alt         =   { props.imageAlt }
                    src         =   {`./assets/img/${props.image || "phone-computer-paper-work.webp"}`}
                />
                <SpecialtiesArticleButton className="specialties-article-button">
                    {props.buttonTitle || "Mensajería Empresarial"}
                </SpecialtiesArticleButton>
            </SpecialtiesArticleImageContainerFigure>

            <SpecialtiesArticleTitle className="specialties-article-title">
                { props.title || "Trámites empresariales"}
            </SpecialtiesArticleTitle>
            <SpecialtiesArticleTitleBorderHR className="specialties-article-title-border-hr"/>
            <p> 
                { 
                    props.description || 
                    `   
                        Consignaciones bancarias, radicación de facturas, comprobantes, 
                        entregas de paquetes y más.
                    `
                }
            </p>
            <SpecialtiesArticleIrisWings/>
        </SpecialtiesArticle>
    ); //end return statement
};
 
export { SpecialtiesPageContainer, SpecialtiesArticleColumn };