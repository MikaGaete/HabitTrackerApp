import {NewHabitCard} from "@components/NewHabitCard.jsx";
import {useSelector} from "react-redux";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import {useNavigate} from "react-router-dom";

export const NewLanding = () => {
    const navigate = useNavigate();
    const aux = [
        { number: 1, selected: false },
        { number: 2, selected: false },
        { number: 3, selected: false },
        { number: 4, selected: false },
        { number: 5, selected: false },
        { number: 6, selected: false },
        { number: 7, selected: true }
    ];
    const {habits} = useSelector(state => state.userData)

    return (
        <div className={'w-[100vw] h-full min-h-screen bg-black'}>
            <div className={'py-8 mx-auto w-[60%] flex justify-between'}>
                {aux.map((obj) =>
                    <div className={`${obj.selected ? 'bg-[#edf2f4] text-black' : 'bg-[#7c7c7c] text-white'} w-12 h-12 rounded-lg flex justify-center items-center`}>
                        {10 + obj.number}
                    </div>
                )}
            </div>
            <div className={'text-white mx-auto w-[80%] flex justify-between'}>
                <div className={'flex flex-col w-[48%]'}>
                    <div>Hola</div>
                    <div className={'grid grid-cols-2 gap-4'}>
                        {habits.map(habit => <NewHabitCard key={habit.name + habit.goal.number} {...habit}/>)}
                        <div className={`bg-gray-700 h-16 rounded-lg my-1 flex border-2 hover:cursor-pointer text-sm`} onClick={() => navigate('/habit/new')}>
                            <div className={'flex justify-center items-center w-full gap-2'}>
                                <img className={'w-7 h-7 my-auto rotate-45'} src={`/src/images/Add.svg`} alt={'BackArrow'}/>
                                <div className={'my-auto'}>{'Add New Habit'}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col bg-blue-900 w-[48%]'}>
                    <div>Widgets</div>
                    <div>
                        <div>a</div>
                        <div>b</div>
                    </div>
                </div>
            </div>
        </div>
    )
}