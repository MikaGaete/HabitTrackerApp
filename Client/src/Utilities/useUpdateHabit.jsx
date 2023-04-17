import {useContext} from "react";
import {UserContext} from "../UserData/UserContext.jsx";

export const useUpdateHabit = () => {
    const {habits} = useContext(UserContext);

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