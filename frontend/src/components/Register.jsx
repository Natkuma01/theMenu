import React, {useContext} from 'react'
import AuthContext from '../utils/AuthContext'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const { loginUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,
            confirmed_password: e.target.confirmed_password.value
        }
        const response = await fetch('http://127.0.0.1:8000/api/register/', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(formData)  
            })  
            if (response.ok) {
                console.log("PASS")
                await loginUser(e)
                navigate('/dashboard')
            } else {
                alert("Error")
            }
        }
      
        

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Enter username"  />
                <input type="email" name="email" placeholder="Enter Email"  />
                <input type="password" name="password" placeholder="Enter password"  />
                <input type="password" name="confirmed_password"  placeholder="Confirm your password" />
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}
export default Register;