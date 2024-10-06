import {StorageKeys, useStorage} from "shared/lib";
import {useContext, useEffect, useState} from "react";
import {CartContext} from "../ui/CartContext.tsx";

export const useCart = () => {
    const {getParsedItem, setItem,} = useStorage()
    const [cartData, setCartData] = useState(() => getParsedItem(StorageKeys.PRODUCTS) || []);


    const addToCart = (item) => {
        setCartData((prevData) => {
            // Check if the item already exists in the cart by comparing the item.id
            const itemExists = prevData.some(cartItem => cartItem.id === item.id);

            if (itemExists) {
                return prevData; // If the item already exists, return the current cart data unchanged
            }

            // If the item is not in the cart, add it
            const updatedData = [...prevData, item];
            setItem(StorageKeys.PRODUCTS, updatedData); // Update local storage
            return updatedData;
        });
    };

    const removeFromCart = (id) => {
        setCartData((prevData) => {
            const updatedData = prevData.filter(item => item.id !== id);
            setItem(StorageKeys.PRODUCTS, updatedData);
            return updatedData;
        });
    };

    useEffect(() => {
        // Load cart data on mount
        const storedCart = getParsedItem(StorageKeys.PRODUCTS);
        if (storedCart) {
            setCartData(storedCart);
        }
    }, []);

    const totalPrice = parseFloat(cartData.reduce((acc, item) => acc + item.price, 0).toFixed(2));


    return{
        cartData,
        totalPrice,
        addToCart,
        removeFromCart
    }
}


export const useCartContext = () => {
    return useContext(CartContext);
};