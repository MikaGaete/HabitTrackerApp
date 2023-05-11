import {addHabit, deleteHabit, updateLocalSave} from "./userDataSlice.js";

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