import { faFacebook, faInstagram, faLeanpub, faLinkedin, faYahoo, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Footer = () => {
    const logo = <FontAwesomeIcon icon={faLeanpub} />
    const facebook = <FontAwesomeIcon icon={faFacebook} />
    const insta = <FontAwesomeIcon icon={faInstagram} />
    const linkdin = <FontAwesomeIcon icon={faLinkedin} />
    const yahoo = <FontAwesomeIcon icon={faYahoo} />
    const youtube = <FontAwesomeIcon icon={faYoutube} />
    return (
        <div>
            <Navbar bg="primary" variant="dark" className="mt-3">
                <Container>
                    <Navbar.Brand>{logo} Course Kid</Navbar.Brand>
                </Container>
                <p className='text-white m-2 fs-4'>{facebook} {insta} {linkdin} {yahoo} {youtube}</p>
            </Navbar>
            <p variant="white" className=" bg-primary text-white p-2">© 2021 CourseKid. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;