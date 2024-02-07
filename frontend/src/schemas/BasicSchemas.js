import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    username: yup.string().required("Redquired"),
    password: yup
        .string()
        .min(5)
        .matches(passwordRules, 
            {message: "Password needs at least 5 characters, 1 upper case, 1 lower case, 1 numeric digit"})
        .required("Required"),
    // confirmPassword: yup
    //     .string()
    //     .oneOf([yup.ref("password"), null, "Password must match"])
    //     .required("Required"),
})