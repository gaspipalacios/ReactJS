import { useState, createContext } from "react";

export const context = createContext();

export default function CartContext({ children }) {

    const [cart, setCart] = useState([]);

    const addItem = (quant, arrayItemId) => {

        const checkItem = cart.filter(item => item.id === arrayItemId.id)

        isInCart(checkItem) ?
            setCart([...cart, {

                nombre: arrayItemId.name,
                id: arrayItemId.id,
                cantidad: quant,
                precio: arrayItemId.price,
                precioTotal: arrayItemId.price * quant,
                stock: arrayItemId.stock,
                img: arrayItemId.img
            }
            ])
            :
            setCart(
                cart.map(item => {
                    if (item.id === arrayItemId.id) {
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

    const deductUnit = (id, cantidad) => {
        (cantidad === 1) ?
        removeItem(id)
        :
        setCart(
            cart.map(item => {
                if (item.id === id) {
                    if (item.cantidad > 0) {
                        
                        item.cantidad = item.cantidad - 1
                        item.precioTotal = item.cantidad * item.precio
                    }
                }
                return item;
            })
        )
    }

    const addUnit = id => {
        setCart(
            cart.map(item => {
                if (item.id === id) {
                    if (item.cantidad < item.stock) {
                        item.cantidad = item.cantidad + 1
                        item.precioTotal = item.cantidad * item.precio
                    }
                }
                return item;
            })
        )
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = checkItem => checkItem.length === 0;

    const cartTotal = Object.values(cart).reduce((t, { precioTotal }) => t + precioTotal, 0)

    const cartTotalQuant = Object.values(cart).reduce((t, { cantidad }) => t + cantidad, 0)


    return (
        <>
            <context.Provider value={{ cart, addItem, removeItem, clearCart, deductUnit, addUnit, cartTotal, cartTotalQuant }}>
                {children}
            </context.Provider>
        </>
    )
}