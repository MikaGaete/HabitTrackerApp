import {Link, useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addHabit, updateLocalSave} from "@userData/userDataSlice.js";

export const HabitCreationForm = () => {
    const {Colors, Icons} = useSelector(state => state.assets);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {category, name, icon, color} = useParams();
    const [notifications, setNotifications] = useState(false);
    const [notificationArray, setNotificationArray] = useState([]);
    const [dayArray, setDayArray] = useState([0]);
    const [selectedAtributes, setSelectedAtributes] = useState({
        type: category,
        name: name,
        icon: icon,
        color: color,
        goalValue: 0,
        goalUnit: "",
        notifications: [],
        days: []
    });

    const makeid = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    const Days = ['Select a day', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    const ArrayUpdate = (event, tempArray) => {
        tempArray[event.target.name.slice(event.target.name.length - 1)] = event.target.value;
        setSelectedAtributes({
            ...selectedAtributes,
            [event.target.name.slice(0, event.target.name.length - 1)]: tempArray
        })
    }

    const changesManager = (event) => {
        event.preventDefault();
        if (event.target.name.slice(0, event.target.name.length - 1) === 'notifications') {
            const aux = selectedAtributes.notifications;
            ArrayUpdate(event, aux);
        }
        else if (event.target.name.slice(0, event.target.name.length - 1) === 'days') {
            const aux = selectedAtributes.days;
            ArrayUpdate(event, aux);
        }
        else {
            setSelectedAtributes({
                ...selectedAtributes,
                [event.target.name]: event.target.value,
            })
        }
    }

    const addManager = (event) => {
        event.preventDefault();
        if (event.target.name === 'notifications') {
            if (notificationArray.length === 0) {
                setNotifications(true);
            }
            setNotificationArray([...notificationArray, notificationArray.length]);
        }
        if (event.target.name === 'days') {
            if (dayArray.length === 7) return;
            setDayArray([...dayArray, dayArray.length]);
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        dispatch(addHabit({
            id: makeid(10),
            type: selectedAtributes.type,
            name: selectedAtributes.name,
            icon: selectedAtributes.icon,
            color: selectedAtributes.color,
            goal: {
                number: selectedAtributes.goalValue,
                unit: selectedAtributes.goalUnit
            },
            frequency: selectedAtributes.days,
            reminders: selectedAtributes.notifications,
            message: "",
            history: []
        }))
        dispatch(updateLocalSave());

        navigate('/');
    }
    const colors = Object.keys(Colors);
    return (
        <div className={'w-[100%] h-full min-h-screen'}>
            <div className={'flex flex-col justify-between min-h-screen h-full p-4'}>
                <div className={'flex flex-row justify-between w-[100%] lg:w-[90%] mx-auto'}>
                    <Link to={'/habit/new'}>
                        <img className={'w-[30px] h-[30px]'} src={'/src/images/BackArrow.png'} alt={'BackArrow'}/>
                    </Link>
                    <div className={'font-bold text-2xl'}>
                        New Habit
                    </div>
                    <div>
                        <img className={'w-[30px] h-[30px]'} src={'/src/images/Profile.png'} alt={'Profile'}/>
                    </div>
                </div>
                <form className={' flex flex-col justify-around h-full w-[90%] lg:w-[50%] mx-auto my-2'} onSubmit={onSubmit}>
                    <div className={'flex justify-between w-full'}>
                        <div className={'w-[48%]'}>
                            <legend>Color</legend>
                            <div className={'flex justify-between'}>
                                <select className={`h-16 rounded-lg my-1 flex justify-between border-2 p-4 w-auto lg:w-[78%] mr-2`} name={'color'} defaultValue={color} onChange={changesManager}>
                                    {colors.map(Color => (
                                        <option key={Color} value={Color} className={'capitalize'}>
                                            {Color}
                                        </option>
                                    ))}
                                </select>
                                <div className={`${Colors[selectedAtributes.color].primary} h-16 w-16 p-4 rounded-lg my-1 flex justify-between border-2`}/>
                            </div>
                        </div>
                        <div className={'w-[48%]'}>
                            <legend>Icon</legend>
                            <div className={'flex justify-between'}>
                                <select className={`h-16 rounded-lg my-1 flex justify-between border-2 p-4 w-auto lg:w-[78%] mr-2`} name={'icon'} defaultValue={icon} onChange={changesManager}>
                                    {Icons.map(Icon => (
                                        <option key={Icon} value={Icon}>
                                            {Icon}
                                        </option>
                                    ))}
                                </select>
                                <img className={'w-16 h-16 my-auto ml-4'} src={`/src/images/${selectedAtributes.icon}.png`}/>
                            </div>
                        </div>
                    </div>
                    <div className={'w-full'}>
                        <legend>Name</legend>
                        <input className={`h-16 rounded-lg my-1 flex justify-between border-2 p-4 w-full`} name={'name'} type={'text'} onChange={changesManager} defaultValue={name} required/>
                    </div>
                    <div className={'w-full flex flex-row justify-between'}>
                        <div className={'flex flex-col w-[48%]'}>
                            <legend>Goal</legend>
                            <input className={`h-16 rounded-lg my-1 flex justify-between border-2 p-4 w-full`} step={0.1} name={'goalValue'} type={'number'} onChange={changesManager} required/>
                        </div>
                        <div className={'flex flex-col w-[48%]'}>
                            <legend>Goal Unit</legend>
                            <input className={`h-16 rounded-lg my-1 flex justify-between border-2 p-4 w-full`} name={'goalUnit'} type={'text'} onChange={changesManager} required/>
                        </div>
                    </div>
                    <div className={'w-full flex justify-between'}>
                        <div className={'w-[48%]'}>
                            <legend>Days Assigned</legend>
                            <div>
                                {
                                    dayArray.map((number) =>
                                        <select key={number} className={`h-16 rounded-lg my-1 flex justify-between border-2 p-4 w-full`} name={'days' + number} defaultValue={'Select a day'} onChange={changesManager}>
                                            {
                                                Days.map(Day => (
                                                    <option key={Day} value={Day} disabled={Day === 'Select a day' ? 'disabled' : ""}>
                                                        {Day}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                    )
                                }
                                {dayArray.length < 7 && <button className={`h-16 rounded-lg my-auto mx-auto flex justify-center items-center border-2 w-16 text-2xl`} name={'days'} onClick={addManager}> + </button>}
                            </div>
                        </div>
                        <div className={'w-[48%]'}>
                            <legend>Notifications{notifications ? '' : '?'}</legend>
                            {notifications ?
                                <div>
                                    {
                                        notificationArray.map((number) =>
                                            <input key={number} className={`h-16 rounded-lg my-1 flex justify-between border-2 p-4 w-full`} name={'notifications' + number} type={'time'} onChange={changesManager}/>
                                        )
                                    }
                                    {notificationArray.length < 7 && <button className={`h-16 rounded-lg my-auto mx-auto flex justify-center items-center border-2 w-16 text-2xl`} name={'notifications'} onClick={addManager}> + </button>}
                                </div> :
                                <button className={`h-16 rounded-lg my-auto mx-auto flex justify-center items-center border-2 w-16 text-2xl`} name={'notifications'} onClick={addManager}> + </button>
                            }
                        </div>
                    </div>
                    <div className={' flex flex-col justify-around h-full w-full mx-auto my-2'}>
                        <button className={`${Colors[selectedAtributes.color].primary} h-16 rounded-lg my-1 flex justify-center items-center font-semibold border-2 hover:cursor-pointer`} type={'submit'}>
                            Create Habit!
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}