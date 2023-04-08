import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">R.M.</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#socialmedia">Social Media</Nav.Link>
            <Nav.Link href="#contactme">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />

    </>
  );
}

export default ColorSchemesExample;