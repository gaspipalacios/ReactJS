import React, { useState, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup } from 'react-bootstrap';

export default function ItemCount({ max }) {

    const initial =
        max > 0 ?
            1
            :
            0;

    const [quant, setQuant] = useState(initial);

    function Sumar() {
        if (quant < max) setQuant(quant + 1)
    };

    function Restar() {
        if (quant > 0) setQuant(quant - 1)
    }

    return (
        <>
            <ButtonGroup aria-label="count" className="mb-2">
                <Button variant="secondary" onClick={() => Restar()}>-</Button>
                <Button variant="secondary" className="px-4">{quant}</Button>
                <Button variant="secondary" onClick={() => Sumar()}>+</Button>
            </ButtonGroup>
            
        </>
    )
};