import { useState } from 'react';
import { useEffect } from 'react';
import {
    TimerTitle,
    TaimerMain,
    TimerNumber,
    TimerDays,
    TimerList,
    TaimerAlign,
} from './Timer.styled';
const Timer = ({ expectDate }) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    let dateCountDown = null;
    let title = null;
    if (!expectDate) {
        dateCountDown = new Date('January 1, 2023 14:25:00').getTime();
        title = 'До закінчення року залишилось';
    } else {
        dateCountDown = new Date(expectDate);
        title = 'До досягнення мети залишилось'
    }

    function convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const days = Math.floor(ms / day);
        const hours = Math.floor((ms % day) / hour);
        const minutes = Math.floor(((ms % day) % hour) / minute);
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);

        return { days, hours, minutes, seconds };
    }

    const updateTimer = () => {
        let timerId = null;
        let update = null;

        timerId = setInterval(() => {
            let currentDate = new Date().getTime();
            update = dateCountDown - currentDate;
            if (update < 0) {
                return clearInterval(timerId);
            } else {
                setDays(convertMs(update).days);
                setHours(convertMs(update).hours);
                setMinutes(convertMs(update).minutes);
                setSeconds(convertMs(update).seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        updateTimer();
    });

    return (
        <>
            <TaimerAlign>
                <TimerTitle>
                    {title}
                </TimerTitle>
                <TaimerMain>
                    <TimerList>
                        <TimerNumber>{days}</TimerNumber>
                        <TimerDays>ДН</TimerDays>
                    </TimerList>
                    <TimerNumber>:</TimerNumber>
                    <TimerList>
                        <TimerNumber>{hours}</TimerNumber>
                        <TimerDays>ГОД</TimerDays>
                    </TimerList>
                    <TimerNumber>:</TimerNumber>
                    <TimerList>
                        <TimerNumber>{minutes}</TimerNumber>
                        <TimerDays>ХВ</TimerDays>
                    </TimerList>
                    <TimerNumber>:</TimerNumber>
                    <TimerList>
                        <TimerNumber>{seconds}</TimerNumber>
                        <TimerDays>СЕК</TimerDays>
                    </TimerList>
                </TaimerMain>
            </TaimerAlign>
        </>
    );
};

export default Timer;
