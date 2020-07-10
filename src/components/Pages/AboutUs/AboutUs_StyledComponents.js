import styled from 'styled-components';

/* 
    .bg-iris-yellow {
        background-color: #FFF308;
    }

    .bg-iris-purple {
        background-color: #5425BA;
    }
*/

const AboutUsPageContainer = styled('section')`
    min-height: 100%;
    min-width: 100%;

    display: flex;
    flex-direction: column;

    & > * {
        flex-grow: 1;
    }

    @media only screen and (min-width: 765px) and (max-width: 768px) {
        margin-top: 30px;
    }
`; //end homepagecontainer

const OurHistorySection = styled('section')`
    position: relative;
    z-index: 0;
    background: #FFF308;

    ::after {
        content: "";

        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        z-index: 0;
  
        background-image: url("./assets/img/nyc-grey.webp");
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

const OurHistoryArticle = styled('article')`
    position:  relative;
    z-index: 1;

    margin: 1% 20%;
    padding: 3%;

    background-color: rgba(84,37,186,1);

    border-radius: 12px;

    color: white;

    h3 {
        color: #FFF308;

        text-align: center;

        margin: 0;
        margin-bottom: 15px;
        padding: 0;

        font-weight:  bold;
    }

    p {
        font-size: 1.1em;
        padding: 0% 20%;
    }        
`;

const AboutUSMoreButton = styled('button')`
    /* color: white; */
    background-color: #5425BA;
    border: 0;
    border-radius: 12px;

    max-width: 150px;

    padding: 5px 15px;
    margin: 0 auto;

    border: 1px solid #5425BA;

    transition: color 500ms, background-color 500ms, border-color 500ms;

    :hover, :active, :visited {
        /* color: #5425BA; */
        background-color: white;

        border: 1px solid #5425BA;
    } 
    a {
        color: white;
        text-decoration: none;

        transition: color 500ms, background-color 500ms, border-color 500ms;

    }

    a:hover {
        color: #5425BA;
    }
`;

// TODO: Add a chat bubble animation above the IrisWorkerFemaleSVG saying "Vamos iris!"
const IrisWorkerChatBubble = styled('figcaption')`
    position: absolute;
    background: white;
    border-radius: .4em;
    color: #5425BA;
    padding: 15px;
    z-index: 1;
    top: 6%;
    left: 8%;
    transform: rotate(5deg);

    max-width: 0px;
    max-height: 0px;
    visibility: hidden;
    
    transition-delay: 100ms;
    :after {
        content: '';
        position: absolute;
        bottom: 2px;
        left: 50%;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-top-color: white;
        border-bottom: 0;
        border-left: 0;
        margin-left: -10px;
        margin-bottom: -20px;
    }

    @media only screen and (min-width: 836px) and (max-width: 942px) {
        left: 2%;
    }

    @media only screen and (min-width: 200px) and (max-width: 376px) {
        top: 14%;
    }

    @media only screen and (min-width: 200px) and (max-width: 835px) {
        left: -30%;
    }

    @media only screen and (min-width: 600px) and (max-width: 835px) {
        top: 10%;
    }

    @media only screen and (min-width: 377px) and (max-width: 599px) {
        top: 12%;
    }

  
`;

const IrisWorkerFigure = styled('figure')`
    display: block;

    &:hover > ${IrisWorkerChatBubble} {
        visibility: visible;
        max-width: 110px;
        max-height:  63px;
    }

    @media only screen and (max-width: 337px) {
        display: none;
    }
`;

const IrisWorkerFemaleSVG = styled('img')`
    position: absolute;
    top: 18%;
    left: auto;
    /* 10%; */

    max-width: 100px;

    @media only screen and (min-width: 836px) and (max-width: 942px) {
        left: 2%;
    }

    @media only screen and (min-width: 200px) and (max-width: 835px) {
        left: -30%;
    }
`;

const WhoWeAreSection = styled(OurHistorySection)`
    background-color: #5425BA;
    
    :after {
        background-image: url("./assets/img/green-scooter.webp");
    }
`;

const WhoWeAreArticle = styled(OurHistoryArticle)`
    background-color: white;
    h3 {
        color: #5425BA;
    }

    p {
        color: #5425BA;
    }
`;


export { AboutUsPageContainer, OurHistorySection, OurHistoryArticle, IrisWorkerFigure, IrisWorkerFemaleSVG, WhoWeAreSection, WhoWeAreArticle, AboutUSMoreButton, IrisWorkerChatBubble };