import { useContext } from "react";
import { UserContext } from "./UserContext";

function Course() {
    const {user} = useContext(UserContext)
    return (
        <>
            <p>Your course is: {user.course}</p>
        </>
    )
}

export default Course;