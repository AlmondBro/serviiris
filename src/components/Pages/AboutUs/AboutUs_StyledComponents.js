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
    background: transparent;
`;

const OurHistoryArticle = styled('article')`
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
const IrisWorkerFemaleSVG = styled('img')`
    position: absolute;
    top: 18%;
    left: 23.25%;
    /* 10%; */

    max-width: 100px;
`;

const WhoWeAreSection = styled('section')`
    background: green;
    height: auto;
`;


export { AboutUsPageContainer, OurHistorySection, IrisWorkerFemaleSVG, WhoWeAreSection, OurHistoryArticle };