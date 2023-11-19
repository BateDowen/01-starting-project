import { createContext, useContext, useEffect, useState } from "react";
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
        localStorage.removeItem('user');
        

        setIsLoged(false);

    };

    const loginHandler = (data) =>{
        localStorage.setItem('user',data);
        
        setIsLoged(true);

    };
    const getUserCredentials = () => {
        const { 
            accessToken,
            userId,
            userEmail,
            username
            } = JSON.parse(localStorage.getItem('user'))

        return { 
            accessToken,
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

//cuustom hook for context usage:

export const useAuth = () =>{
    const authState = useContext(AuthContext);
    return authState;
}