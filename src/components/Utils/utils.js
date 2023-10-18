import * as api from "./api.js";
export const getAll = () => {
    return api.get('/packages.json/')
};

export const register = (data) =>{
    return api.post('/people.json', data)
};
export const login = (data) =>{
    
    return api.get('/people.json/')
};
export const logout = () =>{
  localStorage.removeItem('user')

}