import { Link } from 'react-router-dom';

import ItemCount from './ItemCount';

//BOOTSTRAP Framework
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Row, Col, Carousel } from 'react-bootstrap';

export default function ItemDetail({ arrayItemId, onAdd, showItemCount, initial }) {

    return (

        <>
            <Row className="justify-content-center">
                <Col xl={6}>
                    <Card bg="dark" className="my-3 text-center">
                        <Carousel>
                            <Carousel.Item >
                                <img
                                    className="d-block w-100"
                                    src={arrayItemId.img}
                                    alt="Primera foto"
                                />
                                
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={arrayItemId.img2}
                                    alt="Segunda foto"
                                />

                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={arrayItemId.img3}
                                    alt="Tercera foto"
                                />

                            </Carousel.Item>
                        </Carousel>
                        <Card.Body style={{ color: '#f8f9fa' }}>
                            <Card.Title>{arrayItemId.name}</Card.Title>
                            <Card.Text>Precio: $ {arrayItemId.price}</Card.Text>
                            <Card.Text>Cantidad disponible: {arrayItemId.stock}</Card.Text>
                            <Card.Subtitle className="mb-2">Descripción</Card.Subtitle>
                            <Card.Text>{arrayItemId.description}</Card.Text>
                            {
                                (showItemCount) ?

                                    <ItemCount max={arrayItemId.stock} onAdd={onAdd} initial={initial} />
                                    :
                                    <Container >
                                        <Row>
                                            <Link to={'/cart'} style={{ textDecoration: 'none' }} ><Button variant='secondary' className='m-1'>Finalizar compra</Button></Link>
                                        </Row>
                                        <Row>
                                            <Link to={'/'} style={{ textDecoration: 'none' }} ><Button variant='warning' className='m-1'>Continuar comprando</Button></Link>
                                        </Row>
                                    </Container>
                            }
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>

    )
}