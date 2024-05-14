import { Col, Row } from 'react-bootstrap';
import '../Styles/custom.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBarComponents() {
  return (
    <Navbar expand="lg" className="fundoNav">
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
          </Nav>
          <Container>
            <Row>
              <Col ><Nav.Link className='text-light home ' href="/">Home</Nav.Link></Col>
              <Col><Nav.Link className='text-light livro' href="/livro">Livros</Nav.Link></Col>
              <Col><Nav.Link className='text-light filme' href="/filme"> Filmes</Nav.Link></Col>
            </Row>
          </Container>  
          <Button variant="outline-light">LOGIN</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarComponents;