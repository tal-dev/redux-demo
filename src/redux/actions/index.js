import { LOGIN, LOGOUT } from './actions.types'

export const login = (username) => {
    return {
        type: LOGIN,
        username
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
}