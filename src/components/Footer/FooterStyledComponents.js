import styled from 'styled-components';

import { IrisLogoWings } from './../IrisLogo.js';

const FooterStyled = styled('footer')`
    background-color: #2F2E2E;
`;

let FooterIrisWings = styled(IrisLogoWings)`
    position: absolute; 
    top: 25%;
    width: ${ props => props.width ? props.width : "500px"};
    height: ${ props => props.height ? props.height : "500px"};
    color: ${ props => props.color ? props.color : "#7A40DB"};
`;

export { FooterStyled, FooterIrisWings };