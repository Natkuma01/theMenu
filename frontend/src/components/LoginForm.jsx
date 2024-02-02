import { Formik, Form } from "formik"
import * as Yup from "yup"
import { useFormik } from "formik"
import { basicSchema } from "../schemas/BasicSchemas"

function LoginForm() {

    const onSubmit = () => {
        console.log("submit")
    }

    const { values, errors, touched, handleBlur, handleChange } = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: basicSchema,
        onSubmit
    })

        

    
    return(
        <>
        <form onSubmit={handleSubmit} autoComplete="off">
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username"
                    onChange={handleChange}
                    value={values.username}
                    onBlur={handleBlur}
                    className={errors.username && touched.username ? "input-error" : null}
                />
                <label htmlFor="password">Password</label>
                <input 
                    type="text" 
                    id="password" 
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default LoginForm;