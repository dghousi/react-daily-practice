import { useContext } from "react";
import { UserContext } from "./UserContext";

function WelcomeBanner() {
    const {user} = useContext(UserContext)
    return (
        <>
            <h1>Hello, {user.name}</h1>
        </>
    )
}

export default WelcomeBanner;