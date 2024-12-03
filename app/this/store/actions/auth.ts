import { getUser, isAuthenticated, setToken } from "@/lib/utils";

export const AUTH_CHANGE = "AUTH_CHANGE";

export const authChange = (token: string) => {
    setToken(token);
    return {
        type: AUTH_CHANGE,
        payload: {
            isAuthenticated: isAuthenticated(),
            isSuperAdmin: getUser()?.isSuperAdmin,
            user: getUser()
        }
    }
}
