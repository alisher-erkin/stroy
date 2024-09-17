import React, { Component } from 'react';
import img from "../../images/bg-contacts.jpg";
import { Col, Container, Row } from 'react-bootstrap';
import "../Contacts/Contacts.css";


export default class Contacts extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <img src={img} alt='contacts' /> 
          </Row>
        </Container>
        <Container>
          <Row className='contact-text'>
            <h3>Контакты</h3>
            <Col>
              <p>Телефон</p>
              +998770089611
            </Col>
            <Col>
              <p>Режим работы</p>
              10:00 до 19:00
            </Col>
            <Col>
              <p>Почта</p>
              info@stroy.ru
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
