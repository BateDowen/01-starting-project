import { createContext } from "react";

export const AuthContext = createContext({email: '',password: ''});

export const AuthContextProvider = (props) =>{
    const user = localStorage.getItem('user');

    return(
        <AuthContext.Provider value={user}>
            {props.children}
        </AuthContext.Provider>
    )
}