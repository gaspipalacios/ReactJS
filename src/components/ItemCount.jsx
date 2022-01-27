import React, { useState, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Row, Col } from 'react-bootstrap';

export default function ItemCount({ max, onAdd, initial }) {
    
    const [quant, setQuant] = useState(initial);

    const Sumar = () => {
        if (quant < max) setQuant(quant + 1)
    };
    
    const Restar = () =>{
        if (quant > 0) setQuant(quant - 1)
    };

    const addIf = () => {
        (quant > 0)?
            onAdd(quant)
            :
            alert('Suma al menos una unidad a tu carrito')
    };

    return (
        <>
            <Row className="justify-content-center">
                <Col >
                    <ButtonGroup aria-label="count" className="mb-2">
                        <Button variant="secondary" onClick={() => Restar()}>-</Button>
                        <Button variant="secondary" className="px-4">{quant}</Button>
                        <Button variant="secondary" onClick={() => Sumar()}>+</Button>
                    </ButtonGroup>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col >
                    <Button variant="secondary" onClick={addIf}>Agregar al carrito</Button>
                </Col>
            </Row>

        </>
    )
};