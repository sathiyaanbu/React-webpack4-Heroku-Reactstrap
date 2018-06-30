import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import anbu from '../images/anbu.jpg';

import Navbari from './Navbari.jsx';
import Footer from './Footer.jsx';

class Home extends Component {
  render() {
    return (
      <Container style={{ padding: '30px' }}>
        <Row style={{ fontFamily: 'Merriweather Sans, sans-serif' }}>
          <Col sm="6">
            <h1>Anbu Poosakkannu</h1>

            <h4 style={{ color: '#aeb0b2' }}>
              Microbial ecologist, Postdoctoral researcher
            </h4>
          </Col>
          <Col sm="3" xs="3" />
          <img
            src={anbu}
            style={{ height: '130px', width: '140px', borderRadius: '10px' }}
            className="img-fluid"
            alt="Responsive"
          />
          <Col sm="3" xs="3" />
        </Row>
        <Navbari />
        <Footer />
      </Container>
    );
  }
}

export default Home;
