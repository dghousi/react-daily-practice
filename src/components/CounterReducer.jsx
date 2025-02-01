

function CounterReducer({count, onClick, children}) {
    return (
        <>
            <button onClick={onClick}>{children}</button>

            {/* <p>The count is: {count}</p> */}
        </>
    )
}


export default CounterReducer;