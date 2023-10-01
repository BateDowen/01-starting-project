import * as api from "./api.js";
export const getAll = () => {
    return api.get('/')
}