import React from "react";
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function () {



    return (

        <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link to={'/'} style={{textDecoration: 'none'}}>
                <Navbar.Brand>
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Melody Clothes
                </Navbar.Brand>
                </Link>
            </Container>
        </Navbar>
        </>
    )
}