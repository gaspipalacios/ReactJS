import React from "react";
import ItemCount from "./ItemCount";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

export default function Item({prod}){

    function onAdd(){
        alert(`Agregaste ${prod.name} a tu carrito`)
    }

    function conditionAdd(){
        if(prod.stock > 0){
            onAdd()
        };
    };

    return(
        <>
        {   
            <Col xs={12} lg={6} xl={3} xxl={2}>
            <Card className="mb-3">
                <Card.Img src="https://picsum.photos/1200/1080" alt="Imagen Producto" />
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Text>Precio: {prod.price}</Card.Text>
                    <Card.Text>Cantidad disponible: {prod.stock}</Card.Text>
                    <ItemCount max = {prod.stock}/> <br />
                    <Button variant="secondary" onClick={conditionAdd}>Agregar al carrito</Button>
                </Card.Body>
            </Card>
            </Col>
        }
        </>
    )
}