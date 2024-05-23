import { Col, Row } from 'react-bootstrap';
import '../Styles/custom.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBarComponents() {
  return (
    <Navbar expand="lg" className="fundoNav fw-light">
      <Container fluid>
        <Navbar.Brand href="/" className='ms-3 '>
          <img src='../logoCine.png'
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="CineLivro Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
              <Nav.Link className='text-light ms-4' href="/">Home</Nav.Link>
              <Nav.Link className='text-light ms-4' href="/livro">Livros</Nav.Link>
              <Nav.Link className='text-light ms-4' href="/filme"> Filmes</Nav.Link>
          </Nav>
          <Button variant="outline-light" href="/login">LOGIN</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarComponents;