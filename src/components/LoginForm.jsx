const LoginForm = ({ setUser}) => {

    const onFormSubmit = (e) => {
        e.preventDefault()
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;

        if(username === "seytech" && password === "123") {
            setUser({
                username, 
                password
            })
        }
        else {
            alert("Invalid credentials")
        }
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input type="text" placeholder="username" name="username" />
            <input type="password" placeholder="password" name="password" />
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm