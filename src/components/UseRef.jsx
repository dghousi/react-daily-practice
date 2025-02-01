import { useRef } from "react";

function UseRef()
{
    const inputRef = useRef(null)
    const handleFocus = () => {
        return inputRef.current.focus();
    }
    
    return (
        <>
            <input ref={inputRef}/>
            <button onClick={handleFocus}>Focus</button>
        </>
    )
}


export default UseRef;