import { Formik, Form } from "formik"
import * as Yup from "yup"
// import FormikControl from 

function LoginForm() {

    const initialValues = {
            username: "",
            password: ""
        }

    const validationSchema = Yup.object({
        username: Yup.string().required("Required"),
        password: Yup.string().required("Required")
    })
        
    const onSubmit = values => {
        console.log("form data", values)
    }
    
    return(
        <>
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
                {
                    formik => {
                        return <Form>
                            <FormikControl
                                control="input"
                                type="text"
                                label="username"
                                name="username" />
                            <FormikControl
                                control="input"
                                type="password"
                                label="password"
                                name="password" />   
                            <button type="submit" disable={formik.isValid}>Submit</button> 
                        </Form>

                    }
                }

            </Formik>
        {/* <form onSubmit={formik.handleSubmit}>
            <div className="from-control">
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                {formik.errors.username ? <div>{formik.errors.username}</div> : null}
            </div>
            <div className="from-control">
                <label htmlFor="password">Password</label>
                <input 
                    type="text" 
                    id="password" 
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password ? <div>{formik.errors.password}</div> : null}
            </div>
            <button type="submit">Submit</button>
        </form> */}
        </>
    )
}
export default LoginForm;