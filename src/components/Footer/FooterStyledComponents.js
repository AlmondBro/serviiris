import styled from 'styled-components';

//Import FontAwesomeIcon to style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IrisLogoWings } from './../IrisLogo.js';


const FooterStyled = styled('footer')`
    font-size: 0.8em;
    background-color: #2F2E2E;

`;

let FooterIrisWings = styled(IrisLogoWings)`
    position: absolute; 
    top: 25%;
    right: 0%;

    width: ${ props => props.width ? props.width : "500px"};
    height: ${ props => props.height ? props.height : "500px"};
    color: ${ props => props.color ? props.color : "#7A40DB"};
`;

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
    color: white;

    margin-right: 5px;

    :hover {
        color: #FFF308;
    }
`;

const FooterColumn = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    color: white;

    height: 100%;

    border-right: ${props => props.borderRight ? "2px solid grey" : null};
`;

const FooterColumnAddress = styled('address')`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    color: white; 

    width: 100%;
    height: 100%; 

    border-right: ${props => props.borderRight ? "2px solid grey" : null}; 

    a {
        display: block;
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