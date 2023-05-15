import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useGetHabit, useGetHistoryIndex, useTimeManager} from "@utilities/UtilitiesAux.jsx";
import {deleteHabit} from "@userData/userDataSlice.js";
import {useTranslateColor} from "@utilities/useTranslateColor.jsx";

export const HabitCard = ({name, icon, color, goal, id, history}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {Colors} = useSelector(state => state.assets);
    const {index, data}= useGetHabit(id);
    const {formattedDate} = useTimeManager();
    const {historyIndex} = useGetHistoryIndex(history, formattedDate);
    const {fixedPrimaryColor, fixedSecondaryColor} = useTranslateColor(Colors[color].primary, Colors[color].secondary);
    const [expandMenu, setExpandMenu] = useState(false);


    const ExpandOptions = (event) => {
        event.preventDefault();
        setExpandMenu(!expandMenu);
    }

    const DeleteHabit = (event) => {
        event.preventDefault();
        dispatch(deleteHabit({habitID: id}));
    }

    const ExpandHabit = () => {
        navigate(`/habit/${id}`);
    }

    return (
        <div className={'flex w-[100%]'}>
            <div className={`${Colors[color].primary} h-16 ${expandMenu ? 'w-[80%]' : 'w-[100%]' } rounded-lg my-1 flex justify-between border-2 hover:cursor-pointer `} onClick={ExpandHabit} onContextMenu={ExpandOptions}>
                <div className={'flex justify-around'}>
                    <img className={'w-8 h-8 my-auto ml-4'} src={`/src/images/${icon}.png`} alt={'BackArrow'}/>
                    <div className={'my-auto ml-4'}>{name}</div>
                </div>
                <div className={'my-auto mr-4 right-0'}>
                    {history[historyIndex].progress} / {goal.number} {goal.unit}
                </div>
            </div>
            {
                expandMenu && <>
                    <div className={`${Colors[color].primary} w-16 h-16 my-1 border-2 hover:cursor-pointer flex justify-center items-center ml-3`}>
                        ...
                    </div>
                    <div className={`${Colors[color].primary} w-16 h-16 my-1 border-2 hover:cursor-pointer flex justify-center items-center ml-3`} onClick={DeleteHabit}>
                        <img className={'w-8 h-8'} src={`/src/images/Remove-habit.png`} alt={'RemoveHabit'}/>
                    </div>
                </>
            }
        </div>
    )
}