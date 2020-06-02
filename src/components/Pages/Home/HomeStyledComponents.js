import styled from 'styled-components';

import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import IrisLogo from './../../IrisLogo.js';

const LeftColumn = styled("div")`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF308;
    width: 50%;
    height: 100%;
`;

const RightColumn = styled(LeftColumn)`
    width: 50%;
    background-color: #5425BA;
`;

const HomeIrisLogo = styled(IrisLogo)`
    width: ${ props => props.width ? props.width : "500px"};
    height: ${ props => props.height ? props.height : "500px"};
    color: ${ props => props.color ? props.color : "#7A40DB"};
`;

export { LeftColumn, RightColumn, HomeIrisLogo };
