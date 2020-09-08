import { AUTH_ACTION } from "../constants/action-types";
import { ADD_JOG } from "../constants/action-types";

export const tryAuth = (isAuth) => {
    return { type: AUTH_ACTION, payload: { isAuth } };
};
export const addJog = (obj) => {
    return { type: ADD_JOG, payload: obj };
};

