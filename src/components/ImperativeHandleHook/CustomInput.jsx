import { forwardRef, useImperativeHandle, useState } from "react";

const CustomInput = forwardRef(function CustomInput(props, ref) {
    const [value, setValue] = useState('');

    useImperativeHandle(ref, ()=> {
        return {reset: ()=> setValue('')}
    })

    return (
        <>
            <input 
                {...props} 
                value={value} 
                onChange={ event => setValue(event.target.value)} 
                type="text" placeholder="type something..."
                style={{color: 'red'}}
                />
        </>
    )
})


export default CustomInput;