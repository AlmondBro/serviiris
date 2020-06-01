import styled from 'styled-components';

import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LeftColumn = styled("div")`
    display: inline-block;
    background-color: #FFF308;
    width: 50%;
    height: 100%;
`;

const RightColumn = styled(LeftColumn)`
    width: 50%;
    background-color: #5425BA;
`;

export { LeftColumn, RightColumn };
