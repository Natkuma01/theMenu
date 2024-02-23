import { useFormik } from "formik"
import { basicSchema } from "../schemas/BasicSchemas"
import "./LoginForm.css"
import { useNavigate } from "react-router-dom"
import login_img from "../assets/login_img.jpg"

function SignupForm() {

    const navigateTo = useNavigate()

    const onSubmit = async (values, actions) => {
        console.log(values)
        console.log(actions)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // set backend api here
        actions.resetForm()
    }

    const { values, errors, touched, handleBlur, isSubmitting, handleChange, handleSubmit } = useFormik({
        initialValues: {
            username: "",
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: basicSchema,
        onSubmit: (values) => {
            console.log("form submit")
            console.log(values)
            navigateTo("/dashboard")
    }
});

       console.log(errors); 

    
    return(
        <div className= "flex flex-row">
            <div className="basis-1/2 ml-5 mt-5"><img src={login_img} className="rounded-md shadow-md" /></div>
                <div className="basis-1/2">
                  <div className="grid grid-rows-2 mt-28 gap-2 justify-items-stretch">
                        <form className="mx-10 my-5" onSubmit={handleSubmit}>
                        <div><p className="text-center">Create an account</p></div>
{/* username */}
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
                        {errors.username && touched.username ? 
                        "block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-red-500 placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                            : 
                        "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        }
                        />
                        </div>
                        </div>
{/* first name */}
                        <div className="mt-3"><label htmlFor="firstname" >First Name</label>
                        <div className="mt-1">
                        <input 
                        type="text" 
                        id="firstname" 
                        name="firstname"
                        placeholder="Enter your first name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstname}
                        className=
                        {errors.firstname && touched.firstname ? 
                        "block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-red-500 placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                            : 
                        "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        }
                        />
                        </div>
                        </div>
{/* last name */}
                        <div className="mt-3"><label htmlFor="lastname" >Last Name</label>
                        <div className="mt-1">
                        <input 
                        type="text" 
                        id="lastname" 
                        name="lastname"
                        placeholder="Enter your last name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastname}
                        className=
                        {errors.lastname && touched.lastname ? 
                        "block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-red-500 placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                            : 
                        "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        }
                        />
                        </div>
                        </div>
{/* email */}
                        <div className="mt-3"><label htmlFor="email" >Email</label>
                        <div className="mt-1">
                        <input 
                        type="email" 
                        id="email" 
                        name="email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        className=
                        {errors.email && touched.email ? 
                        "block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-red-500 placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                            : 
                        "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        }
                        />
                        </div>
                        </div>
{/* password */}
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
{/* confirm password */}
                        <div className="mt-3"><label htmlFor="confirmPassword" >Re-enter Password</label>
                        <div className="mt-1">
                        <input 
                        type="password" 
                        id="confirmPassword" 
                        name="confirmPassword"
                        placeholder="Re-enter password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="on"
                        value={values.confirmPassword}
                        className=
                        {errors.confirmPassword && touched.confirmPassword ? 
                        "block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-red-500 placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                            : 
                        "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        }
                        />
                        </div>
                        </div>
                        <div className="mt-7"><button type="submit" disabled={isSubmitting} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button></div>
                        </form>
                  </div>
                </div>
        </div>
    )
}
export default SignupForm;