import { Navbar, Nav, Offcanvas, Button, Container } from 'react-bootstrap';
import '../styles/sections/_navbarCss.scss';
import logo from "../assets/logo.jpg";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function Navigationalbar () {

    // for the mobile responsive off-canvas
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleNavLinkClick = (event, target) => {
        event.preventDefault(); // Prevent full page reload
        const section = document.querySelector(target); // Get the section to scroll to
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling to the section
          handleClose(); // Close the Offcanvas after navigating
        }
    };

    return (
        <Navbar bg="primary" className='container-fluid' data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home" className='ms-4'>
                <img
                    src={logo} // The image file
                    alt="Hot Potato Logo"
                    width="90"
                    height="50"
                    className="d-inline-block align-top"
                />
                </Navbar.Brand>
            </Container>
            
            {/* Desktop View */}
            <Nav className="me-5 desktop d-none d-md-flex d-lg-flex">
                <Nav.Link className='fw-bold pe-2' href="#home">Home</Nav.Link>
                <Nav.Link className='fw-bold pe-2' href="#about">About</Nav.Link>
                <Nav.Link className='fw-bold pe-2' href="#contacts">Contacts</Nav.Link>
                <Nav.Link className='fw-bold pe-2' href="#store">Store</Nav.Link>
            </Nav>

        {/* Mobile View */}
            <div className='mobile d-md-none d-lg-none'>
                <Button variant="primary" onClick={handleShow}  className="me-2">
                    <FontAwesomeIcon icon={faBars} style={{ color: 'white', width: '50px', height: '25px' }} />    
                </Button>
                <Offcanvas show={show} onHide={handleClose} placement="end" className="custom-offcanvas">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Hot Potato</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="flex-column">
                            <Nav.Link className='fw-bold pe-2' href="#home" onClick={(e) => handleNavLinkClick(e, '#home')}>Home</Nav.Link>
                            <Nav.Link className='fw-bold pe-2' href="#about" onClick={(e) => handleNavLinkClick(e, '#about')}>About</Nav.Link>
                            <Nav.Link className='fw-bold pe-2' href="#contacts" onClick={(e) => handleNavLinkClick(e, '#contacts')}>Contacts</Nav.Link>
                            <Nav.Link className='fw-bold pe-2' href="#store" onClick={(e) => handleNavLinkClick(e, '#store')}>Store</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>       
                </Offcanvas>
            </div>
        </Navbar>
        
    )
}

export default Navigationalbar