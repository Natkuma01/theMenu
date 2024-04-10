import { createContext, useState } from 'react'


// Provider provide the information and consumer received the information
const AuthContext = createContext()


export const AuthProvider = ({children}) => {

    const [authTokens, setAuthTokens] = useState(null)
    const [user, setUser] = useState(null)

    const loginUser = async (e) =>{
        e.preventDefault()
        const response = await fetch('http://127.0.0.1:8000/api/token/', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                'email': e.target.email.value, 
                'password': e.target.password.value})
        })
        const data = await response.json()
        if(response.status === 200){
            setAuthTokens(data)
            setUser(data.access)
            localStorage.setItem('authTokens', JSON.stringify(data))
        }
        else{
            alert("Your email & password are invalid.")
        }
    }

    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
    }

    const contextData = {
        user: user,
        loginUser:loginUser,
        logoutUser:logoutUser
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext

