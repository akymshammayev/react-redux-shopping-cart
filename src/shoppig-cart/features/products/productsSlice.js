import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const response  = await axios.get("https://fakestoreapi.com/products");
        return [...response.data]
    } catch (err) {
        return err.message
    }
})
const productsSlice = createSlice({
    name:'products',
    initialState:{
        products:[],
        status:'idle', //'idle' | 'pending' | 'succeeded' | 'failed'
        error:null,
    },
    reducers:{
    },
    extraReducers(builder) {
        builder
        .addCase(fetchProducts.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.products = state.products.concat(action.payload)           
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message;
        })
    }
})
export const selectAllProducts = (state) => state.products.products;
export const selectProductById = (state, productId) => state.products.products.find(product => product.id === productId)
export default productsSlice.reducer