import { LOGIN } from "../actions/actions.types"

const initialState = {
    user: "sey"
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
        default:
            return state
    }
}

export default login