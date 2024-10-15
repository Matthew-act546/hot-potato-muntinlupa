import { Navbar, Nav, Offcanvas, Button, Container, NavDropdown } from 'react-bootstrap';
import '../styles/sections/_navbarCss.scss';
import logo from "../assets/logo.jpg";

function Navigationalbar () {

    return (
        <Navbar bg="primary" className='container-fluid' expand="lg" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">
                <img
                    src={logo} // The image file
                    alt="Hot Potato Logo"
                    width="90"
                    height="50"
                    className="d-inline-block align-top"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='fw-bold pe-2' href="#home">Home</Nav.Link>
                        <Nav.Link className='fw-bold pe-2' href="#about">About</Nav.Link>
                        <Nav.Link className='fw-bold pe-2' href="#contacts">Contacts</Nav.Link>
                        <Nav.Link className='fw-bold pe-2' href="#store">Store</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    )
}

export default Navigationalbar