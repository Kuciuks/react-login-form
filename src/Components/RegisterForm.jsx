import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function RegisterForm(){

    const {register, handleSubmit, formState : {errors}} = useForm()

    const [userData, setUserData] = useState(null)
    const submittedData = (data) => {
        
        const isMatch = userData.some((item) => {
            return data.email_REG === item.email;
        })


        isMatch ? console.log(`User has already been created using ${data.email_REG}`) : handleAddUser(data)

    };


    useEffect(() => { //fetches data from local server each time the userData changes.
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(data => setUserData(data));
    },[])


    const handleAddUser = (data) => {
        // Send POST request to add new user
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                name: data.username_REG,
                email: data.email_REG,
                password: data.password_REG,
                id: crypto.randomUUID()
            })
        })
        .then(data => {
            console.log("User created:", data);
        })
        .catch(error => {
            console.error("Error creating user:", error);
        });
    }



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