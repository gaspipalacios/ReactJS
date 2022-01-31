import { useState, createContext } from "react";

export const context = createContext();

export default function CartContext({ children }) {

    const [cart, setCart] = useState([]);

    const addItem = (quant, arrayItemId) => {

        const checkItem = cart.filter(item => item.id === arrayItemId.id)
        
        isInCart(checkItem)?
        setCart([...cart, {

            nombre: arrayItemId.name,
            id: arrayItemId.id,
            cantidad: quant,
            precio: arrayItemId.price,
            precioTotal: arrayItemId.price * quant
        }
        ])
        :
        setCart(
            cart.map(item => {
                if(item.id === arrayItemId.id){
                    const newPrecioTotal = quant * arrayItemId.price
                    item.cantidad = item.cantidad + quant;
                    item.precioTotal = item.precioTotal + newPrecioTotal
                }
                return item;
            })
        )
        

    }

    const removeItem = id => {
        setCart(cart.filter(item => item.id !== id))
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = checkItem => checkItem.length === 0;


    return (
        <>
            <context.Provider value={{ cart, addItem, removeItem, clearCart }}>
                {children}
            </context.Provider>
        </>
    )
}