const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name:'carts',
    initialState:{
        cartItems:[],
        totalQuantity:0
    },
    reducers:{
        addCartItem:(state, action) => {
            const itemCart = action.payload
            const existingItem = state.cartItems.find((item) => item.id === itemCart.id)
            if(existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice+=existingItem.price;  
            } else {
                state.cartItems.push({
                    id: itemCart.id,
                    title: itemCart.title,
                    price: itemCart.price,
                    category: itemCart.category,
                    image: itemCart.image,
                    quantity: 1,
                    totalPrice: itemCart.price,
                })
                state.totalQuantity++;
            }
        },
        incrementCartItem:(state, action) => {
            const Id = action.payload;
            state.cartItems.map(item => {
                if(item.id === Id) {
                    item.quantity++;
                    item.totalPrice+=item.price
                    return item;
                } else {
                    return item
                }
            })
        },
        decrementCartItem:(state, action) => {
            const Id = action.payload
            const existingItem = state.cartItems.find(item => item.id === Id)
            if(existingItem.quantity !== 1) {
                existingItem.quantity--;
                existingItem.totalPrice-=existingItem.price
            } else {
                state.cartItems = state.cartItems.filter(item => item.id !== Id)
                state.totalQuantity--;
            }
        },

        deleteCartItem:(state, action) => {
            state.cartItems = state.cartItems.filter(item=> item.id !== action.payload)
        },

    }
})

export const { addCartItem, incrementCartItem, decrementCartItem } = cartSlice.actions

export default cartSlice.reducer
