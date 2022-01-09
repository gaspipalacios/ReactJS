import React from "react";
import CartWidget from "./CartWidget";

export default function NavBar({arrayNav}){
    
    return(
        <>
        <header>
            <h1>Melody Clothes</h1>
            <nav>
                <ul>
                    {arrayNav.map(item => <li>{item}</li>)}
                </ul>
                <CartWidget />
            </nav>
        </header>
        </>
    )
};