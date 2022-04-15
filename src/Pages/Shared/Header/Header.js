import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo2 from '../../../images/logo2.png'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                <Container>
                    <div>
                        <Navbar.Brand href="#home"><img style={{ height: "50px" }} src={logo2} alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    </div>
                    <div>
                        <Nav>
                            <Nav.Link><FontAwesomeIcon className='fw-bold my-auto mx-3 text-black' icon={faShoppingCart}></FontAwesomeIcon></Nav.Link>
                            <Nav.Link className='mx-3 fw-bold text-black' to="/login">Login</Nav.Link>
                            <Nav.Link className='fw-bold text-white mx-3 bg-danger rounded-pill' eventKey={2} to="/signup">
                                Sign Up
                            </Nav.Link>
                        </Nav>
                    </div>
                    {/* <Navbar.Collapse id="responsive-navbar-nav">
                </Navbar.Collapse> */}
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;