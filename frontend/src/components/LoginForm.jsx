import { useFormik } from "formik"
import * as yup from "yup";
import "./LoginForm.css"
import login_img from "../assets/login_img.jpg"
import { useNavigate } from "react-router-dom"
import AuthContext from "../utils/AuthContext"
import React, {useContext} from "react"

function LoginForm() {

    const {loginUser} = useContext(AuthContext)

    const navigateTo = useNavigate()

    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

    const loginSchema = yup.object().shape({
        username: yup.string().required("Redquired"),
        password: yup
        .string()
        .min(5)
        .matches(passwordRules, 
            {message: "Password needs at least 5 characters, 1 upper case, 1 lower case, 1 numeric digit"})
        .required("Required")})


    
    // const onSubmit = async (values, actions) => {
    //     console.log(values)
    //     console.log(actions)
    //     await new Promise((resolve) => setTimeout(resolve, 1000));
    //     actions.resetForm()

    // }

    const { values, errors, touched, handleBlur, isSubmitting, handleChange, handleSubmit } = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit: 
        // (values) => {
            // console.log("form submit")
            // console.log(values)
            navigateTo("/dashboard")
        }
    // }
    );

       console.log(errors); 

    
    return(
        <div className= "flex flex-row">
            <div className="basis-1/2 ml-5 mt-5"><img src={login_img} className="rounded-md shadow-md" /></div>
                <div className="basis-1/2">
                  <div className="grid grid-rows-4 gap-4 justify-items-stretch">
                    <div></div>
                        <form className="mx-10 my-5" onSubmit={loginUser} autoComplete="off">
                        <div><p className="text-center">Sign in to your account</p></div>
                        <div className="mt-3"><label htmlFor="username">Username</label>
                        <div className="mt-1">
                        <input 
                        type="text" 
                        id="username" 
                        name="username"
                        placeholder="Enter your username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                        className=
                        {errors.username && touched.username ? 
                        "block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-red-500 placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                            : 
                        "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        }
                        />
                        </div>
                        </div>

                        <div className="mt-3"><label htmlFor="password">Password</label>
                        <div className="mt-1">
                        <input 
                        type="password" 
                        id="password" 
                        placeholder="Enter your password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        autoComplete="off"
                        className=
                        {errors.password && touched.password ? 
                        "block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-red-500 placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                            : 
                        "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        }
                        />
                        {errors.password && touched.password && 
                        <p className="text-red-500 text-xs">{errors.password}</p>}
                        </div>
                        </div>

                        <div className="mt-7"><button type="submit" disabled={isSubmitting} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button></div>
                        </form>
                  </div>
                </div>
        </div>
    )
}
export default LoginForm;