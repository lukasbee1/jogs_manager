import { AUTH_ACTION } from "../constants/action-types";
import { ADD_JOG } from "../constants/action-types";

const initialState = {
    isAuth: false,
    jogs: [],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_ACTION: {
            const { isAuth } = action.payload;
            return { ...state, isAuth };
        }
        case ADD_JOG: {
            const { distance, time, date } = action.payload;
            const id = state.jogs.length + 1;
            const speed = Math.round(
                action.payload.distance / action.payload.time
            );
            return {
                ...state,
                jogs: [...state.jogs, { id, distance, time, date, speed }],
            };
        }
        default:
            return state;
    }
}
export default rootReducer;
