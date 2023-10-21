import { createContext, useEffect, useState } from "react";
import * as authService from "../../Utils/utils";

export const AuthContext = createContext({email: '',logout: () =>{ },login: () =>{ }});

export const AuthContextProvider = (props) =>{
    const [isLoged, setIsLoged] = useState(false);
    const userToken = localStorage.getItem('token');

    useEffect(() =>{
        if (userToken) {
            setIsLoged(true)
        }
    },[userToken,isLoged]);

    const logoutHandler = () =>{
        localStorage.removeItem('email');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('userId');
        setIsLoged(false);

    };

    const loginHandler = (email, accessToken, id,username) =>{
        localStorage.setItem('email',email);
        localStorage.setItem('token',accessToken);
        localStorage.setItem('userId',id);
        localStorage.setItem('username',username);
        setIsLoged(true);

    };
    const getUserCredentials = () => {
        const userId = localStorage.getItem('userId');
        const userEmail = localStorage.getItem('email');
        const username =  localStorage.getItem('username');

        return { 
            userToken,
            userId,
            userEmail,
            username
            }

    };
    const ctxValue = {
        isLoged,
        login: loginHandler,
        logout: logoutHandler,
        getUserCredentials
    }
    return(
        <AuthContext.Provider value={ctxValue}>
            {props.children}
        </AuthContext.Provider>
    )
}