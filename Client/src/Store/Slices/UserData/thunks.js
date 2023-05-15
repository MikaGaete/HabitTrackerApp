import {addHabit, deleteHabit, updateHabitHistory, updateHabitProgress, updateLocalSave} from "./userDataSlice.js";

export const LocalSave = (habit) => {
    console.log('llegue')
    return async (dispatch) => {
        dispatch(addHabit(habit));
        dispatch(updateLocalSave());
    }
}

export const LocalDelete = (habitID) => {
    return async (dispatch) => {
        dispatch(deleteHabit(habitID));
        dispatch(updateLocalSave());
    }
}

export const UpdateHabitProgress = (props) => {
    return async (dispatch) => {
        dispatch(updateHabitProgress(props));
        dispatch(updateLocalSave());
    }
}

export const UpdateHabitHistory = (props) => {
    return async (dispatch) => {
        dispatch(updateHabitHistory(props));
        dispatch(updateLocalSave());
    }
}