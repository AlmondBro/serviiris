import styled, { css } from 'styled-components';

//Import FontAwesomeIcon to style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IrisLogoWings } from './../IrisLogo.js';

const FooterStyled = styled('footer')`
    position: relative;
    z-index: 1;
    overflow-y: hidden;

    font-size: 0.8em;
    background-color: #2F2E2E;

    & div.row div a.extra-mobile-icons {
        position: absolute;
        visibility: hidden;

        left: -99999px;
        bottom: -99999px;

        transition: visibility 500ms ease-in-out, position 500ms ease-in-out, left 500ms ease-in-out, bottom 500ms ease-in-out;
    }

    @media only screen and (max-width: 765px) {
        & a#footer-link-whatsapp {
            display: none;
        }

        & > div.row div#footer-col-2 {
            margin-bottom: 48px;
        }

        & div.row div a.extra-mobile-icons {
            position: relative;
            visibility: visible;

            left: 0px;
            bottom: 0px;
        }
    }
   
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

const FontAwesomeIconStyled = styled(FontAwesomeIcon).attrs({ 
    flip: props => props.flip
  })`
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

    border-right: ${props => props.borderRight ? "1px solid grey" : null};

    & h4#copyright-text {
        margin-top: 5px;
    }


  

    @media only screen and (max-width: 765px) {
        position: ${props => props.socialMediaColumn ? "fixed" : "relative"};

        /* margin-top: ${props => props.socialMediaColumn ? "150px" : "0px"};  */

        border-top: ${props => props.socialMediaColumn ? "0px solid gray" : "0px solid transparent"};

        bottom: ${props => props.socialMediaColumn ? "0%" : "0%"};
        background-color:  ${props => props.socialMediaColumn ? "#2F2E2E" : "none"};

        z-index:  ${props => props.socialMediaColumn ? "1" : "0"};

        & h4#copyright-text {
            margin-top: 10px;
        }

        & #footer-col1-row-col1 {
            position: absolute;
            top: 110%;
            right: 27.75%;
            opacity: 0.5;
        }

        
        ${ 
            props => props.socialMediaColumn && 
            css`
                    & a:nth-child(1) { order: 5; }
                    & a:nth-child(2) { order: 2; }
                    & a:nth-child(3) { order: 1; }
                    & a:nth-child(4) { order: 4; }
                    & a:nth-child(5) { order: 5; }
                    & a:nth-child(6) { order: 6; }
                ` 
        }
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

const CopyRightSection = styled('section')`
    color: white;
    text-align: center;

    /* border-top: 1px solid grey; */

    display: flex;
    flex-direction: row;
    justify-content: center; 

    & div.column-separators {
        border-right: 1px solid grey;
    }
/* 
    @media only screen and (max-width: 765px) { 
        position: fixed;
        top: 93%;
        width: 100%;
        z-index: 1;
    } */
`;

const CopyRightText = styled('h4')`
    font-size: 1em;
    font-weight: bold;

    padding: 5px;
    margin: 0px;

`;

const SocialMediaLinksContainer = styled('div')`
    display: flex;
    flex-direction: column;
`;

export { FooterStyled, FooterIrisWings, FontAwesomeIconStyled, FooterColumn, FooterColumnAddress, FooterLink, CopyRightSection, CopyRightText, SocialMediaLinksContainer };