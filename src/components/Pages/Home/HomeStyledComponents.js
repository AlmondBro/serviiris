import styled from 'styled-components';

import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { IrisLogo } from './../../IrisLogo.js';

/* 
    .bg-iris-yellow {
        background-color: #FFF308;
    }

    .bg-iris-purple {
        background-color: #5425BA;
    }
*/

const HomePageContainer = styled('section')`
    /* margin: 0; */
    /* height: auto; */
    min-height: 100%;
    min-width: 100%;
`;

const LeftColumn = styled("div")`
    /* min-height: 81vh; */
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #FFF308;

       /* #home-column-left { */
        @media only screen and (max-width: 768px) {
            margin-top: 25px;
            margin-bottom: -80px;
        }
       /* } */
  
`;

const RightColumn = styled(LeftColumn)`
    position: relative;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    /* height: 100%; */
    /* margin: auto; */
    background-color: #5425BA;

    ::after {
        content: "";
        display: none;
        position: absolute;
        z-index: 0;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        z-index: 0;
  
        background-image: url("./assets/img/iris-girl-with-box.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: -110px 0px;
        background-repeat: no-repeat;

        opacity: 0.1;
        max-width: 100%;
        min-height: 100%;
        overflow-y: hidden;
        width: 100%;

        margin: 0 auto;
    }

    @media only screen and (max-width: 768px) {
        margin: 0;
    }
`;

const BackgroundVideoOverlay = styled('div')`
    display: block;

    position:  fixed;
    z-index: -1;
/* 
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%); */

    min-width: 50%;
    min-height: 100%;
    width: 50%;
    height: auto;

    object-fit: fill;
    
    background-color: #5425BA;
    opacity: 0.7;

    @media (max-width: 767px) {
        display: none;
    }
`;

const BackgroundVideo = styled('video').attrs(props => ({
    autoplay    :   props.autoplay,
    muted       :   props.muted,
    loop        :   props.loop
}))`
    display: block;

    position:  fixed;
    z-index: -2;
/* 
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%); */

    min-width: 50%;
    min-height: 100%;
    width: 50%;
    height: auto;

    object-fit: fill;

    @media (max-width: 767px) {
        display: none;
    }
`;

const RightColumnContainer = styled('div')`
    width: 55%;
    height: auto;
    margin: 0 auto;

    @media (max-width: 768px) {
        width:  90%;
    }
`;

const HomeIrisLogo = styled(IrisLogo)`
    width: ${ props => props.width ? props.width : "500px"};
    height: ${ props => props.height ? props.height : "500px"};
    color: ${ props => props.color ? props.color : "#7A40DB"};
`;

const WelcomeText = styled('h3')`
   position: relative;
    z-index: 1;

    color: #FFF308;
    font-size: 2.5em;
    font-weight: bold;

    @media only screen and (max-width: 768px) {
        text-align: center;
        margin-top: 25px;
    }
`;

const IrisHomeDescription = styled('p')`
    position: relative;
    z-index: 1;

    color: white;
    font-weight: bolder;

    margin-top: 30px;

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`;

const ContactInfoContainer = styled('address')`
    position: relative;
    z-index: 1;

    color: white;

    margin-top: 30px;

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`;

const ContactInfoEmail = styled('a')`
    position: relative;
    z-index: 1;

    display: block;
    color: white;
    text-decoration: none;

    :hover {
        color: white;
        text-decoration: underline;
    }
`; //end ContactInfoEmail

const ContactInfoPhone = styled(ContactInfoEmail)`
    position: relative;
    z-index: 1;
`;

const PromotionesContainerAddress = styled('address')`
    position: relative;
    z-index: 1;

    width: 60%;

    margin-top: 25px;

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`;

const PromotionsTitle = styled('h4')`
    font-size: 0.8em;
    color: white;
    text-transform: uppercase;

    @media only screen and (max-width: 311px) {
        text-align: center;
    }
`;
const EmailSubscribeContainer = styled('p')`
    @media only screen and (max-width: 311px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        width: 100%;
        border-radius: 12px;
    }
`;

const EmailSubscribeInput = styled('input')`
    background-color: rgba(255, 249, 132, 1);
    /* text-transform: uppercase; */
    font-size: 0.9em;
    padding: 12px;

    width: 80%;

    border: 0;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;

    :focus {
        border:  0;
        outline: 0;
    }
    

    @media only screen and (max-width: 1186px) {
        width: 65%;
    }

    @media only screen and (min-width: 312px) and (max-width: 593px) {
        width: 60%;
    }

    @media only screen and (max-width: 311px) {
        width: 100%;
        border-radius: 12px;
    }
`;

const EmailSubscribeButton = styled('button')`
    color: white;
    background-color: rgb(82, 38, 98);

    border: 0;
    padding: 12px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;

    @media only screen and (max-width: 311px) {
        width: 40%;
        
        margin: 0 auto;
        margin-top: 10px;
        text-align: center;

        border-radius: 12px;
    }
`;

export { HomePageContainer, LeftColumn, RightColumn, BackgroundVideoOverlay, BackgroundVideo, RightColumnContainer, HomeIrisLogo, WelcomeText, IrisHomeDescription, ContactInfoContainer, ContactInfoEmail, ContactInfoPhone, PromotionesContainerAddress, PromotionsTitle, EmailSubscribeContainer, EmailSubscribeInput, EmailSubscribeButton };
