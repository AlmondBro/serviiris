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
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* height: 100%; */
    /* margin: auto; */
    background-color: #5425BA;

    @media only screen and (max-width: 768px) {
        margin: 0;
    }
`;

const RightColumnContainer = styled('div')`
    width: 55%;
    height: auto;
    margin: 0 auto;
`;


const HomeIrisLogo = styled(IrisLogo)`
    width: ${ props => props.width ? props.width : "500px"};
    height: ${ props => props.height ? props.height : "500px"};
    color: ${ props => props.color ? props.color : "#7A40DB"};
`;

const WelcomeText = styled('h3')`
    color: #FFF308;
    font-size: 2.5em;
    font-weight: bold;

    @media only screen and (max-width: 768px) {
        text-align: center;
        margin-top: 25px;
    }
`;

const IrisHomeDescription = styled('p')`
    color: white;
    font-weight: bolder;

    margin-top: 30px;

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`;

const ContactInfoContainer = styled('address')`
    color: white;

    margin-top: 30px;

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`;

const ContactInfoEmail = styled('a')`
    display: block;
    color: white;
    text-decoration: none;

    :hover {
        color: white;
        text-decoration: underline;
    }
`; //end ContactInfoEmail

const ContactInfoPhone = styled(ContactInfoEmail)`
`;

const PromotionesContainerAddress = styled('address')`
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

export { HomePageContainer, LeftColumn, RightColumn, RightColumnContainer, HomeIrisLogo, WelcomeText, IrisHomeDescription, ContactInfoContainer, ContactInfoEmail, ContactInfoPhone, PromotionesContainerAddress, PromotionsTitle, EmailSubscribeContainer, EmailSubscribeInput, EmailSubscribeButton };
