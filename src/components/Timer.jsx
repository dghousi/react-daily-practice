import { useState } from "react";

function Timer()
{
    const [seconds, setSeconds] = useState(0)
    const [timerId, setTimerId] = useState(null)


    const startTimer = () => {
        setTimerId(setInterval(() => {
            setSeconds(currentSecond => currentSecond + 1)
        }, 1000))
    }

    const stopTimer = () => {
        clearInterval(timerId)
    }

    return (
        <>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>

            <p>Seconds: {seconds}</p>
        </>
    )
}


export default Timer;