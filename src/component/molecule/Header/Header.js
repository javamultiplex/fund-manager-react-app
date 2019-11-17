import React from 'react';
import './Header.css'
import {Container, Row, Col} from 'reactstrap';

const Header = () => (
    <Container fluid className="container-header">
        <Row>
            <Col xs="4" sm="4">
                    <h1>Fund Manager App</h1>
            </Col>
        </Row>
    </Container>
);

export default Header;