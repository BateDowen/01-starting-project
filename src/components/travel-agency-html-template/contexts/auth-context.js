import { createContext, useEffect, useState } from "react";
import * as authService from "../../Utils/utils";

export const AuthContext = createContext({email: '',logout: () =>{ },login: () =>{ }});

export const AuthContextProvider = (props) =>{
    const [isLoged, setIsLoged] = useState(false);
    const user = localStorage.getItem('user');

    useEffect(() =>{
        if (user) {
            setIsLoged(true)
        }
    },[user,isLoged]);
    const logoutHandler = () =>{
       authService.logout();
        setIsLoged(false);

    };

    const loginHandler = () =>{
        localStorage.getItem('user');
        setIsLoged(true);

    };

    const ctxValue = {
        user,
        login: loginHandler,
        logout: logoutHandler
    }
    return(
        <AuthContext.Provider value={ctxValue}>
            {props.children}
        </AuthContext.Provider>
    )
}