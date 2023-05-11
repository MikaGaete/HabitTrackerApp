import {login, logout, startAuth} from "./authSlice.js";


export const setCredentials = (userData) => {
    return async (dispatch) => {
        dispatch(startAuth());
        dispatch(login(userData));
    }
}

export const dropCredentials = () => {
    return async (dispatch) => {
        dispatch(logout());
    }
}