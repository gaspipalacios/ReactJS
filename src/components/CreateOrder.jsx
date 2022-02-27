import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { context } from '../contexts/CartContext';
import firebase from "firebase";
import { getFirestore } from "../firebase/firebase";
import Cart from "./Cart";

//BOOTSTRAP Framework
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col, Form, Container, Alert } from 'react-bootstrap';

export default function CreateOrder() {

    const { cart, cartTotal, clearCart } = useContext(context);
    const [orderId, setOrderId] = useState('');
    const [orderCreated, setOrderCreated] = useState(false)

    const [validated, setValidated] = useState(false);

    const nameRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();
    const streetRef = useRef();
    const numberRef = useRef();
    const apartmentRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const zipRef = useRef();

    const dataBase = getFirestore()

    const handleSubmit = (evt) => {
        const form = evt.currentTarget
        
        if (form.checkValidity() === false) {

            setValidated(true)
            evt.preventDefault()
            evt.stopPropagation()

        }else{
            handleClick()
        }
            
        evt.preventDefault()
        
    }

    function handleClick() {
        const orders = dataBase.collection('orders')

        const newOrder = {
            buyer: {
                name: nameRef.current.value,
                email: emailRef.current.value,
                mobile: mobileRef.current.value,
                adress: {
                    street: streetRef.current.value,
                    number: numberRef.current.value,
                    apartment: apartmentRef.current.value,
                    city: cityRef.current.value,
                    state: stateRef.current.value,
                    zip: zipRef.current.value
                }
            },
            items: cart,
            total: cartTotal,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        orders.add(newOrder)
            .then(({ id }) => {
                setOrderId(id)
            })
            .catch((err) => {
                console.log(err);
            })

        updateStock()
    }

    const updateStock = async () => {
        const itemsToUpdate = dataBase.collection('items')
            .where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(i => i.id))

        const query = await itemsToUpdate.get()
        const batch = dataBase.batch()

        const outOfStock = []
        query.docs.forEach((docSnapshot, idx) => {

            (docSnapshot.data().stock >= cart[idx].cantidad) ?
                batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - cart[idx].cantidad })
                :
                outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id })
        })

        if (outOfStock.length === 0) {
            await batch.commit()
        }

        setOrderCreated(true)
    }


    return (
        <>
            {
                (cart.length !== 0) ? //Chequeo que carrito no esté vacío por si el usuario llega a este componente escribiendo el link en el navegador
                    orderCreated ?
                        <Container style={{ minHeight: '100vh', paddingTop: '1vh' }} >
                            <Col xs={10} lg={12} className="justify-content-xs-center">
                                <Alert variant="warning">
                                    <Alert.Heading className="mx-2">¡Muchas gracias por tu compra!</Alert.Heading>
                                    <p className="mx-2">
                                        El código de tu orden de compra es: <strong>{orderId}</strong>. En los próximos minutos
                                        recibirás un e-mail con los detalles de tu compra.
                                    </p>
                                    <hr />
                                    <p className="mx-2">
                                        Puedes volver al inicio y seguir mirando los diseños disponibles.
                                    </p>
                                    <Button onClick={() => clearCart()} variant='warning' className='mb-1 mx-2'><Link to={'/'} style={{ textDecoration: 'none', color: 'black' }} >Ir al Inicio</Link></Button>
                                </Alert>
                            </Col>
                        </Container>
                        :
                        <Container style={{ minHeight: '100vh' }}>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-3 pt-5">
                                    <Form.Group as={Col} controlId="formGridName" >
                                        <Form.Label>Nombre completo</Form.Label>
                                        <Form.Control required type="text" ref={nameRef} placeholder="Nombre Completo" />
                                        <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">Escribe un nombre válido</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control required type="email" ref={emailRef} placeholder="Dirección de correo electrónico" />
                                        <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">Escribe una dirección válida</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridMobile">
                                        <Form.Label>Celular</Form.Label>
                                        <Form.Control required type="number" ref={mobileRef} placeholder="Celular" />
                                        <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">Escribe tu número de celular</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Row >
                                    <Form.Group xs={7} as={Col} className="mb-3" controlId="formGridStreet">
                                        <Form.Label>Calle</Form.Label>
                                        <Form.Control required type="text" ref={streetRef} placeholder="25 de Mayo" />
                                        <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">Escribe el nombre de tu calle</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} className="mb-3" controlId="formGridNumber">
                                        <Form.Label>Número</Form.Label>
                                        <Form.Control required type="number" ref={numberRef} placeholder="1810" />
                                        <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">Escribe el número de tu casa o "0" si no aplica</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} className="mb-3" controlId="formGridApartment">
                                        <Form.Label>Departamento</Form.Label>
                                        <Form.Control ref={apartmentRef} placeholder='4A (Opcional)' />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group xs={5} as={Col} controlId="formGridCity">
                                        <Form.Label>Ciudad</Form.Label>
                                        <Form.Control required type="text" ref={cityRef} placeholder='Villa Maria' />
                                        <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">Escribe el nombre tu ciudad</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group xs={5} as={Col} controlId="formGridState">
                                        <Form.Label>Provincia</Form.Label>
                                        <Form.Control required type="text" ref={stateRef} placeholder='Córdoba' />
                                        <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">Escribe el nombre de tu provincia</Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridZip">
                                        <Form.Label>Código Postal</Form.Label>
                                        <Form.Control required type="number" ref={zipRef} placeholder='5900' />
                                        <Form.Control.Feedback>Bien!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">Escribe el Código Postal de tu ciudad</Form.Control.Feedback>
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check type="checkbox" label="Quiero recibir ofertas" />
                                </Form.Group>

                                <Button variant="warning" type='submit'>
                                    Crear orden
                                </Button>
                            </Form>
                        </Container>
                    :
                    <Cart />
            }
        </>
    )
};