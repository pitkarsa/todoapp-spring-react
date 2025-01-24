import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider(props){
    const data = localStorage.getItem("user");// its a string format data, we need to covert to json
    const currentUser = JSON.parse(data);
    // console.log(data);    
    // console.log(currentUser);    
    const [loggedInUser, setLoggedInUser] = useState(currentUser);

    return (
        <UserContext.Provider value={{loggedInUser,setLoggedInUser}}>
            {props.children}
        </UserContext.Provider>
    )
}