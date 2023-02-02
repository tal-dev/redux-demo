import { useSelector, useDispatch } from "react-redux"
import { logout } from "../redux/actions"

const Header = () => {
    const { user } = useSelector(state => state.login)
    const dispatch = useDispatch()

    const dispatchLogout = () => {
        dispatch(logout())
    }

    return (
        <>
            <h1>Hello {user.username}</h1>
            <button onClick={dispatchLogout}>logout</button>
        </>
    )
}

export default Header