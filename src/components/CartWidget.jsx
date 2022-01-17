import React from "react";

export default function CartWidget(){

    return(
        <img 
            src={require("../resources/cart.png")} 
            width="60"
            height="30"
            className="d-inline-block align-top"
            alt="Cart icon" />
    )
}