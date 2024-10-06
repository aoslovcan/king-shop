import React from 'react';
import { AppRoutes } from 'app/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { ModalProvider } from './modal';
import { CartProvider } from 'widget/Cart';
import { NotificationProvider } from './notification';

function AppProviders() {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <NotificationProvider>
          <CartProvider>
            <ModalProvider>
              <Router>
                <AppRoutes />
              </Router>
            </ModalProvider>
          </CartProvider>
        </NotificationProvider>
      </Provider>
    </HelmetProvider>
  );
}

export default AppProviders;
