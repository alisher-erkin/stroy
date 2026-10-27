import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import logo from '../Logo/logo.jpg';
import './Footer.css';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


export default class Footer extends Component {
  render() {
    return (
      <div>
        <Container fluid className='footer'>
              <Row>
                <Col className='block-1 col-sm-3'>
                  <img src={logo} alt='logo' />
                </Col>
                <Col className='block-2 col-sm-3'>
                  <Nav>
                    <Nav.Link as={Link} to="/">О нас</Nav.Link>
                    <Nav.Link as={Link} to="/design">Дизайн</Nav.Link>
                    <Nav.Link as={Link} to="/repair">Ремонт</Nav.Link>
                    <Nav.Link as={Link} to="/contacts">Контакты</Nav.Link>
                  </Nav>
                </Col>
                <Col className='block-3 col-sm-3'>
                  <p>Капитальный ремонт</p>
                  <p>Ремонт в новостройке</p>
                  <p>Косметический ремонт</p>
                  <p>Коммерческий ремонт</p>
                </Col>
                <Col className='block-4 col-sm-3'>
                  <p>Телефон</p>
                  <p><a href="tel:+998770089611">+998770089611</a></p>
                </Col>
              </Row>
        </Container>
      </div>
    )
  }
}
