import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom";
import {AddHabit} from "@userData/thunks.js";
import {useCreateRandomString, useCreationFormManager} from "@utilities/UtilitiesAux.jsx";

export const HabitCreationForm = () => {
    const {Colors, Icons, Days} = useSelector(state => state.assets);
    const colors = Object.keys(Colors);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {category, name, icon, color} = useParams();
    const [selectedAttributes, dayArray, notifications, notificationArray, AddManager, ChangesManager] = useCreationFormManager(category, name, icon, color);

    const onSubmit = async (event) => {
        event.preventDefault();

        dispatch(AddHabit({
            id: useCreateRandomString(10),
            type: selectedAttributes.type,
            name: selectedAttributes.name,
            icon: selectedAttributes.icon,
            color: selectedAttributes.color,
            goal: {
                number: selectedAttributes.goalValue,
                unit: selectedAttributes.goalUnit
            },
            frequency: selectedAttributes.days,
            reminders: selectedAttributes.notifications,
            message: "",
            history: []
        }));

        navigate('/');
    }

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
                                <select className={`h-16 rounded-lg my-1 flex justify-between border-2 p-4 w-auto lg:w-[78%] mr-2`} name={'color'} defaultValue={color} onChange={ChangesManager}>
                                    {colors.map(Color => (
                                        <option key={Color} value={Color} className={'capitalize'}>
                                            {Color}
                                        </option>
                                    ))}
                                </select>
                                <div className={`${Colors[selectedAttributes.color].primary} h-16 w-16 p-4 rounded-lg my-1 flex justify-between border-2`}/>
                            </div>
                        </div>
                        <div className={'w-[48%]'}>
                            <legend>Icon</legend>
                            <div className={'flex justify-between'}>
                                <select className={`h-16 rounded-lg my-1 flex justify-between border-2 p-4 w-auto lg:w-[78%] mr-2`} name={'icon'} defaultValue={icon} onChange={ChangesManager}>
                                    {Icons.map(Icon => (
                                        <option key={Icon} value={Icon}>
                                            {Icon}
                                        </option>
                                    ))}
                                </select>
                                <img alt={selectedAttributes.icon} className={'w-16 h-16 my-auto ml-4'} src={`/src/images/${selectedAttributes.icon}.png`}/>
                            </div>
                        </div>
                    </div>
                    <div className={'w-full'}>
                        <legend>Name</legend>
                        <input className={`h-16 rounded-lg my-1 flex justify-between border-2 p-4 w-full`} name={'name'} type={'text'} onChange={ChangesManager} defaultValue={name} required/>
                    </div>
                    <div className={'w-full flex flex-row justify-between'}>
                        <div className={'flex flex-col w-[48%]'}>
                            <legend>Goal</legend>
                            <input className={`h-16 rounded-lg my-1 flex justify-between border-2 p-4 w-full`} step={0.1} name={'goalValue'} type={'number'} onChange={ChangesManager} required/>
                        </div>
                        <div className={'flex flex-col w-[48%]'}>
                            <legend>Goal Unit</legend>
                            <input className={`h-16 rounded-lg my-1 flex justify-between border-2 p-4 w-full`} name={'goalUnit'} type={'text'} onChange={ChangesManager} required/>
                        </div>
                    </div>
                    <div className={'w-full flex justify-between'}>
                        <div className={'w-[48%]'}>
                            <legend>Days Assigned</legend>
                            <div>
                                {
                                    dayArray.map((number) =>
                                        <select key={number} className={`h-16 rounded-lg my-1 flex justify-between border-2 p-4 w-full`} name={'days' + number} defaultValue={'Select a day'} onChange={ChangesManager}>
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
                                {dayArray.length < 7 && <button className={`h-16 rounded-lg my-auto mx-auto flex justify-center items-center border-2 w-16 text-2xl`} name={'days'} onClick={AddManager}> + </button>}
                            </div>
                        </div>
                        <div className={'w-[48%]'}>
                            <legend>Notifications{notifications ? '' : '?'}</legend>
                            {notifications ?
                                <div>
                                    {
                                        notificationArray.map((number) =>
                                            <input key={number} className={`h-16 rounded-lg my-1 flex justify-between border-2 p-4 w-full`} name={'notifications' + number} type={'time'} onChange={ChangesManager}/>
                                        )
                                    }
                                    {notificationArray.length < 7 && <button className={`h-16 rounded-lg my-auto mx-auto flex justify-center items-center border-2 w-16 text-2xl`} name={'notifications'} onClick={AddManager}> + </button>}
                                </div> :
                                <button className={`h-16 rounded-lg my-auto mx-auto flex justify-center items-center border-2 w-16 text-2xl`} name={'notifications'} onClick={AddManager}> + </button>
                            }
                        </div>
                    </div>
                    <div className={' flex flex-col justify-around h-full w-full mx-auto my-2'}>
                        <button className={`${Colors[selectedAttributes.color].primary} h-16 rounded-lg my-1 flex justify-center items-center font-semibold border-2 hover:cursor-pointer`} type={'submit'}>
                            Create Habit!
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}