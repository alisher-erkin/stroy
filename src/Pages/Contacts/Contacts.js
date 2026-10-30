import React from 'react';
import img from "../../images/bg-contacts.jpg";
import { Col, Container, Row } from 'react-bootstrap';
import "../Contacts/Contacts.css";
import { useLang } from '../../i18n/LanguageContext';


export default function Contacts() {
  const { t } = useLang();

  return (
    <div>
      <Container fluid>
        <Row>
          <img src={img} alt='contacts' />
        </Row>
      </Container>
      <Container>
        <Row className='contact-text'>
          <h3>{t.contacts.title}</h3>
          <Col>
            <p>{t.contacts.phone}</p>
            <a href="tel:+998770089611">+998770089611</a>
          </Col>
          <Col>
            <p>{t.contacts.hoursLabel}</p>
            {t.contacts.hours}
          </Col>
          <Col>
            <p>{t.contacts.email}</p>
            info@stroy.ru
          </Col>
        </Row>
      </Container>
    </div>
  )
}
