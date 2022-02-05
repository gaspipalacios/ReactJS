import React, { useState, useEffect, useContext } from 'react';
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';
import { context } from '../contexts/CartContext';

//MUI Framework
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//BOOTSTRAP Framework
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const theme = createTheme({
    palette: {
        primary: {
            main: '#fafafa',
        },
        secondary: {
            main: '#ffc107',
        },
    },
})

export default function NavBar({ arrayNav, prodSection }) {

    const { cartTotalQuant } = useContext(context);
    console.log(cartTotalQuant);
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
                <Container>
                    <Link to={'/'} style={{ textDecoration: 'none' }}><Navbar.Brand href="/">Melody Clothes</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {arrayNav.map(item => <Link to={item.url} style={{ textDecoration: 'none' }}><Nav.Link href={item.url}>{item.section}</Nav.Link></Link>)}
                            <NavDropdown title="Secciones" id="basic-nav-dropdown">
                                {prodSection.map(item => <Link to={`/category/${item.id}`} style={{ textDecoration: 'none' }}><NavDropdown.Item href={`/category/${item.id}`}>{item.section}</NavDropdown.Item></Link>)}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>

                    <ThemeProvider theme={theme}>
                        <Link to={'/cart'}>
                            <IconButton aria-label="cart">
                                <Badge badgeContent={cartTotalQuant} color="secondary">
                                    <ShoppingCartIcon color="primary" />
                                </Badge>
                            </IconButton>
                        </Link>
                    </ThemeProvider>

                </Container>
            </Navbar>

        </>
    )
};