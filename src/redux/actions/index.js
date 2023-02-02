import { LOGIN } from './actions.types'

export const login = (username) => {
    return {
        type: LOGIN,
        username
    }
}