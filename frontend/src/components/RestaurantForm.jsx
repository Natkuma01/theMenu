import React from "react";
import { useFormik, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { restaurantSchema } from "../schemas/RestaurantSchema";

function RestaurantForm() {

    const navigateTo = useNavigate()

    const onSubmit = async (values, actions) => {
        console.log(values)
        console.log(actions)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm()

    }

    const { values, handleBlur, isSubmitting, handleChange, handleSubmit } = useFormik({
        initialValues: {
            restaurantName: "",
            address: "",
            city: "",
            states: "",
            zipCode: "",
        },
        validationSchema: restaurantSchema,
        onSubmit: (values) => {
            console.log("form submit")
            console.log(values)
            navigateTo("/dashboard")
        }
    });
    return (
        <div className="text-indigo-700">
        <p className="text-4xl text-center mt-6">New Restaurant</p>
        <form>
        <div className="ring-1 ring-cyan-600 rounded-md p-20 m-10 grid grid-row-6 gap-x-6 gap-y-8">
        <div><label>Restaurant Name</label>
            <input 
            type="text"
            id="restaurantName"
            name="restaurantName"
            placeholder="Enter restaurant name"
            onChange={handleChange}
            onBlur={handleBlur}
            values={values.restaurantName}
            className="rounded-md w-64 py-1.5 ml-3 ring-1 ring-inset ring-gray-500 ..."
            />
        </div>
        <div>
            <label>Address</label>
            <input 
            type="text"
            id="address"
            name="address"
            placeholder="Street Name, Apartment"
            onChange={handleChange}
            onBlur={handleBlur}
            values={values.address}
            className="rounded-md w-80 py-1.5 ml-3 ring-1 sm:col-span-4 ring-inset ring-gray-500 ..."
            />
        </div>
        <div>
            <label>City</label>
            <input 
            type="text"
            id="city"
            name="city"
            onChange={handleChange}
            onBlur={handleBlur}
            values={values.city}
            className="rounded-md py-1.5 ml-3 ring-1 ring-inset ring-gray-500 ..."
            />
        </div>
        <div>
            <label>States</label>
            <input
            id="states"
            name="states"
            onChange={handleChange}
            onBlur={handleBlur}
            values={values.address}
            className="rounded-md w-32 py-1.5 ml-3 ring-1 ring-inset ring-gray-500 ..."
            />
        </div>
        <div>
            <label>Zip Code</label>
            <input
            id="zipCode"
            name="zipCode"
            type="text"
            pattern="\d{4}"
            onChange={handleChange}
            onBlur={handleBlur}
            values={values.address}
            className="rounded-md w-24 py-1.5 ml-3 ring-1 ring-inset ring-gray-500 ..."
            />
        </div>
        <div><button type="submit" 
        className="rounded-md bg-indigo-600 ml-2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Create
            </button>
            </div>
</div>
        </form>
        </div>

    )
}
export default RestaurantForm;