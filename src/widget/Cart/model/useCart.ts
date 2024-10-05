import {StorageKeys, useStorage} from "shared/lib";
import {useCallback, useEffect, useState} from "react";

export const useCart = () => {
    const {getParsedItem, setItem} = useStorage()

    const [cartData, setCartData] = useState(getParsedItem(StorageKeys.PRODUCTS) || []);

    // Calculate total price from cart data
    const totalPrice = cartData.reduce((acc, item) => acc + item.price, 0);

    // Remove item from cart and update state and storage
    const removeFromCart = useCallback((id: number) => {
        const updatedCart = cartData.filter((item: any) => item.id !== id);
        setCartData(updatedCart); // Update cart data in state
        setItem(StorageKeys.PRODUCTS, updatedCart); // Update cart in local storage
    }, [cartData]);

    // Fetch cart data on mount if needed (optional)
    useEffect(() => {
        const storedCart = getParsedItem(StorageKeys.PRODUCTS);
        if (storedCart) {
            setCartData(storedCart);
        }
    }, []);


    return{
        cartData,
        totalPrice,
        removeFromCart
    }
}