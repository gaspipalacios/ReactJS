import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom';

import ItemCount from './ItemCount';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

export default function ItemDetail({ arrayItemId, onAdd, showItemCount, initial }) {

    return (

        <>
            <Row className="justify-content-center">
                <Col xl={6}>
                    <Card className="mb-3 text-center">
                        <Card.Img src="https://picsum.photos/1080" alt="Imagen Producto" />
                        <Card.Body>
                            <Card.Title>{arrayItemId.name}</Card.Title>
                            <Card.Text>Precio: {arrayItemId.price}</Card.Text>
                            <Card.Text>Cantidad disponible: {arrayItemId.stock}</Card.Text>
                            <Card.Subtitle className="mb-2">Descripción</Card.Subtitle>
                            <Card.Text>{arrayItemId.description}</Card.Text>
                            {
                                (showItemCount) ?
                                    <ItemCount max={arrayItemId.stock} onAdd={onAdd} initial={initial} />
                                    :
                                    <Button variant='secondary'>Finalizar compra</Button>
                            }
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>

    )
}