import {addHabit, deleteHabit, updateHabitHistory, updateHabitProgress, updateLocalSave} from "./userDataSlice.js";

export const AddHabit = (habit) => {
    return async (dispatch) => {
        dispatch(addHabit(habit));
        dispatch(updateLocalSave());
    }
}

export const DeleteHabit = (props) => {
    return async (dispatch) => {
        dispatch(deleteHabit(props));
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