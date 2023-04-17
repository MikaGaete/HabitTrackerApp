import {UserContext} from "./UserContext.jsx";
import {useEffect, useState} from "react";

export const UserProvider = ({children}) => {
    const [habits, setHabits] = useState(JSON.parse(localStorage.getItem('HabitTrackerAppData')) || []);

    useEffect(() => {
        localStorage.removeItem('HabitTrackerAppData');
        localStorage.setItem('HabitTrackerAppData', JSON.stringify(habits));
    }, [habits]);

    const LocalSave = async (habit) => {
        await setHabits([
            ...habits,
            habit
        ])
    }

    const LocalDelete = async (habitID) => {
        const tempArray = habits;
        for (let i = 0; i < habits.length; i++) {
            if (habits[i].id === habitID) {
                tempArray.splice(i, 1);
            }
        }
        await setHabits(tempArray);
        localStorage.removeItem('HabitTrackerAppData');
        localStorage.setItem('HabitTrackerAppData', JSON.stringify(habits));
    }

    return (
        <UserContext.Provider value={{habits, LocalSave, LocalDelete}}>
            {children}
        </UserContext.Provider>
    )
}