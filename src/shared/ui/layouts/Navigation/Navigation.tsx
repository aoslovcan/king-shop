import {mainNavigationContainer, navigation, navigationMenu, navigationMenuItem} from './styles.ts';
import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import {CartIcon, UserIcon} from "shared/assets/icons";
import {SideBar} from "../SideBar/SideBar.tsx";
import {Cart} from "widget/Cart";
import {useCartContext} from "widget/Cart"

export const Navigation = () => {

    const [isOpenCart, setOpenCart] = useState(false)
    const { cartData } = useCartContext();  // Get cart data

    return (
        <>
            <div className={mainNavigationContainer}>
                <div className={navigation}>
                    <div className="text-background-secondary text-3xl">KingShop</div>
                    <ul className={navigationMenu}>
                        <li className={navigationMenuItem}>
                            <span className="relative cursor-pointer" onClick={() => setOpenCart(true)}>
                                 {cartData.length > 0 && (
                                     <span
                                         className="absolute top-[-4px] right-[-8px] bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartData.length}
            </span>
                                 )}
                                <CartIcon/>

                            </span>
                        </li>
                        <li className={navigationMenuItem}>
                            <Link to="/about">
                                <UserIcon/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>


            {isOpenCart && (
                <SideBar
                    position="right"
                    isOpen={isOpenCart} handleClose={() => setOpenCart(false)}>

                    <Cart/>
                </SideBar>)}
        </>

    );
};
