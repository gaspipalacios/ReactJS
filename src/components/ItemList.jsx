import React, {useState, useEffect} from "react";
import Item from "./Item";

import { Row } from "react-bootstrap";

export default function(){

    const[arrayItems, setArrayItems] = useState([]);

    const productStock = new Promise((resolve, reject)=>{

        setTimeout(() => {

            resolve(
                [
                    {id: 1, name:'Jean', price:'$2100', stock:0, img:'url'},
                    {id: 2, name:'Remera', price:'$500', stock:19, img:'url'},
                    {id: 3, name:'Zapatos', price:'$3900', stock:9, img:'url'},
                    {id: 4, name:'Perfume', price:'$2700', stock:4, img:'url'},
                    {id: 3, name:'Zapatos', price:'$3900', stock:9, img:'url'},
                    {id: 3, name:'Zapatos', price:'$3900', stock:9, img:'url'},
                    {id: 3, name:'Zapatos', price:'$3900', stock:9, img:'url'},
                    {id: 3, name:'Zapatos', price:'$3900', stock:9, img:'url'},
                    {id: 3, name:'Zapatos', price:'$3900', stock:9, img:'url'},
                    {id: 3, name:'Zapatos', price:'$3900', stock:9, img:'url'},
                ]);

            }, 2000)        
        });

    useEffect(()=>{
        productStock
            .then(res=>{
                setArrayItems(res);
            })
            .catch((err)=>{
                console.log(err);
            })
    });

    return(
        <>
        <Row >
            <>
                {arrayItems.map(item => <Item prod={item}/>)}
            </>
        </Row>
        </>
    );
}