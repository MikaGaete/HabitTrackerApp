import {configureStore} from "@reduxjs/toolkit";
import {authSlice} from "./Slices/Auth/authSlice.js";
import {assetsSlice} from "./Slices/Assets/assetsSlice.js";
import {userDataSlice} from "./Slices/UserData/userDataSlice.js";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        assets: assetsSlice.reducer,
        userData: userDataSlice.reducer
    }
})