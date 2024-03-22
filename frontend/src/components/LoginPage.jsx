import React, {useContext} from 'react'
import AuthContext from '../utils/AuthContext'

const LoginPage = () => {
    const {loginUser} = useContext(AuthContext)
    return (
        <div>
            <form onSubmit={loginUser}>
                <input tpye="text" name="username" placeholder="Enter username"  />
                <input tpye="password" name="password" placeholder="Enter password"  />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default LoginPage;