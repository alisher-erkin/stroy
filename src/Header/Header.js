import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Logo/logo.jpg';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Routes, Route, Link } from 'react-router-dom';
import Aboutus from '../Pages/Aboutus/Aboutus';
import Design from '../Pages/Design/Design';
import Repair from '../Pages/Repair/Repair';
import Contacts from '../Pages/Contacts/Contacts';
import { useLang } from '../i18n/LanguageContext';
import './Header.css';


function Header() {
  const { t, lang, setLang, languages } = useLang();

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
            <img src={logo} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">{t.nav.about}</Nav.Link>
            <Nav.Link as={Link} to="/design">{t.nav.design}</Nav.Link>
            <Nav.Link as={Link} to="/repair">{t.nav.repair}</Nav.Link>
            <Nav.Link as={Link} to="/contacts">{t.nav.contacts}</Nav.Link>
          </Nav>
          <div className="header-actions">
            <ButtonGroup size="sm" aria-label="Language" className="lang-switch">
              {languages.map((code) => (
                <Button
                  key={code}
                  variant={code === lang ? 'primary' : 'outline-primary'}
                  onClick={() => setLang(code)}
                  aria-pressed={code === lang}
                >
                  {code.toUpperCase()}
                </Button>
              ))}
            </ButtonGroup>
            <Button href="tel:+998770089611">+998770089611</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Routes>
        <Route index element={<Aboutus />} />
        <Route path="/design" element={<Design />} />
        <Route path="/repair" element={<Repair />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default Header;
