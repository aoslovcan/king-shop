import {mainNavigationContainer, navigation, navigationMenu, navigationMenuItem} from './styles.ts';
import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import {CartIcon, UserIcon} from "shared/assets/icons";
import {SideBar} from "../SideBar/SideBar.tsx";
import {Cart} from "../../../../widget/Cart";

export const Navigation = () => {

    const [isOpenCart, setOpenCart] = useState(false)

    return (
        <>


            <div className={mainNavigationContainer}>
                <div className={navigation}>
                    <div className="text-background-secondary text-3xl">KingShop</div>
                    <ul className={navigationMenu}>
                        <li className={navigationMenuItem}>
                            <span className="cursor-pointer" onClick={() => setOpenCart(true)}><CartIcon/></span>
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
