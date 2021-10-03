import { faFacebook, faInstagram, faLeanpub, faLinkedin, faYahoo, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Footer = () => {
    const element = <FontAwesomeIcon icon={faLeanpub} />
    const element2 = <FontAwesomeIcon icon={faFacebook} />
    const element3 = <FontAwesomeIcon icon={faInstagram} />
    const element4 = <FontAwesomeIcon icon={faLinkedin} />
    const element5 = <FontAwesomeIcon icon={faYahoo} />
    const element6 = <FontAwesomeIcon icon={faYoutube} />
    return (
        <div>
            <Navbar bg="primary" variant="dark" className="mt-3">
                <Container>
                    <Navbar.Brand>{element} Course Kid</Navbar.Brand>
                </Container>
                <p className='text-white m-2 fs-4'>{element2} {element3} {element4} {element5} {element6}</p>
            </Navbar>
            <p variant="white" className=" bg-primary text-white p-2">© 2021 CourseKid. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;