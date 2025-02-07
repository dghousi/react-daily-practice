import { Profiler, useDebugValue, useState } from "react";

let renderCount = 0;

function DebuggingApp() {
    renderCount++;
    console.log('RenderCount='+renderCount)
    return (
    <Profiler id="App" onRender={() => console.log('Profiler commit...')}>
        <Counter initialValue={5} />
        <Counter />
    </Profiler>
    )
}

function Counter({initialValue})
{
    const [count, setCount] = useMyState(initialValue);

    return (
        <>
            <button onClick={() => setCount(count +1)}>Increment</button>
            <p>Count: {count}</p>
        </>
    )
}


function useMyState(initialValue = 0)
{
    useDebugValue('Some debug value')
    return useState(initialValue)
}


export default DebuggingApp