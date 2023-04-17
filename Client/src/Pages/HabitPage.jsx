import {Link, useParams} from "react-router-dom";
import {useGetHabit} from "../Utilities/useGetHabit.jsx";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import {useTimeManager} from "../Utilities/useTimeManager.jsx";
import {useGetHistoryIndex} from "../Utilities/useGetHistoryIndex.jsx";
import {useUpdateHabit} from "../Utilities/useUpdateHabit.jsx";

export const HabitPage = () => {
    const {id} = useParams();
    const habit = useGetHabit(id);
    const {currentDate} = useTimeManager();
    const formattedDate = currentDate.month + '/' + currentDate.day + '/' + currentDate.year;
    const historyIndex = useGetHistoryIndex(habit.history, formattedDate);
    const updateHabit = useUpdateHabit();

    const updateProgress = (event) => {
        event.preventDefault();
        habit.history[historyIndex].progress = prompt('Enter the habit progression');
        updateHabit(id, habit);
    }

    return (
        habit && <div className={'w-[100%] h-full min-h-screen'}>
            <div className={'flex flex-col justify-between min-h-screen h-full p-4'}>
                <div className={'flex flex-row justify-between w-[100%] lg:w-[90%] mx-auto'}>
                    <Link to={'/'}>
                        <img className={'w-[30px] h-[30px]'} src={'http://192.168.100.45/BackArrow.png'}/>
                    </Link>
                    <div className={'font-bold text-2xl'}>
                        {habit.name}
                    </div>
                    <div>
                        <img className={'w-[30px] h-[30px]'} src={'http://192.168.100.45/Profile.png'}/>
                    </div>
                </div>
                <div className={'flex flex-col justify-around h-full w-[90%] lg:w-[50%] mx-auto my-auto'}>
                    <div className={'text-center mx-auto my-auto'}>
                        <CircularProgressbar value={50} text={`${habit.history[historyIndex].progress} / ${habit.goal.number} ${habit.goal.unit}`} styles={buildStyles({
                            textSize: '15px',
                            pathColor: `rgba(0, 0, 0, 1)`,
                            textColor: '#000000',
                            trailColor: '#d6d6d6',
                        })} />
                    </div>
                    <div className="flex items-center justify-center -m-6 overflow-hidden bg-white rounded-full">
                        <svg className="w-32 h-32 transform translate-x-1 translate-y-1" x-cloak aria-hidden="true">
                            <circle
                                className="text-gray-300"
                                stroke-width="10"
                                stroke="currentColor"
                                fill="transparent"
                                r="50"
                                cx="60"
                                cy="60"
                            />
                            <circle
                                className="text-blue-600"
                                stroke-width="10"
                                stroke-dasharray="circumference"
                                stroke-dashoffset="circumference - percent / 100 * circumference"
                                stroke-linecap="round"
                                stroke="currentColor"
                                fill="transparent"
                                r="50"
                                cx="60"
                                cy="60"
                            />
                        </svg>
                        <span className="absolute text-2xl text-blue-700" x-text="`${percent}%`"></span>
                    </div>
                    <button className={'bg-amber-600 w-10 h-10 mx-auto mt-5 rounded-3xl'} onClick={updateProgress}>
                    </button>
                </div>
            </div>
        </div>
    );
}