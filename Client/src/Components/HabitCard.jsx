import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useSelector} from "react-redux";
import {useGetHistoryIndex, useTimeManager} from "@utilities/UtilitiesAux.jsx";
import {LocalDelete} from "../Store/Slices/UserData/thunks.js";

export const HabitCard = ({name, icon, color, goal, id, history}) => {
    const navigate = useNavigate();
    //const {LocalDelete} = useContext(UserContext);
    const {Colors} = useSelector(state => state.assets)
    const [expandMenu, setExpandMenu] = useState(false);
    const {currentDate} = useTimeManager();
    const formattedDate = currentDate.month + '/' + currentDate.day + '/' + currentDate.year;
    const historyIndex = useGetHistoryIndex(history, formattedDate);

    const ExpandOptions = (event) => {
        event.preventDefault();
        setExpandMenu(!expandMenu);
    }

    const DeleteHabit = (event) => {
        event.preventDefault();
        console.log('Alo');
        LocalDelete(id);
        location.reload();
    }

    const ExpandHabit = () => {
        navigate(`/habit/${id}`);
    }

    return (
        <div className={'flex w-[100%]'}>
            <div className={`${Colors[color].primary} h-16 ${expandMenu ? 'w-[80%]' : 'w-[100%]' } rounded-lg my-1 flex justify-between border-2 hover:cursor-pointer `} onClick={ExpandHabit} onContextMenu={ExpandOptions}>
                <div className={'flex justify-around'}>
                    <img className={'w-8 h-8 my-auto ml-4'} src={`http://192.168.100.45/${icon}.png`}/>
                    <div className={'my-auto ml-4'}>{name}</div>
                </div>
                <div className={'my-auto mr-4 right-0'}>
                    0 / {goal.number} {goal.unit}
                </div>
            </div>
            {
                expandMenu && <>
                    <div className={`${Colors[color].primary} w-16 h-16 my-1 border-2 hover:cursor-pointer flex justify-center items-center ml-3`}>
                        ...
                    </div>
                    <div className={`${Colors[color].primary} w-16 h-16 my-1 border-2 hover:cursor-pointer flex justify-center items-center ml-3`} onClick={DeleteHabit}>
                        <img className={'w-8 h-8'} src={`http://192.168.100.45/Remove-habit.png`}/>
                    </div>
                </>
            }
        </div>
    )
}