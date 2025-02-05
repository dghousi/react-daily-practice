import { memo } from "react"


function MyButton(props) {
    console.log("rendering button ")

    const startTime = new Date()
    while (new Date() - startTime < 1000) {}
    return <button {...props} style={{color:'red'}} />
}

export default memo(MyButton)