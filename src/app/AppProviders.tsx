import React from 'react';
import {AppRoutes} from 'app/routes';
import {BrowserRouter as Router} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {Provider} from 'react-redux';
import {store} from './store/store.ts';
import {ModalProvider} from "./modal";
import {CartProvider} from "widget/Cart";

function AppProviders() {
    return (
        <HelmetProvider>
            <Provider store={store}>
                <CartProvider>
                    <ModalProvider>
                        <Router>
                            <AppRoutes/>
                        </Router>
                    </ModalProvider>
                </CartProvider>
            </Provider>
        </HelmetProvider>
    );
}

export default AppProviders;
