import { useForm } from "react-hook-form";

export default function RegisterForm(){

    const {register, handleSubmit, formState : {errors}} = useForm()

    const submittedData = (data) => {
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(submittedData)}>

            <label htmlFor="username">Username: </label>
            <input {...register("user_username", {
                pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Using ivalid symbols"
                },
                required: "Required field!"
            })} id="username"></input>
            <p>{errors.user_username?.message}</p>

            <label htmlFor="email">Email: </label>
            <input {...register("user_email",{
                pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Using invalid symbols!"
                },
                required: "Required field!"
            })} id="email"></input>
            <p>{errors.user_email?.message}</p>

            <label htmlFor="password">Password: </label>
            <input {...register("user_password",{
                pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{8,}$/,
                    message: "The password must contain: at least 8 characters, one lowercase letter, one uppercase letter, one digit, and one special character."
                },
                required: "Required field!"
            })} id="password"></input>
            <p>{errors.user_password?.message}</p>

            <button type="submit">Register</button>
        </form>
    )
}