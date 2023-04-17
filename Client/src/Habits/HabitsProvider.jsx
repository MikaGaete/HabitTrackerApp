import {HabitsContext} from './HabitsContext'
export const HabitsProvider = ({children}) => {

    const Colors = {
        Red: {
            primary: 'bg-red-500',
            secondary: 'bg-red-300'
        },
        Orange: {
            primary: 'bg-orange-500',
            secondary: 'bg-orange-300'
        },
        Amber: {
            primary: 'bg-amber-500',
            secondary: 'bg-amber-300'
        },
        Yellow: {
            primary: 'bg-yellow-500',
            secondary: 'bg-yellow-300'
        },
        Lime: {
            primary: 'bg-lime-500',
            secondary: 'bg-lime-300'
        },
        Green: {
            primary: 'bg-green-500',
            secondary: 'bg-green-300'
        },
        Emerald: {
            primary: 'bg-emerald-500',
            secondary: 'bg-emerald-300'
        },
        Teal: {
            primary: 'bg-teal-500',
            secondary: 'bg-teal-300'
        },
        Cyan: {
            primary: 'bg-cyan-500',
            secondary: 'bg-cyan-300'
        },
        Sky: {
            primary: 'bg-sky-500',
            secondary: 'bg-sky-300'
        },
        Blue: {
            primary: 'bg-blue-500',
            secondary: 'bg-blue-300'
        },
        Purple: {
            primary: 'bg-purple-600',
            secondary: 'bg-purple-400'
        },
        Fuchsia: {
            primary: 'bg-fuchsia-500',
            secondary: 'bg-fuchsia-300'
        },
        Pink: {
            primary: 'bg-pink-500',
            secondary: 'bg-pink-300'
        },
    }

    const Icons = [
        'Running', 'Cycling', 'Play-soccer', 'Swimming',
        'Train-abs', 'Train-chest', 'Train-legs', 'Train-shoulders',
        'Train-torso', 'Water', 'Creatine', 'Pre-workout',
        'Meditation', 'Coding', 'Reading', 'Studying',
        'Singing', 'Walter-white'
    ]

    const Habits = {
        Sports: [
            {
                name: "Walk",
                icon: "Running",
                color: "Red"
            },
            {
                name: "Run",
                icon: "Running",
                color: "Orange"
            },
            {
                name: "Cycling",
                icon: "Cycling",
                color: "Amber",
            },
            {
                name: "Play Soccer",
                icon: "Play-soccer",
                color: "Yellow",
            },
            {
                name: "Swimming",
                icon: "Swimming",
                color: "Lime",
            },
            {
                name: "Train Abs",
                icon: "Train-abs",
                color: "Green",
            },
            {
                name: "Train Chest",
                icon: "Train-chest",
                color: "Emerald",
            },
            {
                name: "Train Legs",
                icon: "Train-legs",
                color: "Teal",
            },
            {
                name: "Train Shoulders",
                icon: "Train-shoulders",
                color: "Cyan",
            },
            {
                name: "Train Torso",
                icon: "Train-torso",
                color: "Sky"
            }
        ],
    "Health and Wellbeing": [
        {
            name: "Drink Water",
            icon: "Water",
            color: "Blue"
        },
        {
            name: "Drink Creatine",
            icon: "Creatine",
            color: "Purple"
        },
        {
            name: "Drink Pre-Workout",
            icon: "Pre-workout",
            color: "Fuchsia"
        },
        {
            name: "Meditation",
            icon: "Meditation",
            color: "Pink"
        }
    ],
    Learning: [
        {
            name: "Coding",
            icon: "Coding",
            color: "Red"
        },
        {
            name: "Reading",
            icon: "Reading",
            color: "Orange"
        },
        {
            name: "Studying",
            icon: "Studying",
            color: "Amber"
        }
    ],
    Leisure: [
        {
            name: "Singing",
            icon: "Singing",
            color: "Fuchsia"
        },
        {
            name: "Watch Series",
            icon: "Walter-white",
            color: "Pink"
        }
    ],
    };

    return (
        <HabitsContext.Provider value={{Habits: Habits, Colors: Colors, Icons: Icons}}>
            {children}
        </HabitsContext.Provider>
    )
}