import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './shoppig-cart/App';
import {store} from './shoppig-cart/store/index'
import { fetchProducts } from './shoppig-cart/features/products/productsSlice';
store.dispatch(fetchProducts())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);


