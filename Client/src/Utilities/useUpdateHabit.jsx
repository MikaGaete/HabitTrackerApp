import {useSelector} from "react-redux";

export const useUpdateHabit = () => {
    const {habits} = useSelector(state => state.useReducer());

    const updateHabit = (id, habit) => {
        for (let i = 0; i < habits.length; i++) {
            if (habits[i].id === id) {
                habits[i] = habit;
            }
        }

        localStorage.removeItem('HabitTrackerAppData');
        localStorage.setItem('HabitTrackerAppData', JSON.stringify(habits));

        window.location.reload();
    }

    return updateHabit
}