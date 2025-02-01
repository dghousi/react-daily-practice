function Counter({count, setCount}) {

    return (
        <>
            <button onClick={() => setCount(count +1)}>Increment</button>

            <p>The count is: {count}</p>
        </>
    )   
}

export default Counter;