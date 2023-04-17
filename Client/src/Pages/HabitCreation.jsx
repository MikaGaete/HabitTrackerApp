import {useContext} from "react";
import {HabitsContext} from "../Habits/HabitsContext.jsx";
import {UserContext} from "../UserData/UserContext.jsx";
import {HabitCreationCard} from "../Components/HabitCreationCard.jsx";
import {HabitCard} from "../Components/HabitCard.jsx";
import {Link} from "react-router-dom";

export const HabitCreation = () => {
    const {Habits, Colors} = useContext(HabitsContext);
    const categories = Object.keys(Habits);

    return (
        <div className={'w-[100%] h-full min-h-screen'}>
            <div className={'flex flex-col justify-between min-h-screen h-full p-4'}>
                <div className={'flex flex-row justify-between w-[100%] lg:w-[90%] mx-auto'}>
                    <Link to={'/'}>
                        <img className={'w-[30px] h-[30px]'} src={'http://192.168.100.45/BackArrow.png'}/>
                    </Link>
                    <div className={'font-bold text-2xl'}>
                        New Habit
                    </div>
                    <div>
                        <img className={'w-[30px] h-[30px]'} src={'http://192.168.100.45/Profile.png'}/>
                    </div>
                </div>
                <div className={'flex flex-col justify-around h-full w-[90%] lg:w-[50%] mx-auto my-2'}>
                    {categories.map(category => (
                        <div key={category}>
                            <div className={'font-semibold text-xl'}>
                                {category}
                            </div>
                            {Habits[category].map(habit =>
                                <HabitCreationCard key={habit.name} category={category} {...habit}/>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}