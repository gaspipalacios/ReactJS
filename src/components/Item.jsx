import React from "react";
import ItemCount from "./ItemCount";
import { BrowserRouter, Switch, Route, useParams, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Row, Col, NavLink } from 'react-bootstrap';

export default function Item({ prod }) {

    function onAdd() {
        alert(`Agregaste ${prod.name} a tu carrito`)
    }

    function conditionAdd() {
        if (prod.stock > 0) {
            onAdd()
        };
    };

    return (
        <>
            {
                <Col xs={12} lg={6} xl={3} xxl={2}>
                    <Card className="mb-3 text-center">
                        <Card.Img src="https://picsum.photos/1080" alt="Imagen Producto" />
                        <Card.Body>
                            <Card.Title>{prod.name}</Card.Title>
                            <Card.Text>Precio: $ {prod.price}</Card.Text>
                            <Card.Text>Cantidad disponible: {prod.stock}</Card.Text>
                            <Link to={`/item/${prod.id}`}><Button variant='secondary'>Vista detallada</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            }
        </>
    )
}