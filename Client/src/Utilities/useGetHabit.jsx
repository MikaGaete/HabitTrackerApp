import {useSelector} from "react-redux";

export const useGetHabit = (id) => {
    const {habits} = useSelector(state => state.useReducer());

    for (let i = 0; i < habits.length; i++) {
        if (habits[i].id === id) {
            return habits[i];
        }
    }
}