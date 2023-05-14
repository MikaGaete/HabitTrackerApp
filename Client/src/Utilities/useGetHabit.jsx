import {useSelector} from "react-redux";

export const useGetHabit = (id) => {
    const {habits} = useSelector(state => state.userData);

    for (let i = 0; i < habits.length; i++) {
        if (habits[i].id === id) {
            const data = habits[i];
            const index = i;
            return {index, data};
        }
    }
}