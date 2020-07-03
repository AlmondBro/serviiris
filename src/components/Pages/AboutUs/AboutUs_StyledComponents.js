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
`; //end homepagecontainer

const OurHistorySection = styled('section')`
    background: #FFF308;

    ::after {
        content: "";

        position: absolute;
        top: 0px;
        bottom: 0px;
        left: 0;
        right: 0;
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

// TODO: Add a chat bubble animation above the IrisWorkerFemaleSVG saying "Vamos iris!"
const IrisWorkerFemaleSVG = styled('img')`
    position: absolute;
    top: 18%;
    left: auto;
    /* 10%; */

    max-width: 100px;
`;

const WhoWeAreSection = styled(OurHistorySection)`
    background-color: white;
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


export { AboutUsPageContainer, OurHistorySection, OurHistoryArticle, IrisWorkerFemaleSVG, WhoWeAreSection, WhoWeAreArticle };