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
                            <Nav.Link as={Link} className="me-2" to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} className="mx-2" to="/blogs">Blogs</Nav.Link>
                            {
                                user ? <div className='d-flex'>
                                    <Nav.Link as={Link} className="mx-2" to="/manageItems">Manage Items</Nav.Link>
                                    <Nav.Link as={Link} className="mx-2" to="/additem">Add Item</Nav.Link>
                                    <Nav.Link as={Link} className="mx-2" to="/myItems">My Items</Nav.Link>
                                    <Nav.Link onClick={() => signOut(auth)} className="text-danger ms-2">Logout</Nav.Link>
                                </div> :
                                    <Nav.Link as={Link} className="ms-2" to="/login">Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;