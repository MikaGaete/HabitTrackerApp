import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        preference: ''
    },
    reducers: {
        changePreference: (state, action) => {
            console.log(state, action)
            state.preference = action.payload
        }
    }
})

export const {changePreference} = userSlice.actions