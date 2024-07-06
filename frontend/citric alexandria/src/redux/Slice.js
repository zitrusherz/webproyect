import { createSlice } from "@reduxjs/toolkit";

export const origenSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItemToCart: (state, action) => {
            const itemToAdd = action.payload;
            const isItemInCart = state.some(item => item.id === itemToAdd.id);

            if (!isItemInCart) {
                return [...state, itemToAdd];
            }
            return state;
        },
        removeItemFromCart: (state, action) => {
            const itemIdToRemove = action.payload;
            return state.filter(item => item.id !== itemIdToRemove);
        },
        clearCart:(state,action)=>{
            return []
        },
    },
});


export const usuarioSlice = createSlice({
    name: "usuario",
    initialState: {
        loggedIn: false,
        userData: null,
    },
    reducers: {
        login: (state, action) => {
            state.loggedIn = true;
            state.userData = action.payload;
        },
        logout: (state) => {
            state.loggedIn = false;
            state.userData = null;
        },
    },
});

export const { login, logout } = usuarioSlice.actions;





export const { addItemToCart, removeItemFromCart,clearCart } = origenSlice.actions;


