import React, {useContext} from 'react'
import AuthContext from '../utils/AuthContext'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const {loginUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await loginUser(e)
        navigate('/dashboard')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" placeholder="Enter Email"  />
                <input type="password" name="password" placeholder="Enter password"  />
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}
export default LoginPage;