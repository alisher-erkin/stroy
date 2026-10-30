import React from 'react';
import img from "../images/bg-about.jpg"
import { Container, Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Advantages from '../Advantages/Advantages';
import "../About/About.css";
import { useLang } from '../i18n/LanguageContext';


export default function About() {
  const { t } = useLang();

  return (
    <div>
      <Container fluid>
        <Row>
          <img src={img} alt='bg' className='img-fluid' />
        </Row>
        </Container>
        <Container className='about-text'>
        <Row>
          <h3>{t.about.title}</h3>
          {t.about.paragraphs.map((text, i) => (
            <p key={i} className={i === 0 ? 'font-roboto' : undefined}>{text}</p>
          ))}
          <h3>{t.about.missionTitle}</h3>
          <p>{t.about.mission}</p>
          <Advantages />
        </Row>
      </Container>
    </div>
  )
}
