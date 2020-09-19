import styled from 'styled-components';

/*
    isOS courtesy of Stack Overflow: 
    https://stackoverflow.com/questions/9038625/detect-if-device-is-ios
*/
const isiOS = () => {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}; //end isiOS

const InputCheckboxHack = styled('input')`
    visibility: hidden;
    position: absolute;
    left: -999999px;
    top: -99999px;

    @media only screen and (max-width: 765px) {
        :checked ~ nav#basic-navbar-nav > ul.nav-ul {
            display: block;
            max-height: 500px;
            opacity: 100%;
        }
    }
 
`;
const MenuBarToggleButtonLabel = styled('label')`
    cursor: pointer;
    user-select: none;
    margin: 0; 
    padding: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
`; //end MenuBarToggleButtonLabel

const MenuBarToggleButton = styled('div')`
    cursor: pointer;
    border: none;
    line-height: 1;
    background-color: #7A40DB;
    padding: 10px;
    border-radius: 25%;

    display: none;

    ${
        isiOS() ? `-webkit-appearance: button-bevel`: null
    }

    @media only screen and (max-width: 765px) {
        display: inline-block;
    } /* End media query */
`; //end MenuBarToggleButton


const MenuBarLine = styled('span')`
    width: 22px; 
    height: 2px;
    background-color: #5425BA;
    display: block;
    padding: 0;
    transition: all 0.2s;
`; //end MenuBarLine

let TopMenuBarLine = styled(MenuBarLine)`
    transform: ${props => props.collapsed ? "rotate(0)" : "rotate(45deg)"};
    transform-origin: 10% 10%;
`; //end TopMenuBarLine

let MiddleMenuBarLine = styled(MenuBarLine)`
    opacity: ${props => props.collapsed ? "1" : "0"};
    margin-top: 4px;
`; //end MiddleMenuBarLine

let BottomMenuBarLine = styled(MenuBarLine)`
    transform: ${props => props.collapsed ? "rotate(0)" : "rotate(-45deg)"};
    transform-origin: 10% 90%;
    margin-top: 4px;
`; //end BottomMenuBarLine

export { InputCheckboxHack, MenuBarToggleButtonLabel, MenuBarToggleButton, MenuBarLine, TopMenuBarLine, MiddleMenuBarLine, BottomMenuBarLine };