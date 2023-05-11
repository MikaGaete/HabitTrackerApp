import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogged: false,
        token: '',
        username: '',
        email: '',
        isLoading: false
    },
    reducers: {
        startAuth: (state) => {
            state.isLoading = true;
        },
        login: (state, action) => {
            state.isLogged = true;
            state.token = action.payload.token;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.isLoading = false;
        },
        logout: (state) => {
            state.isLogged = false;
            state.token = '';
            state.username = '';
            state.email = '';
        }
    }
})

export const {startAuth, login, logout} = authSlice.actions;