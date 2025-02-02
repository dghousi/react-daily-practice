import { useState, forwardRef, useImperativeHandle } from "react";

const ImperativeCounter = forwardRef((props, ref) => {
    const [count, setCount] = useState(0);

    useImperativeHandle(ref, () => ({
        reset: () => setCount(0)
    }), []); // Added empty dependency array

    return (
        <>
            <p>Imperative Counter</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Count: {count}</p>
        </>
    );
});

export default ImperativeCounter;
