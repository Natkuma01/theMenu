import "./LoginForm.css"
import { Link } from "react-router-dom"
import restaurantForm from "./RestaurantForm"

const Navbar = () => {
    return (
        <div className="flex flex-col place-items-center mt-20 gap-5">
        <div>Menu</div>
        <div>Inventory</div>
        <div><Link to="restaurantForm">Add Restaurant</Link></div>
        <div>Logout</div>
        </div>
    )
}
export default Navbar;