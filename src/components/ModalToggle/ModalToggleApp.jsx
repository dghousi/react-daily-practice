import { useState } from "react"
import './ModalToggleApp.css'
import { createPortal } from "react-dom"

function ModalToggleApp() {
    const [isHidden, setIsHidden] = useState(true)

    return (
        <>
            <div className="container" onClick={()=> {console.log("Clicked!")}}>
                <button onClick={()=> setIsHidden(!isHidden)}>
                    {isHidden ? 'Show Modal' : 'Hide Modal'}
                </button>

                {isHidden || <Modal/>}
            </div>

            <p className="other">
                Other content
            </p>

        </>
    )
}

function Modal() {
    return createPortal(<p className="modal">Modal</p>, document.getElementById('root-modal'))
}   


export default ModalToggleApp