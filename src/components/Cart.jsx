import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from '../contexts/CartContext';

//BOOTSTRAP Framework
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Card, Container, Row, Col, Alert } from 'react-bootstrap';

export default function Cart() {

    const { cart, clearCart, cartTotal, removeItem, deductUnit, addUnit } = useContext(context);

    return (
        <>
            {
                cart.length === 0 ?
                    <Container className='pt-3' style={{ minHeight: '100vh' }}>
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
                                        <Card className="my-2 bg-dark text-white">

                                            <Card.Img src={item.img} alt="Imagen Producto" />
                                            <Card.Body>
                                                <Card.Title>{item.nombre}</Card.Title>
                                                <Card.Text>Precio: $ {item.precio}</Card.Text>
                                                <Card.Text>Cantidad: {item.cantidad}</Card.Text>
                                                <Card.Text>Total: $ {item.precioTotal}</Card.Text>
                                            </Card.Body>

                                            <ButtonGroup aria-label="count" className="mb-2">
                                                <Button variant="secondary" onClick={() => deductUnit(item.id, item.cantidad)}>-</Button>
                                                <Button variant="secondary" onClick={() => addUnit(item.id)}>+</Button>
                                            </ButtonGroup>
                                            <Button onClick={() => removeItem(item.id)} variant='secondary'>Quitar del carrito</Button>
                                        </Card>
                                    </Col>)
                            }
                        </Row>
                        <Row>
                            <Alert variant='dark' className='mx-2 mb-2'>
                                El total de tu carrito es: <strong> $ {cartTotal}</strong>
                                <Link to={'/myOrder'} style={{ textDecoration: 'none' }}><Button variant='warning' className='mx-2'>Finalizar compra</Button></Link>
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