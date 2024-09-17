import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Logo/logo.jpg';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutus from '../Pages/Aboutus/Aboutus';
import Design from '../Pages/Design/Design';
import Repair from '../Pages/Repair/Repair';
import Contacts from '../Pages/Contacts/Contacts';




function Header() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">О НАС</Nav.Link>
            <NavLink href="/design">ДИЗАЙН</NavLink>
            <Nav.Link href="/repair">РЕМОНТ</Nav.Link>
            <NavLink href="/contacts">КОНТАКТЫ</NavLink>
          </Nav>
          <Col xs="auto">
              <Button type="submit">+998770089611</Button>
            </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <BrowserRouter>
      <Routes>
        <Route index element={<Aboutus />} />
        <Route path="/design" element={<Design />} />
        <Route path="/repair" element={<Repair />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default Header;