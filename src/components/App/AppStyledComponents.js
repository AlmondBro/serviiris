import React from 'react';

import styled from 'styled-components';

import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AppContainer = (props) => {
    return (
        <Container fluid={ props.fluid } >
            <Row>
                <Col className="padding-side-0 no-gutters">
                    { props.children }
                </Col>
            </Row>
           
        </Container>
    ); //end return statement
}; //end AppContainer
 
export { AppContainer };
