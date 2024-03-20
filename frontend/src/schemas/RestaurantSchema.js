import * as yup from "yup"

export const restaurantSchema = yup.object().shape({
    restaurantName: yup.string().required("Required"),
    address: yup.string().required("Required"),
    city: yup.string().required("Required"),
    states: yup.string().required("Required"),
    zipCode: yup.
        string().
        required("Required").
        matches(/^[0-9]{4}$/, "Please indicate a valid zipcode"),
})