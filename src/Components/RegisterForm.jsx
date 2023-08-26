import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function RegisterForm(){

    const {register, handleSubmit, formState : {errors}} = useForm()

    const [userData, setUserData] = useState(null)
    const [loginStatus, setLoginStatus] = useState(null)
    const submittedData = (data) => {
        
        const isMatch = userData.some((item) => {
            return data.email_REG === item.email;
        })
        setLoginStatus(isMatch ? "User has already been registered using this email" : "Successfully registered! Continue to log in!")
    }

    useEffect(() => { //fetches data from the fake backend, db.json file
        fetch('https://my-json-server.typicode.com/Kuciuks/react-login-form/users')
        .then(response => response.json())
        .then(data => setUserData(data))
    },[])

    return(
        <form onSubmit={handleSubmit(submittedData)}>

            <label htmlFor="username_REG">Username: </label>
            <input {...register("username_REG", {
                pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Using ivalid symbols"
                },
                required: "Required field!"
            })} id="username_REG"></input>
            <p>{errors.username_REG?.message}</p>

            <label htmlFor="email_REG">Email: </label>
            <input {...register("email_REG",{
                pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Using invalid symbols!"
                },
                required: "Required field!"
            })} id="email_REG"></input>
            <p>{errors.email_REG?.message}</p>

            <label htmlFor="password_REG">Password: </label>
            <input {...register("password_REG",{
                pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{8,}$/,
                    message: "The password must contain: at least 8 characters, one lowercase letter, one uppercase letter, one digit, and one special character."
                },
                required: "Required field!"
            })} id="password_REG"></input>
            <p>{errors.password_REG?.message}</p>

            <button type="submit">Register</button>
        </form>
    )
}