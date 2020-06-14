import styled from 'styled-components';

const MenuBarLine = styled('span')`
    width: 22px; 
    height: 2px;
    background-color: #B6B6B6;
    display: block;
    transition: all 0.2s;
    margin-top: 4px;
`; //end MenuBarLine

let TopMenuBarLine = styled(MenuBarLine)`
    transform: ${props => props.collapsed ? "rotate(0)" : "rotate(45deg)"};
    transform-origin: 10% 10%;
`; //end TopMenuBarLine

let MiddleMenuBarLine = styled(MenuBarLine)`
    opacity: ${props => props.collapsed ? "1" : "0"};
`; //end MiddleMenuBarLine

let BottomMenuBarLine = styled(MenuBarLine)`
    transform: ${props => props.collapsed ? "rotate(0)" : "rotate(-45deg)"};
    transform-origin: 10% 90%;
`; //end BottomMenuBarLine

export { MenuBarLine, TopMenuBarLine, MiddleMenuBarLine, BottomMenuBarLine };