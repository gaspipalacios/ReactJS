import React, { useState, useEffect } from 'react';
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function NavBar({ arrayNav, prodSection }) {

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
                <Container>
                    <Link to={'/'} style={{textDecoration: 'none'}}><Navbar.Brand href="/">Melody Clothes</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {arrayNav.map(item => <Link to={item.url} style={{textDecoration: 'none'}}><Nav.Link  href={item.url}>{item.section}</Nav.Link></Link>)}
                            <NavDropdown title="Secciones" id="basic-nav-dropdown">
                                {prodSection.map(item => <Link to={`/category/${item.id}`} style={{textDecoration: 'none'}}><NavDropdown.Item href={`/category/${item.id}`}>{item.section}</NavDropdown.Item></Link>)}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
                </Container>
            </Navbar>
        
        </>
    )
};