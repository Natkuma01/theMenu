import { createContext, useState, useEffect } from 'react'


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
                'username': e.target.username.value, 
                'password': e.target.password.value})
        })
        const data = await response.json()
        if(response.status === 200){
            setAuthTokens(data)
            setUser(data.access)
        }
        else{
            alert("something wrong")
        }

    }


    const contextData = {
        user: user,
        loginUser:loginUser
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext

