import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./Slices/User/userSlice.js";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
})