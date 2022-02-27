import React from "react";
import { Link } from 'react-router-dom';

//BOOTSTRAP Framework
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col} from 'react-bootstrap';

export default function Item({ prod }) {

    return (
        <>
            {
                <Col xs={12} lg={6} xl={3} xxl={2}>
                    <Card bg="dark" className="mb-3 text-center">
                        <Card.Img src={prod.img} alt="Imagen Producto"/>
                        <Card.Body style={{ color: '#f8f9fa' }}>
                            <Card.Title >{prod.name}</Card.Title>
                            <Card.Text >Precio: $ {prod.price}</Card.Text>
                            <Card.Text>Cantidad disponible: {prod.stock}</Card.Text>
                            <Link to={`/item/${prod.id}`}><Button variant='secondary'>Vista detallada</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            }
        </>
    )
}