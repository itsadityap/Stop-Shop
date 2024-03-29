import React from 'react';
import ReactDOM from 'react-dom/client';
import './indexs.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {UserProvider} from "./contexts/user.context";
import {CategoriesProvider} from "./contexts/categories.context";
import {CartProvider} from "./contexts/cart.context";
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/stripe/stripe.utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
              <UserProvider>
                  <CategoriesProvider>
                      <CartProvider>
                        <Elements stripe={stripePromise}>
                            <App/>
                        </Elements>
                      </CartProvider>
                  </CategoriesProvider>
              </UserProvider>
      </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
