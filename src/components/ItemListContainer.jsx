import React from "react";
import { Container } from "react-bootstrap";
import ItemList from "./ItemList";

export default function ItemListContainer(){
   
    return(
        
        <>
        <Container>
        <>
            {<ItemList />}
        </>
        </Container>
        </>
    )
}