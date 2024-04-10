import React from "react";
import { useNavigate } from "react-router-dom";

function RestaurantForm() {

    const navigate = useNavigate()

const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = {
        name: e.target.name.value,
        address: e.target.address.value,
        state: e.target.state.value,
        zip_code: e.target.zip_code.value
    }
    const response = await fetch('http://127.0.0.1:8000/restaurant/restaurant/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
    })
    if (response.ok) {
        console.log("Form sent")
        navigate('/dashboard')
    } else {
        alert("Error")
    }
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Restaurant Name:</label>
            <input type="text" name="name"/>
            <label>Restaurant Address:</label>
            <input type="text" name="address"/>
            <label>State:</label>
            <input type="text" name="state"/>
            <label>Zip Code:</label>
            <input type="text" name="zip_code"/>
            <button type="submit">Submit</button>
        </form>
        </>
    )


}
export default RestaurantForm;