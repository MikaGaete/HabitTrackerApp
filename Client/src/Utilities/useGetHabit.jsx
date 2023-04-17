import {useContext} from "react";
import {UserContext} from "../UserData/UserContext.jsx";

export const useGetHabit = (id) => {
    const {habits} = useContext(UserContext);

    for (let i = 0; i < habits.length; i++) {
        if (habits[i].id === id) {
            return habits[i];
        }
    }
}