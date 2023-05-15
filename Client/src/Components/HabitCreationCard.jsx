import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

export const HabitCreationCard = ({name, icon, color, category}) => {
    const navigate = useNavigate();
    const {Colors} = useSelector(state => state.assets);

    const ExpandHabit = () => {
        navigate(`/habit/new/${category}/${name}/${icon}/${color}`);
    }

    return (
        <div className={`${Colors[color].primary} h-16 rounded-lg my-1 flex justify-between border-2 hover:cursor-pointer `} onClick={ExpandHabit}>
            <div className={'flex justify-around'}>
                <img className={'w-8 h-8 my-auto ml-4'} src={`/src/images/${icon}.png`} alt={icon}/>
                <div className={'my-auto ml-4'}>{name}</div>
            </div>
            <img className={'w-6 h-6 my-auto mr-4 right-0 rotate-180'} src={'/src/images/BackArrow.png'} alt={'ForwardArrow'}/>
        </div>
    );
}