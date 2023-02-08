// imports 

import { configureStore } from "@reduxjs/toolkit"
import { counterSlice } from "./slice"

// configure store
export const store = configureStore({
    reducer:{
        counter:counterSlice.reducer
    }
})