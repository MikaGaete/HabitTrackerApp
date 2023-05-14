import {configureStore} from "@reduxjs/toolkit";
import {authSlice} from "@auth/authSlice.js";
import {assetsSlice} from "@assets/assetsSlice.js";
import {userDataSlice} from "@userData/userDataSlice.js";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        assets: assetsSlice.reducer,
        userData: userDataSlice.reducer
    }
})