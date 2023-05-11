import {createSlice} from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        habits: JSON.parse(localStorage.getItem('HabitTrackerAppData')) || [],
    },
    reducers: {
        addHabit: (state, action) => {
            console.log(action)
            state.habits = [...state.habits, action.payload]
        },
        deleteHabit: (state, action) => {
            const tempArray = state.habits;
            for (let i = 0; i < state.habits.length; i++) {
                if (state.habits[i].id === action.payload.habitID) {
                    tempArray.splice(i, 1);
                }
            }
            state.habits = tempArray;
        },
        updateLocalSave: (state) => {
            localStorage.removeItem('HabitTrackerAppData');
            localStorage.setItem('HabitTrackerAppData', JSON.stringify(state.habits));
        }
    }
})

export const {addHabit, deleteHabit, updateLocalSave} = userDataSlice.actions;