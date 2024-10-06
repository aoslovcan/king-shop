import {
  mainNavigationContainer,
  navigation,
  navigationMenu,
  navigationMenuItem
} from './styles.ts';
import React, { useCallback, useState } from 'react';
import { CartIcon, UserIcon } from 'shared/assets/icons';
import { SideBar } from '../SideBar/SideBar.tsx';
import { Cart } from 'widget/Cart';
import { useCartContext } from 'widget/Cart';
import { useModal } from 'app/modal';
import { LoginFormModal } from 'features/login';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from 'shared/ui/Avatar';
import { getInitials } from 'shared/utils';
import { Button } from 'shared/ui';
import { logout } from 'entities/auth';

export const Navigation = () => {
  const [isOpenCart, setOpenCart] = useState(false);
  const { cartData } = useCartContext(); // Get cart data

  const { modals, openModal, closeModal } = useModal();
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, []);

  return (
    <>
      <div className={mainNavigationContainer}>
        <div className={navigation}>
          <div className="text-background-secondary text-3xl">KingShop</div>
          <ul className={navigationMenu}>
            <li className={navigationMenuItem}>
              <span className="relative cursor-pointer" onClick={() => setOpenCart(true)}>
                {cartData.length > 0 && (
                  <span className="absolute top-[-4px] right-[-8px] bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {cartData.length}
                  </span>
                )}
                <CartIcon />
              </span>
            </li>
            <li>
              {user && user.firstName && user.lastName ? (
                <Avatar
                  size="sm"
                  imgSrc={user.image}
                  nameInitials={getInitials(`${user.firstName} ${user.lastName}`)}
                />
              ) : (
                <span className="relative cursor-pointer" onClick={() => openModal('loginModal')}>
                  <UserIcon />
                </span>
              )}
            </li>

            {user && user.firstName && user.lastName ? (
              <li className={navigationMenuItem}>
                <Button
                  label="Logout"
                  shape="rounded"
                  color="primary"
                  onClick={handleLogout}
                  size="md"
                />
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      {isOpenCart && (
        <SideBar position="right" isOpen={isOpenCart} handleClose={() => setOpenCart(false)}>
          <Cart />
        </SideBar>
      )}

      {modals.loginModal && (
        <LoginFormModal isOpen={modals.loginModal} onCloseModal={() => closeModal('loginModal')} />
      )}
    </>
  );
};
