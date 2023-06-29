import {Link, useParams} from "react-router-dom";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import {useGetHabit, useGetHistoryIndex, useTimeManager, useTranslateColor} from "@utilities/UtilitiesAux.jsx";
import {useDispatch, useSelector} from "react-redux";
import {UpdateHabitProgress} from "@userData/thunks.js";

export const HabitPage = () => {
    const {id} = useParams();
    const {index, data}= useGetHabit(id);
    const {formattedDate} = useTimeManager();
    const {historyIndex} = useGetHistoryIndex(data.history, formattedDate);
    const {Colors} = useSelector(state => state.assets);
    const {rgbPrimaryColor, rgbSecondaryColor} = useTranslateColor(Colors[data.color].primary, Colors[data.color].secondary);
    const dispatch = useDispatch();

    const updateProgress = (event) => {
        event.preventDefault();
        const newProgress = prompt('Enter the habit progression');

        if (newProgress !== null) {
            dispatch(UpdateHabitProgress({index, historyIndex, newProgress}))
        }
    }

    return (
        data && <div className={'w-[100%] h-full min-h-screen'}>
            <div className={'flex flex-col justify-between min-h-screen h-full p-4'}>
                <div className={'flex flex-row justify-between w-[100%] lg:w-[90%] mx-auto'}>
                    <Link to={'/'}>
                        <img className={'w-[30px] h-[30px]'} src={'/src/images/BackArrow.png'} alt={'BackArrow'}/>
                    </Link>
                    <div className={'font-bold text-2xl'}>
                        {data.name}
                    </div>
                    <div>
                        <img className={'w-[30px] h-[30px]'} src={'/src/images/Profile.png'} alt={'Profile'}/>
                    </div>
                </div>
                <div className={'flex flex-col justify-around h-auto w-[90%] lg:w-[70%] mx-auto my-auto'}>
                    <div className={'text-center mx-auto my-auto'}>
                        <CircularProgressbar value={(data.history[historyIndex].progress * 100) / data.goal.number} text={`${data.history[historyIndex].progress} / ${data.goal.number} ${data.goal.unit}`} styles={buildStyles({
                            textSize: '9px',
                            pathColor: rgbPrimaryColor,
                            textColor: '#000000',
                            trailColor: rgbSecondaryColor,
                        })} />
                    </div>
                    <button onClick={updateProgress}>
                        <img className={'bg-red rotate-45 mx-auto py-10'} src="/src/images/Add.svg" alt=""/>
                    </button>
                </div>
            </div>
        </div>
    );
}