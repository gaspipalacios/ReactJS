import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { context } from '../contexts/CartContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Row, Col, Alert } from 'react-bootstrap';
import { getFirestore } from "../firebase/firebase";

export default function CartContainer() {

    const { cart, clearCart, cartTotal, removeItem } = useContext(context);
    const [orderId, setOrderId] = useState(''); 

    useEffect(() => {
        const dataBase = getFirestore()
        const orders = dataBase.collection('orders')
        
        const newOrder = {
            buyer: { name: 'Gaspar', mail: 'asdasd@gmail.com', phone: '35461254545' },
            items: cart,
            total: cartTotal
        }

        orders.add(newOrder)
            .then(({id}) => {
                console.log('Orden ingresada: ' + id)
                setOrderId(id)
            })
            .catch((err) => {
                console.log(err);
            })    

        console.log(newOrder);
    }, [])



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
                                cart.map(item =>

                                    <Col xs={12} lg={6} xl={3} xxl={2} >
                                        <Card className="mb-2 bg-dark text-white">

                                            <Card.Img src="https://picsum.photos/1080" alt="Imagen Producto" />
                                            <Card.Body>
                                                <Card.Title>{item.nombre}</Card.Title>
                                                <Card.Text>Precio: $ {item.precio}</Card.Text>
                                                <Card.Text>Cantidad: {item.cantidad}</Card.Text>
                                                <Card.Text>Total: $ {item.precioTotal}</Card.Text>
                                            </Card.Body>
                                            <Button onClick={() => removeItem(item.id)} variant='secondary'>Quitar del carrito</Button>
                                        </Card>
                                    </Col>)
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