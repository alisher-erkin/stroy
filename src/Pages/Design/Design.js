import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../images/bg-design.jpg';
import '../Design/Design.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useLang } from '../../i18n/LanguageContext';


export default function Design() {
  const { t } = useLang();

  return (
    <div>
      <Container fluid>
        <Row>
          <img src={img} alt='design' />
        </Row>
      </Container>
      <Container className='design-items'>
        <Row>
        <h3>{t.design.title}</h3>
        {t.design.paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
          <h3>{t.design.supervisionTitle}</h3>
          {t.design.supervision.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </Row>
        <Row className='text-block'>
          <h3 className='title-list'>{t.design.stagesTitle}</h3>
          {t.design.stages.map((stage) => (
            <Col key={stage.title} className="col-sm-4">
              <h4>{stage.title}</h4>
              <p>{stage.text}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
