import { useForm } from "react-hook-form";

export default function RegisterForm(){

    const {register, handleSubmit, formState : {errors}} = useForm()

    const submittedData = (data) => {
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(submittedData)}>

            <label htmlFor="username_REG">Username: </label>
            <input {...register("user_username_REG", {
                pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Using ivalid symbols"
                },
                required: "Required field!"
            })} id="username_REG"></input>
            <p>{errors.user_username_REG?.message}</p>

            <label htmlFor="email_REG">Email: </label>
            <input {...register("user_email_REG",{
                pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Using invalid symbols!"
                },
                required: "Required field!"
            })} id="email_REG"></input>
            <p>{errors.user_email_REG?.message}</p>

            <label htmlFor="password_REG">Password: </label>
            <input {...register("user_password_REG",{
                pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{8,}$/,
                    message: "The password must contain: at least 8 characters, one lowercase letter, one uppercase letter, one digit, and one special character."
                },
                required: "Required field!"
            })} id="password_REG"></input>
            <p>{errors.user_password_REG?.message}</p>

            <button type="submit">Register</button>
        </form>
    )
}