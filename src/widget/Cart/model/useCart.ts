import {StorageKeys, useStorage} from "shared/lib";
import {useContext, useEffect, useState} from "react";
import {CartContext} from "../ui/CartContext.tsx";

export const useCart = () => {
    const {getParsedItem, setItem,} = useStorage()
    const [cartData, setCartData] = useState(() => getParsedItem(StorageKeys.PRODUCTS) || []);


    const addToCart = (item) => {
        setCartData((prevData) => {
            const updatedData = [...prevData, item];
            setItem(StorageKeys.PRODUCTS, updatedData);
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