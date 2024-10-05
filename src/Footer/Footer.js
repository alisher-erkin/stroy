import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import logo from '../Logo/logo.jpg';
import './Footer.css';
import { Nav, NavLink } from "react-bootstrap";


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
                    <Nav.Link href="/">О нас</Nav.Link>
                    <NavLink href="/design">Дизайн</NavLink>
                    <Nav.Link href="/repair">Ремонт</Nav.Link>
                    <NavLink href="/contacts">Контакты</NavLink>
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
                  <p>+998770089611</p>
                </Col>
              </Row>
        </Container>
      </div>
    )
  }
}
