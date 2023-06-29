import {useSelector} from "react-redux";
import {useTimeManager} from "@utilities/useTimeManager.jsx";
import {useGetHistoryIndex} from "@utilities/useGetHistoryIndex.jsx";
import {useTranslateColor} from "@utilities/useTranslateColor.jsx";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import {useNavigate} from "react-router-dom";

export const NewHabitCard = ({name, icon, color, goal, id, history}) => {
    const {Colors} = useSelector(state => state.assets);
    const {formattedDate} = useTimeManager();
    const {historyIndex} = useGetHistoryIndex(history, formattedDate);
    const {rgbPrimaryColor, rgbSecondaryColor} = useTranslateColor(Colors[color].primary, Colors[color].secondary);
    const navigate = useNavigate();


    const ExpandHabit = (e) => {
        e.preventDefault();
        navigate(`/habit/${id}`);
    }

    return (
        <div className={`${Colors[color].primary} h-16 rounded-lg my-1 flex justify-between border-2 hover:cursor-pointer text-sm`} onClick={ExpandHabit}>
            <div className={'flex justify-around'}>
                <img className={'w-7 h-7 my-auto ml-4'} src={`/src/images/${icon}.png`} alt={'BackArrow'}/>
                <div className={'my-auto ml-3'}>{name}</div>
            </div>
            <div className={'my-auto mr-3 right-0'}>
                <CircularProgressbar className={'h-7'} strokeWidth={20} value={(history[historyIndex].progress * 100) / goal.number} styles={buildStyles({
                    textSize: '1px',
                    strokeWidth: '50',
                    pathColor: '#ffffff',
                    textColor: '#000000',
                    trailColor: rgbSecondaryColor,
                })} />
            </div>
        </div>
    )
}