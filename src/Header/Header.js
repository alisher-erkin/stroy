import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Logo/logo.jpg';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Routes, Route, Link } from 'react-router-dom';
import Aboutus from '../Pages/Aboutus/Aboutus';
import Design from '../Pages/Design/Design';
import Repair from '../Pages/Repair/Repair';
import Contacts from '../Pages/Contacts/Contacts';




function Header() {
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
            <Nav.Link as={Link} to="/">О НАС</Nav.Link>
            <Nav.Link as={Link} to="/design">ДИЗАЙН</Nav.Link>
            <Nav.Link as={Link} to="/repair">РЕМОНТ</Nav.Link>
            <Nav.Link as={Link} to="/contacts">КОНТАКТЫ</Nav.Link>
          </Nav>
          <Col xs="auto">
              <Button href="tel:+998770089611">+998770089611</Button>
            </Col>
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