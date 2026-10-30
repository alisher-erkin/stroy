import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Container, Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Advantages.css";
import { useLang } from '../i18n/LanguageContext';

const CARD_IMAGES = [
  { src: 'img/contract.png', alt: 'contract' },
  { src: 'img/design.png', alt: 'design' },
  { src: 'img/worker.png', alt: 'worker' },
  { src: 'img/planning.png', alt: 'planning' },
  { src: 'img/calendar.png', alt: 'calendar' },
  { src: 'img/help.png', alt: 'help' },
];


export default function Advantages() {
  const { t } = useLang();
  const cards = t.advantages.cards.map((card, i) => (
    <Col key={i} className='col-sm-4'>
      <Card>
      <Card.Img variant="top" src={CARD_IMAGES[i].src} alt={CARD_IMAGES[i].alt} className='img-fluid' />
      <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
      </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <div className='font-roboto'>
      <Container className='about-items'>
          <Row>
          <h3>{t.advantages.title}</h3>
          {cards.slice(0, 3)}
          </Row>
          <Row>
            {cards.slice(3)}
          </Row>
          <Row className='list-items justify-content-center'>
            <Col className='col-lg-5 col-md-7'>
            <h3 className='title-items'>{t.advantages.processTitle}</h3>
              {t.advantages.process.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </Col>
          </Row>
      </Container>
    </div>
  )
}
