import { AUTH_CHANGE } from "../actions/auth";

const initialState = {
    isAuthenticated: false,
    isSuperAdmin: false,
    user: null
};

export default function authReducer(state = initialState, action: any) {
    switch (action.type) {
        case AUTH_CHANGE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}