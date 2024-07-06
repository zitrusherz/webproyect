import {configureStore} from "@reduxjs/toolkit";
import { origenSlice, usuarioSlice } from "./Slice";

export default configureStore({
    reducer:{
        cart:origenSlice.reducer,
        usuario:usuarioSlice.reducer
    }
})
