import React, {useState, useEffect} from "react";

export default function ItemCount({max}){

     const initial = 
        max > 0 ?
        1
        :
        0;

     const [quant, setQuant] = useState(initial);

     function Sumar(){
         if(quant<max) setQuant(quant + 1)
     };

     function Restar(){
         if(quant>0) setQuant(quant - 1)
     }

    return(
        <>
            <span onClick={() => Restar()}>-</span>
            {quant}
            <span onClick={() => Sumar()}>+</span>

        </>
    )
};