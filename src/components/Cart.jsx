import React, { useContext } from "react";
import { context } from "../contexts/CartContext";

import { Button, Card, Container, Row, Col } from 'react-bootstrap';

export default function Cart({ cart2 }) {

    const { removeItem } = useContext(context);
    return (
        <>
            <Col xs={12} lg={6} xl={3} xxl={2}>
                <Card className="mb-3 bg-dark text-white">

                    <Card.Img src="https://picsum.photos/1080" alt="Imagen Producto" />
                    <Card.Body>
                        <Card.Title>{cart2.nombre}</Card.Title>
                        <Card.Text>Precio: $ {cart2.precio}</Card.Text>
                        <Card.Text>Cantidad: {cart2.cantidad}</Card.Text>
                        <Card.Text>Total: $ {cart2.precioTotal}</Card.Text>
                    </Card.Body>
                    <Button onClick={() => removeItem(cart2.id)} variant='warning'>Quitar del carrito</Button>
                </Card>
            </Col>
        </>
    )
};