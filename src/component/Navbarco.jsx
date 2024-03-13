import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navbarco() {
  return (
    <div className='navbar   bg-info'>
     <Navbar expand="lg" className="  w-100 container-fluid h-100 ">
      <Container fluid>
        <Navbar.Brand href="#">AKIL</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
         
         


          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#Hero">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#action2">Education</Nav.Link>
            <Nav.Link href="#action2">TeckStack</Nav.Link>
            <Nav.Link href="#action2">Project</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navbarco;