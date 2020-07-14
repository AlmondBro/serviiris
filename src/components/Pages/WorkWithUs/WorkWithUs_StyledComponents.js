import styled from 'styled-components';

import { IrisLogo, IrisLogoWings } from './../../IrisLogo.js';

/* 
    .bg-iris-yellow {
        background-color: #FFF308;
    }

    .bg-iris-purple {
        background-color: #5425BA;
    }
*/

/*
.curve-inverted::before {
	content: "";
	position: absolute;
	left: 0;
	z-index: 4;
	display: block;
	padding-top: 2.2222222222%;
	width: 100%;
	background-color: inherit;
	-webkit-mask-size: 100% 100%;
	mask-size: 100% 100%;
	-webkit-mask-repeat: no-repeat;
	mask-repeat: no-repeat;
	-webkit-mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 91' preserveAspectRatio='none'%3E%3Cpath fill='%23FC5959' fill-rule='evenodd' d='M1440 90v1H0v-1C385.36 35.271 772.02 5.388 1157.758 0h254.653c9.197.129 18.394.27 27.589.427V90z'/%3E%3C/svg%3E");
	mask-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 91' preserveAspectRatio='none'%3E%3Cpath fill='%23FC5959' fill-rule='evenodd' d='M1440 90v1H0v-1C385.36 35.271 772.02 5.388 1157.758 0h254.653c9.197.129 18.394.27 27.589.427V90z'/%3E%3C/svg%3E");
	bottom: 100%;
	transform: translateY(1px);
	background-color: red;
}
*/

const WorkWithUsPageContainer = styled('section')`
    /* min-height: 100%;
    min-width: 100%; */

    position: relative;
    z-index: 1;
    min-height: 100%;
    min-width: 100%;

    display: flex;
    flex-direction: row;

    & > * {
        flex-grow: 1;
    }

    @media only screen and (min-width: 765px) and (max-width: 768px) {
        margin-top: 30px;
    } 
`;


const WorkWithUsSection = styled('section')`
    position: relative;
    z-index: 1;
    background: #FFF308;

    /* ::after {
        content: "";

        position: absolute;
        z-index: 0;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        z-index: 0;
  
        background-image: url("./assets/img/people-group-socializing-table.webp");
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
    } */
`;

const LeftColumn = styled('div')`
    position: relative;
    z-index: 1;
    /* min-height: 81vh; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    background-color: #542595;
    /* #5425BA; */

    ::after {
        content: "";
        visibility: visible;

        display: block;
        position: absolute;
        z-index: 0;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        z-index: 0;
        
        background-image: url("./assets/img/iris-girl-with-box-2.png");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: -75px 0px;
        background-repeat: no-repeat;

        opacity: 0.8;
        max-width: 100%;
        min-height: 100%;
        overflow-y: hidden;
        width: 100%;

        margin: 0 auto;
    }

    @media only screen and (max-width: 575px) {
        order: 2;

        ::after {
            visibility: hidden;
            background-position: 0px 0px;
        }
    }
`;

const LeftColumnHeader = styled('h3')`
    position: absolute;
    width: auto;
    z-index: 1;
    color: #FFF308;
    font-size: 3em;
    top: 65%;
    left: 65%;
    transform: translateX(-50%);
    margin-top: 35px;
    font-weight: bold;
`;

const WorkWithUsLink = styled('a')`
    cursor: pointer; 
    
    position: relative;
    z-index: 1;
    /* top: 73%;
    transform: translate(-50%, -50%);
    left: 18%; */

    font-size: 1.5em;

    text-align: center;
`;

const WorkWithUsLinkButton = styled('button')`
    position: relative;
    z-index: 1;

    border: 1px solid #5425BA;
    border-radius: 12px;

    padding: 12px;
    margin-bottom: 10px;
    color: #5425BA;
    background-color: white;

    /* color: white;
    background-color: #5425BA; */

    box-shadow: 0px;

    transition: color 500ms ease-in-out, background-color 500ms ease-in-out, box-shadow 500ms ease-in-out, transform 500ms ease-in-out;
    
    transform: scale(1.0);

    :hover, :active, :visited {
        /* color: #5425BA;
        background-color: white; */
        transform: scale(1.1);

        color: #5425BA;
        background-color: #FFF308;
    }

`;

