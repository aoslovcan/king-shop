import React from 'react';
import {CartContext} from "./CartContext"
import {useCart} from "widget/Cart";

export const CartProvider = ({ children }) => {
    const {cartData, addToCart, removeFromCart, totalPrice} = useCart()

    return (
        <CartContext.Provider value={{ cartData, addToCart, removeFromCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
