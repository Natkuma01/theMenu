import AuthContext from "../utils/AuthContext"
import "./LoginForm.css"
import { Link } from "react-router-dom"
import React, {useContext} from 'react'



const Navbar = () => {

    const { logoutUser } = useContext(AuthContext)

    return (
        <div className="flex flex-col place-items-center mt-20 gap-5">
        <div  className="hover:underline ...">Menu</div>
        <div  className="hover:underline ...">Inventory</div>
        <div className="hover:underline ..."><Link to="/restForm">Add Restaurant</Link></div>
        <div  className="hover:underline ..." onClick={logoutUser}>Logout</div>
        </div>
    )
}
export default Navbar;