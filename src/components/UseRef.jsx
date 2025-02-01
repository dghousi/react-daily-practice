import { forwardRef, useRef } from "react";

function UseRef()
{
    const inputRef = useRef(null)
    const handleFocus = () => {
        return inputRef.current.focus();
    }
    
    return (
        <>
            <Input ref={inputRef}/>
            <button onClick={handleFocus}>Focus</button>
        </>
    )
}


const Input = forwardRef(
    function (props, ref) {
        return <input ref={ref} {...props} style={{color: 'red'}}/>
    }
)

export default UseRef;