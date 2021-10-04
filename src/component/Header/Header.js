import React from 'react';
import { ButtonGroup, Container, Nav, Navbar } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faLeanpub } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import { Link } from 'react-router-dom';

library.add(fab, faCheckSquare, faCoffee)

const Header = () => {
    const element = <FontAwesomeIcon icon={faLeanpub} />
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand className="me-5">{element} Course Kid</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/home" className="text-decoration-none text-white me-3">Home</Link>
                        <Link to="/about" className="text-decoration-none text-white ms-3">About</Link>
                        <Link to="/services" className="text-decoration-none text-white ms-3">Services</Link>
                        <Link to="/contact" className="text-decoration-none text-white ms-3">Contact</Link>
                    </Nav>
                </Container>
                <button className='btn btn-outline-dark text-light text-center me-5'>Join us</button>
            </Navbar>
        </div>
    );
};

export default Header;