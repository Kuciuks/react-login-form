import {useForm} from 'react-hook-form'
import {useEffect, useState} from 'react'

export default function LoginForm(){

    const [userData, setUserData] = useState(null)
    const [loginStatus, setLoginStatus] = useState(null)
    
    const {register, handleSubmit, formState : {errors}} = useForm()

    const submittedData = (data) => {
        //console.log("Submitted data: ",data,"\n\n\nFetched user data: ",userData)
        userData.map((item) =>{
            console.log("data.username_LOG: ",data.username_LOG,"\nuserData.username: ",item.username)
            console.log("data.username_LOG: ",data.password_LOG,"\nuserData.username: ",item.password)
            data.username_LOG === item.username && data.password_LOG === item.password ? setLoginStatus("You have successfully logged in!")
            : setLoginStatus("There's no such user, please register instead")
        })
    }

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Kuciuks/react-login-form/users')
        .then(response => response.json())
        .then(data => setUserData(data))
    },[])


    return(
        <div>    
            <form onSubmit={handleSubmit(submittedData)}>
                <label htmlFor="username_LOG">Username: </label>
                <input {...register("username_LOG",{
                    pattern: {
                        value: /^[A-Za-z0-9\s]+$/,
                        message: "Using invalid symbols!"
                    },
                    required: "Required field!"
                })} id="username_LOG"></input>
                <p>{errors.username_LOG?.message}</p>

                <label htmlFor="password_LOG">Password: </label>
                <input {...register("password_LOG", {
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{8,}$/,
                        message: "The password must contain: at least 8 characters, one lowercase letter, one uppercase letter, one digit, and one special character."
                    },
                    required: "Required field!"

                })} id="password_LOG" type="password"></input>
                <p>{errors.password_LOG?.message}</p>

                <button type='submit'>Login</button>
            </form>
            <p>{loginStatus}</p>
        </div>
    )
}