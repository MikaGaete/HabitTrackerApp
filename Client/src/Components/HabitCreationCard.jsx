import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {HabitsContext} from "../Habits/HabitsContext.jsx";

export const HabitCreationCard = ({name, icon, color, category}) => {
    const navigate = useNavigate();
    const {Colors} = useContext(HabitsContext);


    const ExpandHabit = () => {
        navigate(`/habit/new/${category}/${name}/${icon}/${color}`)
    }

    return (
        <div className={`${Colors[color].primary} h-16 rounded-lg my-1 flex justify-between border-2 hover:cursor-pointer `} onClick={ExpandHabit}>
            <div className={'flex justify-around'}>
                <img className={'w-8 h-8 my-auto ml-4'} src={`http://192.168.100.45/${icon}.png`}/>
                <div className={'my-auto ml-4'}>{name}</div>
            </div>
            <img className={'w-6 h-6 my-auto mr-4 right-0 rotate-180'} src={'http://192.168.100.45/BackArrow.png'}/>
        </div>
    )
}