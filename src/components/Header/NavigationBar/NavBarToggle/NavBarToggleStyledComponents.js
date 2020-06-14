import styled from 'styled-components';

const MenuBarToggleButton = styled('button')`
    border: none;
    background-color: #7A40DB;
    padding: 10px;
    border-radius: 25%;
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

export { MenuBarToggleButton, MenuBarLine, TopMenuBarLine, MiddleMenuBarLine, BottomMenuBarLine };