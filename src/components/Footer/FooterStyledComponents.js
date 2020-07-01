import styled from 'styled-components';

//Import FontAwesomeIcon to style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IrisLogoWings } from './../IrisLogo.js';


const FooterStyled = styled('footer')`
    overflow-y: hidden;

    font-size: 0.8em;
    background-color: #2F2E2E;

`;

let FooterIrisWings = styled(IrisLogoWings)`
    position: absolute; 
    top: 25%;
    right: 0%;
    /* -63%; */

    width: ${ props => props.width ? props.width : "500px"};
    height: ${ props => props.height ? props.height : "500px"};
    color: ${ props => props.color ? props.color : "#7A40DB"};
`;

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
    color: ${props => props.color ? props.color : "white"};
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "none"};

    margin-right: 5px;
    padding: ${props => props.padding ? props.padding : 0};

    border-radius: ${props => props.borderRadius ? props.borderRadius : "0px"};

    :hover {
        color: #FFF308;
    }

`;

const FooterColumn = styled('div')`
    display: flex;
    flex-direction: ${props => props.flexRow ? "row" : "column"};
    justify-content: space-evenly;
    align-items: center;

    font-size: ${props => props.fontSize ? props.fontSize : "inherit"};

    color: white;

    height: auto;

    border-right: ${props => props.borderRight ? "2px solid grey" : null};

    @media only screen and (max-width: 768px) {
        position: ${props => props.socialMediaColumn ? "fixed" : "relative"};

        margin-top: ${props => props.socialMediaColumn ? "150px" : "0px"}; 

        border-top: ${props => props.socialMediaColumn ? "1px solid gray" : "0px"};
    }
`;

const FooterColumnAddress = styled('address')`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 10px 0px;


    color: white; 

    width: 100%;
    height: 100%; 

    border-right: ${props => props.borderRight ? "2px solid grey" : null}; 

    a {
        display: block;
    }

    a:last-child {
        margin-bottom: 10px;
    }
`;

const FooterLink = styled('a')`
    color: white;

    :hover {
        color: white;
        text-decoration: underline;
    }

    svg {
        display: inline-block;
    }

    span {
        display: block;
        padding-left: 25px;
    }

    span#small-padding {
        display: inline;
        padding-left: 5px; 
    }
`;
export { FooterStyled, FooterIrisWings, FontAwesomeIconStyled, FooterColumn, FooterColumnAddress, FooterLink };