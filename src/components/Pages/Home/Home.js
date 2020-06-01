import React from 'react';

import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { LeftColumn, RightColumn } from './HomeStyledComponents.js';

const Home = (props) => {
    return (
        <section className="col home-page-container">
                <LeftColumn>Left</LeftColumn>
                <RightColumn>Right</RightColumn>
        </section>
     
    ); //end return
}; //end Home

export default Home;