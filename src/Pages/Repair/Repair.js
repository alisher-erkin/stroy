import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../images/bg-repair.jpg'
import '../Repair/Repair.css';
import { useLang } from '../../i18n/LanguageContext';

// Цена за м² в долларах, без учёта материалов
const PRICES = [
  [100, 140],
  [140, 180],
  [180, 220],
];


export default function Repair() {
  const { t } = useLang();

  return (
    <div>
      <Container fluid>
        <Row>
          <img src={img} alt='repair' />
        </Row>
      </Container>
      <Container className="items">
        <Row>
          <h3>{t.repair.title}</h3>
          {t.repair.paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
            <h3>{t.repair.typesTitle}</h3>
            <p>{t.repair.typesText}</p>
        </Row>
        <Row>
          {t.repair.tariffs.map((tariff, i) => (
            <Col key={tariff.title}>
              <h3>{tariff.title}</h3>
              <p>{t.repair.price(PRICES[i][0], PRICES[i][1])}</p>
              <p>{t.repair.priceNote}</p>
              <ul>
                {tariff.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
        <Row className='text-img'>
          <Col>
            <h3>{t.repair.materialsTitle}</h3>
            <p>{t.repair.materials}</p>
          </Col>
          <Col>
            <img src="img/painting.jpg" alt="materials" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
