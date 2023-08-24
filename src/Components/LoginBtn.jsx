export default function LoginBtn({onClick}){


    return(
        <button onClick={() => onClick("login")}>Login</button>
    )
}