const IrisIntroVideo = styled('video')`
    /* position: relative;
    z-index: 1;
    top: 23%;
    left: 24%;
  
    max-width: 500px;
    max-height: 500px; */

	position: absolute;
	z-index: 1;
	top: 50%;
	left: 67%;
	transform: translate(-50%, -50%);    


	max-width: 380px;
	max-height: 240px;

    transition: all 500ms ease-in-out;

    @media only screen and (max-width: 575px) {
        position: relative;

        top: 0%;
        left: 0%;
        transform: translate(0%, 0%);

        max-width: 85%;
	    max-height: 240px;

        margin: 15px 0px;
    }

    @media only screen and (min-width: 576px) and (max-width: 761px) {
        left: 50%;

        max-width: 90%;
	    max-height: 240px;
    }

    @media only screen and (min-width: 762px) and (max-width: 1153px) {
        left: 50%;
    }
`;

const RightColumn = styled(LeftColumn)`
    /* display: flex;
    flex-direction: column;
    justify-content: center; */

    /* height: 100%; */
    /* margin: auto; */

    flex-direction: column;
    align-items: center;

    background-color: #542595;
    /* #54259D; */

    ::after {
        visibility: hidden;
    }

    @media only screen and (max-width: 575px) {
        order: 1;

        ::after {
            visibility: visible;
            background-position: -162px 0px;

            opacity: 0.2;
        }
    }
`;

const RightColumnContainer = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    width: 80%;
    height: 100%;
    margin: 0 auto;
`;

const WorkWithUsIrisLogoWings = styled(IrisLogoWings)`
    position: relative;
    z-index: 1;
    
    top: 32.5%;
    left: 25%;
    transform: translateX(-50%);

    width: ${ props => props.width ? props.width : "500px"};
    height: ${ props => props.height ? props.height : "500px"};
    color: ${ props => props.color ? props.color : "#7A40DB"};

    @media only screen and (max-width: 575px) {
     

        order: 2;

        ::after {
            background-position: 0px 0px;
        }
    }
`;

const WelcomeText = styled('h3')`
    position: relative;
    z-index: 1;

    color: #FFF308;

    font-size: 2.5em;
    font-weight: bold;

    margin-bottom: 30px;

    @media only screen and (max-width: 768px) {
        text-align: center;
        margin-top: 25px;
    }
`;

const IrisWorkWithUsDescription = styled('p')`
    position: relative;
    z-index: 1;

    color: white;
    font-weight: bolder;

    margin-top: 2px;
    margin-bottom: 0.5rem;

    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`;

const IrisWorkWithUsDescriptionEmoji = styled('span')`
    position: relative;
    z-index: 1;

    margin-right: 5px;
`;

const ContactInfoContainer = styled('address')`
    position: relative;
    z-index: 1;

    color: white;

    margin-top: 0px;

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
    position: relative;
    z-index: 1;

    font-size: 0.8em;
    color: white;
    text-transform: uppercase;

    @media only screen and (max-width: 311px) {
        text-align: center;
    }
`;
const EmailSubscribeContainer = styled('p')`
    position: relative;
    z-index: 1;

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
    position: relative;
    z-index: 1;

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
    position: relative;
    z-index: 1;

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

export { WorkWithUsPageContainer, WorkWithUsSection, LeftColumn, LeftColumnHeader, WorkWithUsLink, WorkWithUsLinkButton, IrisIntroVideo, RightColumn, RightColumnContainer, WorkWithUsIrisLogoWings, WelcomeText, IrisWorkWithUsDescription, IrisWorkWithUsDescriptionEmoji,ContactInfoContainer, ContactInfoEmail, ContactInfoPhone, PromotionesContainerAddress, PromotionsTitle, EmailSubscribeContainer, EmailSubscribeInput, EmailSubscribeButton };
