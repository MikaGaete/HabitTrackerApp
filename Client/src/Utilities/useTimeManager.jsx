import {useEffect, useState} from "react";

export const useTimeManager = () => {
    const Time = new Date();
    Time.setTime(Date.now())
    const [currentDate, setCurrentDate] = useState({ day: (Time.getDate()), month: Time.getMonth() + 1, year: Time.getFullYear() })
    const [currentTime, setCurrentTime] = useState({ hours: Time.getHours(), minutes: Time.getMinutes() });
    const [formattedDate, setFormattedDate] = useState(currentDate.month + '/' + currentDate.day + '/' + currentDate.year);
    const msMinute = 60000;

    useEffect(() => {
        const interval = setInterval(() => {
            const time = new Date();
            time.setTime(Date.now());
            setCurrentDate({
                day: (time.getDate()),
                month: (time.getMonth() + 1),
                year: time.getFullYear()
            })
            setCurrentTime({
                hours: time.getHours(),
                minutes: time.getMinutes()
            })
        }, msMinute);

        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        setFormattedDate(currentDate.month + '/' + currentDate.day + '/' + currentDate.year);
    }, [currentDate]);

    return {currentDate, currentTime, Time, formattedDate}
}