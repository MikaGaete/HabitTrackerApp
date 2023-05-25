import {createSlice} from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        habits: JSON.parse(localStorage.getItem('HabitTrackerAppData')) || [],
    },
    reducers: {
        addHabit: (state, action) => {
            state.habits = [...state.habits, action.payload]
        },
        deleteHabit: (state, action) => {
            const tempArray = state.habits;
            for (let i = 0; i < state.habits.length; i++) {
                if (state.habits[i].id === action.payload) {
                    tempArray.splice(i, 1);
                }
            }
            state.habits = tempArray;
        },
        updateHabitHistory: (state, action) => {
            for (let i = 0; i < state.habits.length; i++) {
                let exists = false;
                for (let j = (state.habits[i].history.length - 1); j > -1; j--) {
                    if (state.habits[i].history[j].date === action.payload) {
                        exists = true;
                        break;
                    }
                }
                if (!exists) {
                    state.habits[i].history = [...state.habits[i].history, {date: action.payload, progress: 0}]
                }
            }
        },
        updateHabitProgress: (state, action) => {
            state.habits[action.payload.index].history[action.payload.historyIndex].progress = action.payload.newProgress;
        },
        updateLocalSave: (state) => {
            localStorage.removeItem('HabitTrackerAppData');
            localStorage.setItem('HabitTrackerAppData', JSON.stringify(state.habits));
        }
    }
})

export const {addHabit, deleteHabit, updateHabitHistory, updateHabitProgress, updateLocalSave} = userDataSlice.actions;