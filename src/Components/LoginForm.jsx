import {useForm} from 'react-hook-form'


export default function LoginForm(){
    
    const {register, handleSubmit, formState : {errors}} = useForm()

    const submittedData = (data) => {
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(submittedData)}>
            <label htmlFor="username_LOG">Username: </label>
            <input {...register("user_username_LOG",{
                pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Using invalid symbols!"
                },
                required: "Required field!"
            })} id="username_LOG"></input>
            <p>{errors.user_username_LOG?.message}</p>

            <label htmlFor="password_LOG">Password: </label>
            <input {...register("user_password_LOG", {
                pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{8,}$/,
                    message: "The password must contain: at least 8 characters, one lowercase letter, one uppercase letter, one digit, and one special character."
                },
                required: "Required field!"

            })} id="password_LOG" type="password"></input>
            <p>{errors.user_password_LOG?.message}</p>

            <button type='submit'>Login</button>
        </form>
    )
}