import { Formik, Form } from "formik"
import * as Yup from "yup"
import { useFormik } from "formik"
import { basicSchema } from "../schemas/BasicSchemas"
import "./LoginForm.css"
import login_img from "../assets/login_img.jpg"

function LoginForm() {

    const onSubmit = () => {
        console.log("submit")
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: basicSchema,
        onSubmit
    });

        

    
    return(
        <div className= "flex flex-row">
            <div className="basis-1/2 ml-5"><img src={login_img} className="rounded-md" /></div>
                <div className="basis-1/2">
                  <div className="grid grid-rows-4 gap-4 justify-items-stretch">
                    <div></div>
                        <form className="mx-10 my-5" onSubmit={handleSubmit} autoComplete="off">
                        <div><p className="text-center">Sign in to your account</p></div>
                        <div className="mt-3"><label htmlFor="username" >Username</label>
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
                        // {errors.username ? 
                        // "input-error" : 
                        "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        // }
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
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                        </div>

                        <div className="mt-7"><button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button></div>
                        </form>
                  </div>
                </div>
        </div>
    )
}
export default LoginForm;