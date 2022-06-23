import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/carts/cartSlice";
import productsSlice from "../features/products/productsSlice";

export const store = configureStore({
    reducer:{
        products: productsSlice,
        carts: cartSlice,
    }
})