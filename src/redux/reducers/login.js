import { LOGIN, LOGOUT } from "../actions/actions.types"

const initialState = {
    user: null
}

const login = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: {
                    username: action.username
                }
            }
        case LOGOUT:
            return {
                ...state,
                user: null
            }
        default:
            return state
    }
}

export default login