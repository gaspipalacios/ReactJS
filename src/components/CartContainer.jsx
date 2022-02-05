import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from '../contexts/CartContext';
import Cart from "./Cart";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Row, Col, Alert } from 'react-bootstrap';

export default function CartContainer() {

    const { cart, clearCart, cartTotal } = useContext(context);

    return (
        <>
            {
                cart.length === 0 ?
                    <Container style={{ minHeight: '100vh' }}>
                        <Alert variant='warning'>
                            Parece que el carrito está vacío, elegí algunos productos!!!
                        </Alert>
                        <Link to={'/'} style={{ textDecoration: 'none' }} ><Button variant='warning' className='mb-3'>Ir a comprar</Button></Link>
                    </Container>
                    :
                    <Container>
                        <Row>
                            {
                                cart.map(item => <Cart cart2={item} />)
                            }
                        </Row>
                        <Row>
                            <Alert variant='dark' className='mx-2 mb-2'>
                                El total de tu carrito es: <strong> $ {cartTotal}</strong>
                                <Button variant='warning' className='mx-2'>Finalizar compra</Button>
                            </Alert>
                        </Row>
                        <Row>
                            <Button onClick={() => clearCart()} variant='secondary' className='mb-1 mx-2'>Limpiar carrito</Button>
                            <Button variant='warning' className='mb-1 mx-2'><Link to={'/'} style={{ textDecoration: 'none', color: 'black' }} >Continuar comprando</Link></Button>
                        </Row>
                    </Container>
            }
        </>
    )
};