

import { createContext, useState } from "react";

export const UserContext = createContext({
    toggleUser:null,
    user: {
        name: null,
        course: null
    }
});

const qeyam = {
  name: 'Qeyman',
  course: 'AI'
}

const efat = {
  name: 'Efat',
  course: 'Iqra'
}


export function UserContextProvider({children}) {

    const [user, setUser] = useState(qeyam)

    const toggleUser = () => {
        if(user === qeyam)
        {
        setUser(efat)
        } else {
        setUser(qeyam)
        }
    }

    return (
        <>
           <UserContext.Provider value={{
            user, toggleUser
           }}>
                {children}
            </UserContext.Provider> 
        </>
    )
}