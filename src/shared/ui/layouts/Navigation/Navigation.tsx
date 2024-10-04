import {mainNavigationContainer, navigation, navigationMenu, navigationMenuItem} from './styles.ts';
import { Link } from 'react-router-dom';
import React from 'react';
import {CartIcon, UserIcon} from "../../../assets/icons";

export const Navigation = () => {

  return (
    <div className={mainNavigationContainer}>
      <div className={navigation}>
        <div className="text-background-secondary text-3xl">KingShop</div>
        <ul className={navigationMenu}>
          <li className={navigationMenuItem}>
            <Link to="/home">
              <CartIcon/>
            </Link>
          </li>
          <li className={navigationMenuItem}>
            <Link to="/about">
              <UserIcon/>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
