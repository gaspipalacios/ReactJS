import React from "react";
import CartWidget from "./CartWidget";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function NavBar({ arrayNav, prodSection }) {

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Melody Clothes</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {arrayNav.map(item => <Nav.Link href={item.url}>{item.section}</Nav.Link>)}
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                {prodSection.map(item => <NavDropdown.Item href={item.url}>{item.section}</NavDropdown.Item>)}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
                </Container>
            </Navbar>
        
        </>
    )
};