import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../Firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/home" className='fs-3' style={{ color: '#DC0240' }}>SalesTracking</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} className="fs-5" to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} className="fs-5 mx-4" to="/blogs">Blogs</Nav.Link>
                            {
                                user ? <button onClick={() => signOut(auth)} className='px-4 btn btn-danger'>Log Out</button> :
                                    <Nav.Link as={Link} className="fs-5" to="/login">Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;