import React, { useContext } from "react";
import { context } from '../contexts/CartContext';
import Cart from "./Cart";

import { Button, Card, Container, Row, Col } from 'react-bootstrap';

export default function CartContainer() {

    const { cart, clearCart } = useContext(context);

    return (
        <>
            <Container>
                <Row>
                    {
                        cart.map(item => <Cart cart2={item} />)
                    }
                </Row>
                <Row>
                    <Button onClick={() => clearCart()} variant='secondary' className='mb-2'>Limpiar carrito</Button>
                </Row>
            </Container>
        </>
    )
};