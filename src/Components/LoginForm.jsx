import {useForm} from 'react-hook-form'


export default function LoginForm(){
    
    const {register, handleSubmit, formState : {errors}} = useForm()

    const submittedData = (data) => {
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(submittedData)}>
            <label htmlFor="username">Username: </label>
            <input {...register("user_username",{
                pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Using invalid symbols!"
                },
                required: "Required field!"
            })} id="username"></input>
            <p>{errors.user_username?.message}</p>

            <label htmlFor="password">Password: </label>
            <input {...register("user_password", {
                pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{8,}$/,
                    message: "The password must contain: at least 8 characters, one lowercase letter, one uppercase letter, one digit, and one special character."
                },
                required: "Required field!"

            })} id="password" type="password"></input>
            <p>{errors.user_password?.message}</p>

            <button type='submit'>Login</button>
        </form>
    )
}