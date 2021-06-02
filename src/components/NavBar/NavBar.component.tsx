import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar: React.FC = () => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/home">Map</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default NavBar;