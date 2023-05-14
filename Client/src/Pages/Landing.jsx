import {useEffect, useState} from "react";
import {HabitCard} from "@components/HabitCard.jsx";
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {Link} from "react-router-dom";
import {Notifications, useTimeManager} from "@utilities/UtilitiesAux.jsx";
import {useDispatch, useSelector} from "react-redux";
import {updateHabitHistory, updateLocalSave} from "@userData/userDataSlice.js";

export const Landing = () => {
    const {currentDate, currentTime, Time} = useTimeManager();
    const {habits} = useSelector(state => state.userData)
    const [historyReady, setHistoryReady] = useState(false);
    const not = new Notifications();
    const dispatch = useDispatch();
    not.componentDidMount();

    useEffect(() => {
        for (let i = 0; i < habits.length - 1; i++) {
            habits[i].frequency.forEach((day) => {
                if (day === (new Intl.DateTimeFormat("en-US", {weekday: "long"}).format(Time))) {
                    habits[i].reminders.forEach((reminder) => {
                        const time = reminder.split(':');
                        if (Number(time[0]) === currentTime.hours && Number(time[1]) === currentTime.minutes) {
                            not.showNotification(habits[i].name, habits[i].icon, habits[i].message)
                        }
                    })
                }
            })
        }
    }, [currentTime]);

    useEffect(() => {
        const formattedDate = currentDate.month + '/' + currentDate.day + '/' + currentDate.year;

        dispatch(updateHabitHistory(formattedDate));
        dispatch(updateLocalSave());
        setHistoryReady(true);
    }, [currentDate]);

    return (
        historyReady && <div className={'w-[100vw] h-full min-h-screen'}>
            <div className={'flex flex-col justify-between min-h-screen h-full p-4'}>
                <div className={'flex flex-col justify-around h-full mx-auto'}>
                    <div className={'mx-auto font-bold text-2xl'}>
                        {
                            currentDate.month === (Time.getMonth() + 1) && currentDate.day === Time.getDate() && currentDate.year === Time.getFullYear() ?
                                'Today' : `${currentDate.month}/${currentDate.day}/${currentDate.year}`
                        }
                    </div>
                    <div className={'text-center w-[45px] h-[45px] mx-auto mt-1'}>
                        <CircularProgressbar value={50} text={new Intl.DateTimeFormat("en-US", {weekday: "narrow"}).format(Time)} styles={buildStyles({
                            textSize: '40px',
                            pathColor: `rgba(0, 0, 0, 1)`,
                            textColor: '#000000',
                            trailColor: '#d6d6d6',
                        })} />
                    </div>
                </div>
                <div className={'flex flex-col justify-around h-full w-[90%] lg:w-[50%] mx-auto'}>
                    {habits.map((habit) => <HabitCard key={habit.name + habit.goal.number} {...habit} />)}
                </div>
                <div className={'flex flex-row justify-around w-[100%] lg:w-[50%] mx-auto bottom-0'}>
                    <Link to={'/habit/new'}  className={'my-auto'}>
                        <img className={'w-[45px] h-[45px] rotate-45 cursor-pointer'} src={'/src/images/Add.svg'}/>
                    </Link>
                    <div>2</div>
                    <div className={'my-auto'}>
                        <img className={'w-[40px] h-[40px]'} src={'/src/images/Profile.png'}/>
                    </div>
                    <div>4</div>
                    <div className={'my-auto'}>
                        <img className={'w-[40px] h-[40px] cursor-pointer'} src={'/src/images/Settings.png'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}