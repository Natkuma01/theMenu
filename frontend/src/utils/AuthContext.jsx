import { createContext, useState, useEffect } from 'react'


// Provider provide the information and consumer received the information
const AuthContext = createContext()

export default AuthContext


export const AuthProvider = ({children}) => {

    const [authTokens, setAuthTokens] = useState(null)
    const [user, setUser] = useState(null)

    const loginUser = async (e) =>{
        e.preventDefault()
        console.log("Form submit")
    //     let response = fetch('http://127.0.0.1:8000/api/token/', {
    //         method:'POST',
    //         headers:{
    //             'Content-Type': 'application/json'
    //         },
    //         body:JSON.stringify({'username':null, 'password':null})
    //     })
    }


    let contextData = {
        loginUser:loginUser
    }

    return(
        <AuthContext.Provider value={{'name': 'Natalie'}}>
            {children}
        </AuthContext.Provider>
    )
}