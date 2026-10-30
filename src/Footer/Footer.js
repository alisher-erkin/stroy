import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import logo from '../Logo/logo.jpg';
import './Footer.css';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLang } from '../i18n/LanguageContext';


export default function Footer() {
  const { t } = useLang();

  return (
    <div>
      <Container fluid className='footer'>
            <Row>
              <Col className='block-1 col-sm-3'>
                <img src={logo} alt='logo' />
              </Col>
              <Col className='block-2 col-sm-3'>
                <Nav>
                  <Nav.Link as={Link} to="/">{t.footer.nav.about}</Nav.Link>
                  <Nav.Link as={Link} to="/design">{t.footer.nav.design}</Nav.Link>
                  <Nav.Link as={Link} to="/repair">{t.footer.nav.repair}</Nav.Link>
                  <Nav.Link as={Link} to="/contacts">{t.footer.nav.contacts}</Nav.Link>
                </Nav>
              </Col>
              <Col className='block-3 col-sm-3'>
                {t.footer.services.map((service) => (
                  <p key={service}>{service}</p>
                ))}
              </Col>
              <Col className='block-4 col-sm-3'>
                <p>{t.footer.phone}</p>
                <p><a href="tel:+998770089611">+998770089611</a></p>
              </Col>
            </Row>
      </Container>
    </div>
  )
}
