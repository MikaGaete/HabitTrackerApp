import {useState} from "react";

export const useCreationFormManager = (category, name, icon, color) => {
    const [notifications, setNotifications] = useState(false);
    const [notificationArray, setNotificationArray] = useState([]);
    const [dayArray, setDayArray] = useState([0]);
    const [selectedAttributes, setSelectedAttributes] = useState({
        type: category, name: name, icon: icon, color: color, goalValue: 0, goalUnit: "", notifications: [], days: []
    });

    const ArrayUpdate = (event, tempArray) => {
        tempArray[event.target.name.slice(event.target.name.length - 1)] = event.target.value;
        setSelectedAttributes({
            ...selectedAttributes,
            [event.target.name.slice(0, event.target.name.length - 1)]: tempArray
        })
    }

    const ChangesManager = (event) => {
        event.preventDefault();
        if (event.target.name.slice(0, event.target.name.length - 1) === 'notifications') {
            const aux = selectedAttributes.notifications;
            ArrayUpdate(event, aux);
        }
        else if (event.target.name.slice(0, event.target.name.length - 1) === 'days') {
            const aux = selectedAttributes.days;
            ArrayUpdate(event, aux);
        }
        else {
            setSelectedAttributes({
                ...selectedAttributes,
                [event.target.name]: event.target.value,
            })
        }
    }

    const AddManager = (event) => {
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

    return [selectedAttributes, dayArray, notifications, notificationArray, AddManager, ChangesManager];
}