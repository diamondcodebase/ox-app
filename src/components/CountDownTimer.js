import { useState, useEffect } from 'react';

export default function CountDownTimer({ secLimit, visible, running, timeoutFn }) {
    if(!visible){
        return <></>
    }
    const [timeLeft, setTimeLeft] = useState(secLimit);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let interval;
        // if timer is still running, using setInterval to reduce a second
        if(running && isRunning) {
            interval = setInterval(() => {
                setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
            }, 1000);
        }

        // if time is up, set isRunning to false
        if (timeLeft === 0){
            timeoutFn();
            setIsRunning(false);
        }

        return () => clearInterval(interval);        
    }, [running, timeLeft]);
    
    return (
        <div className="countdown-timer">
            <h1>尚餘時間</h1>
            <div className="timer-display">
                <span>{Math.floor(timeLeft / 60)}:</span>
                <span>{(timeLeft % 60).toString().padStart(2, '0')}</span>
            </div>
        </div>
    );
};