import {Link, useParams} from "react-router-dom";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import {useGetHabit, useGetHistoryIndex, useTimeManager} from "@utilities/UtilitiesAux.jsx";
import {useDispatch} from "react-redux";
import {updateHabitProgress, updateLocalSave} from "@userData/userDataSlice.js";

export const HabitPage = () => {
    const {id} = useParams();
    const habit = useGetHabit(id);
    const {formattedDate} = useTimeManager();
    const historyIndex = useGetHistoryIndex(habit.data.history, formattedDate);
    const dispatch = useDispatch();

    const updateProgress = (event) => {
        event.preventDefault();
        const newProgress = prompt('Enter the habit progression');
        const habitIndex = habit.index;

        if (newProgress !== null) {
            dispatch(updateHabitProgress({habitIndex, historyIndex, newProgress}));
            dispatch(updateLocalSave());
        }
    }

    return (
        habit && <div className={'w-[100%] h-full min-h-screen'}>
            <div className={'flex flex-col justify-between min-h-screen h-full p-4'}>
                <div className={'flex flex-row justify-between w-[100%] lg:w-[90%] mx-auto'}>
                    <Link to={'/'}>
                        <img className={'w-[30px] h-[30px]'} src={'/src/images/BackArrow.png'}/>
                    </Link>
                    <div className={'font-bold text-2xl'}>
                        {habit.name}
                    </div>
                    <div>
                        <img className={'w-[30px] h-[30px]'} src={'/src/images/Profile.png'}/>
                    </div>
                </div>
                <div className={'flex flex-col justify-around h-full w-[90%] lg:w-[70%] mx-auto my-auto'}>
                    <div className={'text-center mx-auto my-auto'}>
                        <CircularProgressbar value={50} text={`${habit.data.history[historyIndex].progress} / ${habit.data.goal.number} ${habit.data.goal.unit}`} styles={buildStyles({
                            textSize: '15px',
                            pathColor: `rgba(0, 0, 0, 1)`,
                            textColor: '#000000',
                            trailColor: '#d6d6d6',
                        })} />
                    </div>
                    <button className={'bg-amber-600 w-10 h-10 mx-auto mt-5 rounded-3xl'} onClick={updateProgress}>
                    </button>
                </div>
            </div>
        </div>
    );
}